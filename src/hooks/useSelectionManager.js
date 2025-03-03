import {useCallback, useMemo, useState} from "react";
import {useLocalStorage} from "@hooks/useLocalStorage";
import {defaultSelectedProps} from "@utils/defaultValues";

function useSelectionManager() {
	const {getData, overwriteData} = useLocalStorage();

	const [currentCategory, setCurrentCategory] = useState("corpos");

	const memoizedSelectedCategory = useMemo(
		() => currentCategory,
		[currentCategory],
	);

	const [selectedProps, setSelectedProps] = useState(() => {
		const response = getData({key: "previousPortrait"});

		if (response !== null) return response;
		return defaultSelectedProps;
	});
	const memoizedSelectedProps = useMemo(() => selectedProps, [selectedProps]);

	const setSelectedProp = useCallback(
		(category, item) => {
			setSelectedProps((prev) => {
				const newObject = {...prev, [category]: item};
				overwriteData({key: "previousPortrait", data: newObject});

				return newObject;
			});
		},
		[overwriteData],
	);

	const resetSelectedProps = useCallback(() => {
		setSelectedProps(defaultSelectedProps);
	}, []);

	const setSelectedCategory = useCallback((newCategory) => {
		setCurrentCategory(newCategory);
	}, []);

	return {
		selectedCategory: memoizedSelectedCategory,
		setSelectedProp,
		selectedProps: memoizedSelectedProps,
		setSelectedCategory,
		resetSelectedProps,
	};
}

export default useSelectionManager;
