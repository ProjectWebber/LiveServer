import {Client, Storage} from "appwrite"
import {useCallback, useEffect, useState, useMemo} from "react"

// Configuração do Appwrite
const PROJECT_ID = "679f73800036b0359b4f"
const BUCKET_ID = "679f73d400156d7f9182"

const client = new Client()
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(PROJECT_ID)
const storage = new Storage(client)

function useImageFetcher() {
	const [images, setImages] = useState({})

	useEffect(() => {
		const getImages = async () => {
			try {
				const response = await storage.listFiles(BUCKET_ID)
				setImages(
					response.files.map((file) => {
						let fileSrc = `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${file['$id']}/view?project=${PROJECT_ID}`
						return ({
							id: file.$id,
							src: fileSrc,
						})
					})
				)
			} catch (error) {
				console.error("Erro ao buscar imagens:", error)
				return []
			}
		}

		getImages()
	}, [])

	return {images}
}

function useImageCategorizer({images, categories}) {
	const [organizedImages, setOrganizedImages] = useState({})

	const organize = useCallback(() => {
		if (Object.keys(images).length != 0) {
			let newObject = {}
			const bodyImages = images.filter((image) => image.id.startsWith("corpos-"))

			newObject.corpos = bodyImages

			bodyImages.forEach(bodyImage => {
				newObject[bodyImage.id] = {}

				categories.forEach(category => {
					newObject[bodyImage.id][category] = images
					.filter((image) => image.id.endsWith(bodyImage.id))
					.filter((image) => image.id.startsWith(category))
				})

				setOrganizedImages(newObject)
			})
		} else return {}
	}, [images])

	useEffect(() => {
		organize()
	}, [organize])

	return {organizedImages}
}

function useImageManager() {
	const {images} = useImageFetcher()

	const categories = useMemo(
		() => [
			"corpos",
			"cabelos",
			"sobrancelhas",
			"olhos",
			"narizes",
			"bocas",
			"camisas",
		],
		[]
	)

	const {organizedImages} = useImageCategorizer({images, categories})

	const memoizedOrganizedImages = useMemo(
		() => organizedImages,
		[organizedImages]
	)

	return {images: memoizedOrganizedImages, categories}
}

export default useImageManager
