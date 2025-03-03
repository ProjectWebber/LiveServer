import TextIconButton from "@components/Buttons/TextIconButton";

import {HiOutlineDocumentDownload} from "react-icons/hi";
import {PiArrowsCounterClockwiseFill} from "react-icons/pi";

import useCanvas from "@hooks/useCanvas";
import {useCustomizer} from "@contexts/CustomizerContext";

function BottomOptionsContainer() {
	const {categories, resetSelectedProps} = useCustomizer();
	const {drawAndDownload} = useCanvas();

	return (
		<div className=" flex justify-end h-fit w-full gap-4">
			<TextIconButton
				text={"Resetar Portrait"}
				icon={<PiArrowsCounterClockwiseFill size="1.5rem" />}
				onClick={() => {
					resetSelectedProps();
				}}
			/>
			<TextIconButton
				text={"Download"}
				icon={<HiOutlineDocumentDownload size="1.5rem" />}
				onClick={() => drawAndDownload({categories})}
			/>
		</div>
	);
}

export default BottomOptionsContainer;
