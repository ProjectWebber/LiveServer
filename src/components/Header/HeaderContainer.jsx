import {PiListBold} from "react-icons/pi";
import {useMediaQuery} from "react-responsive";

//Components
import HeaderLogo from "./HeaderLogo";
import MenuButton from "../Buttons/MenuButton";
import ThemeButton from "../buttons/ThemeButton";
import HeaderNavDesktop from "./HeaderNavDesktop";

function HeaderContainer() {
	const isMobile = useMediaQuery({maxWidth: 768});

	return (
		<header className="relative flex justify-between items-center h-16 w-full py-2 px-4 lg:px-10 bg-light-header/40 dark:bg-dark-header/40 transition-colors z-20">
			<HeaderLogo />

			{isMobile ? (
				<div className="flex gap-4">
					<ThemeButton />
					<MenuButton menuContent={<PiListBold size="1.6rem" />} />
				</div>
			) : (
				<HeaderNavDesktop />
			)}
		</header>
	);
}

export default HeaderContainer;
