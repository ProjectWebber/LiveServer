import {motion} from "motion/react";

function LoadingScreen() {
	const src = "/LiveServer/logo-icon.webp";

	return (
		<motion.div
			initial={{opacity: 0}}
			whileInView={{opacity: 1}}
			className="absolute flex justify-center items-center w-[100dvw] h-[100dvh] bg-light bg-gradient-to-br from-light-bg-gradient-start to-light-bg-gradient-end dark:from-dark-bg-gradient-start dark:to-dark-bg-gradient-end transition-colors z-10"
		>
			<motion.img
				initial={{opacity: 0}}
				animate={{opacity: ["50%", "100%", "50%"]}}
				transition={{repeat: Infinity, duration: 1}}
				src={src}
				alt="Icone do Webber"
				className="h-48 dark:invert"
			/>
		</motion.div>
	);
}

export default LoadingScreen;
