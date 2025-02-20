import {PiMoonFill, PiSunFill} from "react-icons/pi"
import {useTheme} from "@contexts/ThemeContext"

function ThemeButton() {
	const {setTheme, theme} = useTheme()

	const handleClick = () => {
		setTheme(theme === "light" ? "dark" : "light")
	}

	const lightIcon = <PiMoonFill size="1.3rem" />
	const darkIcon = <PiSunFill size="1.3rem" color="#ffffff" />

	return (
		<button
			onClick={handleClick}
			className="bg-gray-400/30 aspect-square w-fit h-fit p-1 rounded-4xl cursor-pointer">
			{theme === "light" ? lightIcon : darkIcon}
		</button>
	)
}

export default ThemeButton
