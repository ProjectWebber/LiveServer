import {useCallback, useMemo, useState} from "react";

function useSelectionManager() {
	const [currentCategory, setCurrentCategory] = useState("corpos");

	const memoizedSelectedCategory = useMemo(
		() => currentCategory,
		[currentCategory],
	);

	const [selectedProps, setSelectedProps] = useState({
		corpos: {
			id: "corpos-m-1",
			src: "https://cloud.appwrite.io/v1/storage/buckets/67b90a58001408625cc1/files/corpos-m-1/view?project=67b909de0016b14256d8",
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
	});
	const memoizedSelectedProps = useMemo(() => selectedProps, [selectedProps]);

	const setSelectedProp = useCallback((category, item) => {
		setSelectedProps((prev) => {
			return {
				...prev,
				[category]: item,
			};
		});
	}, []);

	const setSelectedCategory = useCallback((newCategory) => {
		setCurrentCategory(newCategory);
	}, []);

	return {
		selectedCategory: memoizedSelectedCategory,
		setSelectedProp,
		selectedProps: memoizedSelectedProps,
		setSelectedCategory,
	};
}

export default useSelectionManager;
