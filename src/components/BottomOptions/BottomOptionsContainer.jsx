import TextIconButton from "@components/Buttons/TextIconButton";
import {HiOutlineDocumentDownload} from "react-icons/hi";

import useCanvas from "@hooks/useCanvas";
import {useCustomizer} from "@contexts/CustomizerContext";

function BottomOptionsContainer() {
	const {categories} = useCustomizer();
	const {drawAndDownload} = useCanvas();

	return (
		<div className="relative lg:absolute lg:bottom-5 lg:right-5 flex justify-end h-fit w-full">
			<TextIconButton
				text={"Download"}
				icon={<HiOutlineDocumentDownload size="1.5rem" />}
				onClick={() => drawAndDownload({categories})}
			/>
		</div>
	);
}

export default BottomOptionsContainer;
