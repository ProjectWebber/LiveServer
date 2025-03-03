import {useLocalStorage} from "@hooks/useLocalStorage";
import { useRef } from "react";

function SavedPortraits() {
	const {getData} = useLocalStorage();
	const savedPortraits = useRef(getData({key: "savedPortraits"}))

	return (
		<section className="flex flex-wrap w-full h-full p-8">
			{savedPortraits.current !== null ? (
				<span>Portraits salvos...</span>
			) : (
				<section className="flex items-center justify-center w-full h-full">
					<span className="text-xl text-gray-500">Nenhum portrait salvo...</span>
				</section>
			)}
		</section>
	);
}

export default SavedPortraits;
