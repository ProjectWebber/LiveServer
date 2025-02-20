import {useMemo} from "react"

function useGridData(currentCategory, images, currentBodyId) {
	const testImages = [
		{
			id: "1",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "2",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "3",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "4",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "5",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "6",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "7",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "8",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "9",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "10",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "11",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "12",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "13",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
		{
			id: "14",
			src: "https://cloud.appwrite.io/v1/storage/buckets/679f73d400156d7f9182/files/corpo-f-1/view?project=679f73800036b0359b4f&mode=admin",
		},
	]

	const gridData = useMemo(() => {
		if (Object.keys(images).length === 0) return []
		switch (currentCategory) {
			case "corpos":
				return images.corpos
			default:
				return images[currentBodyId][currentCategory]
		}
	}, [images, currentCategory, currentBodyId])
	return {gridData}
}

export default useGridData
