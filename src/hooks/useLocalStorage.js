import {useCallback} from "react";

export function useLocalStorage() {
	const overwriteData = useCallback(({key, data}) => {
		const json = JSON.stringify(data);
		localStorage.setItem(key, json);
	}, []);

	const getData = useCallback(({key}) => {
		const response = localStorage.getItem(key);
		return JSON.parse(response);
	}, []);

	const pushData = useCallback(({key, data}) => {
		const oldData = getData({key});
		switch (oldData) {
			case null:
				overwriteData({key, data: {data}});
				break;

			default:
				overwriteData({key, data: {...oldData, data}});
				break;
		}
	}, [getData, overwriteData]);

	return {overwriteData, pushData, getData};
}
