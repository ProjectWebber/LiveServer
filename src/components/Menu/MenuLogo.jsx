import { useThemeStore } from "../../stores/ThemeStore";

function MenuLogo() {
	const {theme} = useThemeStore();

	const srcLight = "/BetaTesting/logo-green-light.webp";
	const srcDark = "/BetaTesting/logo-green-dark.webp";

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
