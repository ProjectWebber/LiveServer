import {useSecrets} from "@contexts/SecretsContext";
import {useThemeStore} from "@stores/ThemeStore";

function HeaderLogo() {
	const {theme} = useThemeStore();
	const {handleCelCounter} = useSecrets();

	const srcLight = "/logo-green-light.webp";
	const srcDark = "/logo-green-dark.webp";

	const handleSrc = () => (theme !== "dark" ? srcLight : srcDark);

	return (
		<div onClick={handleCelCounter} className="h-full">
			<img
				src={handleSrc()}
				alt="Logo do Projeto Webber - Header"
				className="h-full"
			/>
		</div>
	);
}

export default HeaderLogo;
