import {useCallback} from "react";
import {AnimatePresence} from "motion/react";

// Components
import PreviewItem from "./PreviewItem";

// Context
import {useCustomizer} from "@contexts/CustomizerContext";

function PreviewContianer() {
	const {categories, selectedProps} = useCustomizer();

	const previewFiller = useCallback(() => {
		return categories.map((category) => {
			if (selectedProps[category].src === "") return;
			return (
				<PreviewItem
					src={selectedProps[category].src}
					alt={"imagem de um dos " + category + " selecionado"}
					key={`${selectedProps[category].src}-${category}-preview`}
					id={`preview-${category}`}
				/>
			);
		});
	}, [selectedProps]);

	return (
		<section className="relative h-full m-8 lg:m-0 object-contain aspect-square">
			{previewFiller()}
		</section>
	);
}

export default PreviewContianer;
