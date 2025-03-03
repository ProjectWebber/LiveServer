import {PiMoonFill, PiSunFill} from "react-icons/pi"
import { useThemeStore } from "../../stores/ThemeStore"

function ThemeButton() {
	const {changeTheme, theme} = useThemeStore()

	const lightIcon = <PiMoonFill size="1.3rem" />
	const darkIcon = <PiSunFill size="1.3rem" color="#ffffff" />

	return (
		<button
			onClick={() => changeTheme()}
			className="bg-gray-400/30 aspect-square w-fit h-fit p-1 rounded-4xl cursor-pointer">
			{theme === "light" ? lightIcon : darkIcon}
		</button>
	)
}

export default ThemeButton
