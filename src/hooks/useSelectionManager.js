import {useCallback, useMemo, useState} from "react"

function useSelectionManager() {
	const [currentCategory, setCurrentCategory] = useState("corpos")

	const memoizedSelectedCategory = useMemo(
		() => currentCategory,
		[currentCategory]
	)

	const [selectedProps, setSelectedProps] = useState({
		corpos: {
			id: "corpos-m-1",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpos-m-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		cabelos: {
			id: "",
			src: "",
		},
		sobrancelhas: {
			id: "",
			src: "",
		},
		olhos: {
			id: "",
			src: "",
		},
		narizes: {
			id: "",
			src: "",
		},
		bocas: {
			id: "",
			src: "",
		},
		camisas: {
			id: "",
			src: "",
		},
	})
	const memoizedSelectedProps = useMemo(() => selectedProps, [selectedProps])

	const setSelectedProp = useCallback((category, item) => {
		setSelectedProps((prev) => {
			return {
				...prev,
				[category]: item,
			}
		})
	}, [])

	const setSelectedCategory = useCallback((newCategory) => {
		setCurrentCategory(newCategory)
	}, [])

	

	return {
		selectedCategory: memoizedSelectedCategory,
		setSelectedProp,
		selectedProps: memoizedSelectedProps,
		setSelectedCategory,
	}
}

export default useSelectionManager
