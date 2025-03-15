import {useContext, createContext} from "react";
import PropTypes from "prop-types";

//Custom Hooks
import useImageManager from "@hooks/useImageManager";
import useSelectionManager from "@hooks/useSelectionManager";
import useGridData from "@hooks/useGridData";

//Declarations
const CustomizerContext = createContext();

function CustomizerProvider({children}) {
	const {images, categories} = useImageManager();

	const {
		selectedCategory,
		setSelectedProp,
		selectedProps,
		setSelectedCategory,
		resetSelectedProps,
	} = useSelectionManager();

	const {gridData} = useGridData(
		selectedCategory,
		images,
		selectedProps.corpos.id,
	);

	return (
		<CustomizerContext.Provider
			value={{
				images,
				selectedCategory,
				setSelectedProp,
				selectedProps,
				setSelectedCategory,
				resetSelectedProps,
				categories,
				gridData,
			}}
		>
			{children}
		</CustomizerContext.Provider>
	);
}

CustomizerProvider.propTypes = {
	children: PropTypes.any,
};

const useCustomizer = () => useContext(CustomizerContext);

export {CustomizerProvider, useCustomizer};
