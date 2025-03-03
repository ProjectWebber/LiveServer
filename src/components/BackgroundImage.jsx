import {useSecrets} from "@contexts/SecretsContext";

function BackgroundImage() {
	const {celCounter} = useSecrets();
	const src =
		celCounter !== 32
			? "/BetaTesting/bg-image-green.avif"
			: "/BetaTesting/cellbit-velho.avif";

	return (
		<>
			<img
				src={src}
				alt="background image"
				className={`fixed left-[50%] top-[50%] translate-[-50%] max-h-[100dvh] aspect-square filter brightness-[80%] dark:brightness-[100%] opacity-[14%] dark:opacity-[14%] ${
					celCounter !== 32 && "blur-[5px] animate-spin-slow"
				} z-0`}
				draggable={false}
			/>
		</>
	);
}

export default BackgroundImage;
