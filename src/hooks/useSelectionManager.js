import {useEffect} from "react";
import {useCallback, useMemo, useState} from "react";
import {useLocalStorage} from "@hooks/useLocalStorage";

function useSelectionManager() {
	const {getLocalStorageData, setLocalStorageData} = useLocalStorage();

	const [currentCategory, setCurrentCategory] = useState("corpos");

	const memoizedSelectedCategory = useMemo(
		() => currentCategory,
		[currentCategory],
	);

	const [selectedProps, setSelectedProps] = useState(() => {
		const response = getLocalStorageData({key: "selectedProps"});

		if (response !== null) return response;
		return {
			corpos: {
				id: "corpos-m-1",
				src: "https://cloud.appwrite.io/v1/storage/buckets/67b90a58001408625cc1/files/corpos-m-1/view?project=67b909de0016b14256d8",
			},
			cabelos: {
				id: "prop-vazio",
				src: "https://cloud.appwrite.io/v1/storage/buckets/67b90a58001408625cc1/files/prop-vazio/view?project=67b909de0016b14256d8",
			},
			sobrancelhas: {
				id: "prop-vazio",
				src: "https://cloud.appwrite.io/v1/storage/buckets/67b90a58001408625cc1/files/prop-vazio/view?project=67b909de0016b14256d8",
			},
			olhos: {
				id: "prop-vazio",
				src: "https://cloud.appwrite.io/v1/storage/buckets/67b90a58001408625cc1/files/prop-vazio/view?project=67b909de0016b14256d8",
			},
			narizes: {
				id: "prop-vazio",
				src: "https://cloud.appwrite.io/v1/storage/buckets/67b90a58001408625cc1/files/prop-vazio/view?project=67b909de0016b14256d8",
			},
			bocas: {
				id: "prop-vazio",
				src: "https://cloud.appwrite.io/v1/storage/buckets/67b90a58001408625cc1/files/prop-vazio/view?project=67b909de0016b14256d8",
			},
			camisas: {
				id: "prop-vazio",
				src: "https://cloud.appwrite.io/v1/storage/buckets/67b90a58001408625cc1/files/prop-vazio/view?project=67b909de0016b14256d8",
			},
		};
	});
	const memoizedSelectedProps = useMemo(() => selectedProps, [selectedProps]);

	const setSelectedProp = useCallback(
		(category, item) => {
			setSelectedProps((prev) => {
				const newObject = {...prev, [category]: item};
				setLocalStorageData({key: "selectedProps", object: newObject});

				return newObject;
			});
		},
		[setLocalStorageData],
	);

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
