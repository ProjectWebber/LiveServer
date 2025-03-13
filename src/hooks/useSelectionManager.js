import {useCallback, useMemo, useState, useEffect} from "react";
import {useLocalStorage} from "@hooks/useLocalStorage";
import {defaultSelectedProps} from "@utils/defaultValues";

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const BUCKET_ID = import.meta.env.VITE_BUCKET_ID;
let imageLinkTemplate = `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/$IMAGE_ID/view?project=${PROJECT_ID}`;

function useSelectionManager() {
	const {getData, overwriteData} = useLocalStorage();

	const [currentCategory, setCurrentCategory] = useState("corpos");

	const memoizedSelectedCategory = useMemo(
		() => currentCategory,
		[currentCategory],
	);

	const [selectedProps, setSelectedProps] = useState(() => {
		const localStorageData = getData({key: "previousPortrait"});

		if (localStorageData !== null) {
			let objectEntries = Object.entries(localStorageData);
			let newObject = Object.fromEntries(
				objectEntries.map((entry) => {
					let categoryEntryID = Object.entries(entry[1])[0];

					return [
						entry[0],
						Object.fromEntries([
							categoryEntryID,
							[
								"src",
								imageLinkTemplate.replace("$IMAGE_ID", categoryEntryID[1]),
							],
						]),
					];
				}),
			);

			return newObject;
		}
		return defaultSelectedProps;
	});
	const memoizedSelectedProps = useMemo(() => selectedProps, [selectedProps]);

	useEffect(() => {
		overwriteData({key: "previousPortrait", data: memoizedSelectedProps});
	}, [overwriteData, memoizedSelectedProps]);

	const setSelectedProp = useCallback((category, item) => {
		setSelectedProps((prev) => {
			return {...prev, [category]: item};
		});
	}, []);

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
