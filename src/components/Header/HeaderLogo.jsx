import {useTheme} from "@contexts/ThemeContext";
import {useSecrets} from "@contexts/SecretsContext";

function HeaderLogo() {
	const {theme} = useTheme();
	const {handleCelCounter} = useSecrets();

	const srcLight = "/LiveServer/logo-green-light.webp";
	const srcDark = "/LiveServer/logo-green-dark.webp";

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
