//Components
import SelectionContainer from "@components/SelectionContainer";
import PreviewContainer from "@components/Preview/PreviewContainer";
import BottomOptionsContainer from "@components/BottomOptions/BottomOptionsContainer";
import PageTransitionAnimation from "@components/PageTransitionAnimation";

// Contexts
import {CustomizerProvider} from "@contexts/CustomizerContext";

function CustomizerPage() {
	return (
		<PageTransitionAnimation>
			<CustomizerProvider>
				<section className="relative flex flex-col w-full h-full gap-3 lg:gap-10 px-2 lg:px-10 pb-3 lg:pb-5 lg:pt-10">

					<section className="relative flex flex-col-reverse lg:flex lg:flex-row justify-between items-center w-full h-full ">
						<section className="flex-1 flex flex-col justify-center w-full h-full">
							<SelectionContainer />
						</section>
						<PreviewContainer />
					</section>
					<BottomOptionsContainer />
				</section>
			</CustomizerProvider>
		</PageTransitionAnimation>
	);
}

export default CustomizerPage;
