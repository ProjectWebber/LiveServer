import { useCallback } from "react";

export function useLocalStorage() {
	const setLocalStorageData = useCallback(({key, object}) => {
		const json = JSON.stringify(object);
		localStorage.setItem(key, json);
	}, []);

    const getLocalStorageData = useCallback(({key}) => {
        const response = localStorage.getItem(key);
        return JSON.parse(response);
    }, [])

    return {setLocalStorageData, getLocalStorageData}
}
