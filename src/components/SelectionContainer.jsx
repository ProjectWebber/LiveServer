//Components
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import TabContainer from "./Tabs/TabContainer";

//Contexts
import {useCustomizer} from "@contexts/CustomizerContext";

function SelectionContainer() {
	const {selectedCategory, setSelectedProp, selectedProps, gridData} =
		useCustomizer();

	return (
		<section className="relative flex flex-col h-fit min-w-[10rem] w-full max-w-screen lg:max-w-[36rem] px-4 pb-4">
			<TabContainer />
			<GridContainer>
				{gridData.length === 0 ? (
					<span className="text-light-text dark:text-dark-text">
						Não há imagens na categoria.
					</span>
				) : (
					gridData.map((image) => (
						<GridItem
							src={image.src}
							alt={image.id}
							id={image.id}
							name={selectedCategory}
							checkedItemId={selectedProps[selectedCategory].id}
							setCheckedItems={setSelectedProp}
							key={image.src + `-grid-${selectedCategory}`}
						/>
					))
				)}
			</GridContainer>
		</section>
	);
}

export default SelectionContainer;
