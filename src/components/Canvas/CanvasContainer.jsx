import useCanvas from "@hooks/useCanvas";
import {useCustomizer} from "@contexts/CustomizerContext";

import TextIconButton from "@components/Buttons/TextIconButton";
import {HiOutlineDocumentDownload} from "react-icons/hi";

function CanvasContainer() {
	const {categories} = useCustomizer();
	const {drawAndDownload} = useCanvas();

	return (
		<div className="z-50">
			<TextIconButton
				text={"Download"}
				icon={<HiOutlineDocumentDownload size="1.5rem" />}
				onClick={() => drawAndDownload({categories})}
			/>
		</div>
	);
}

export default CanvasContainer;
