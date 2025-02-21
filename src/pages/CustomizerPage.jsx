//Components
import SelectionContainer from "@components/SelectionContainer";
import PreviewContainer from "@components/Preview/PreviewContainer";
import BottomOptionsContainer from "@components/BottomOptions/BottomOptionsContainer"

// Contexts
import {CustomizerProvider} from "@contexts/CustomizerContext";

function CustomizerPage() {
	return (
		<CustomizerProvider>
			<section className="relative flex flex-col-reverse lg:flex lg:flex-row justify-between items-center w-full h-full px-2 pb-2 lg:py-10">
				<BottomOptionsContainer />

				<section className="flex-1 flex flex-col justify-center w-full h-full">
					<SelectionContainer />
				</section>
				<PreviewContainer />
			</section>
		</CustomizerProvider>
	);
}

export default CustomizerPage;
