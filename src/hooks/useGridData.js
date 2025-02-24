import {useMemo} from "react"

function useGridData(currentCategory, images, currentBodyId) {
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
