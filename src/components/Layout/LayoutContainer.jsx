//Components
import MenuContainer from "@components/Menu/MenuContainer";
import HeaderContainer from "@components/header/HeaderContainer";
import BackgroundImage from "@components/BackgroundImage";

import {useMenuStore} from "@stores/MenuStore";

import PropTypes from "prop-types";

function LayoutContainer({children}) {
	const {isMenuOpen} = useMenuStore();

	return (
		<main className="relative flex flex-col w-screen h-[100dvh] overflow-hidden bg-gradient-to-br from-light-bg-gradient-start to-light-bg-gradient-end dark:from-dark-bg-gradient-start dark:to-dark-bg-gradient-end transition-colors z-0">
			{isMenuOpen && <MenuContainer />}
			<HeaderContainer />
			<section className="relative flex-1 w-full h-full z-10">
				{children}
			</section>
			<BackgroundImage />
		</main>
	);
}

LayoutContainer.propTypes = {
	children: PropTypes.node,
};

export default LayoutContainer;
