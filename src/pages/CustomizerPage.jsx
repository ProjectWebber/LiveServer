//Components
import SelectionContainer from "@components/SelectionContainer";
import PreviewContainer from "@components/Preview/PreviewContainer";
import CanvasContainer from "@components/Canvas/CanvasContainer";

// Contexts
import {CustomizerProvider} from "@contexts/CustomizerContext";


function CustomizerPage() {
	

	return (
		<CustomizerProvider>
			<section className="relative flex flex-col-reverse lg:flex lg:flex-row justify-between items-center w-full h-full px-4 pb-2 lg:py-10">
				<div className="relative lg:absolute lg:bottom-5 lg:right-5 flex justify-end h-fit w-full">
					<CanvasContainer />
				</div>

				<section className="flex-1 flex flex-col justify-center w-full h-full">
					<SelectionContainer />
				</section>
				<PreviewContainer />
			</section>
		</CustomizerProvider>
	);
}

export default CustomizerPage;
