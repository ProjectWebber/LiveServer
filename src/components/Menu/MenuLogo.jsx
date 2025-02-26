import {useTheme} from "@contexts/ThemeContext";
function MenuLogo() {
	const {theme} = useTheme();

	const srcLight = "/LiveServer/logo-green-light.webp";
	const srcDark = "/LiveServer/logo-green-dark.webp";

	const handleSrc = (() => (theme !== "dark" ? srcLight : srcDark))();

	return (
		<img
			src={handleSrc}
			alt="Logo do Projeto Webber - Header"
			className="max-h-32 w-fit object-contain "
		/>
	);
}

export default MenuLogo;
