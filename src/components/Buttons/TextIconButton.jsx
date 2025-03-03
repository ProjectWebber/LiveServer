import PropTypes from "prop-types";
import {motion} from "motion/react";

function TextIconButton({onClick = () => {}, icon, text, customStyle}) {
	return (
		<motion.div
			initial={{scale: 1}}
			whileHover={{scale: 1.03}}
			whileTap={{scale: 0.95}}
			transition={{duration: 0.5, type: "spring"}}
		>
			<button
				className={`flex justify-center items-center px-4 py-2 rounded-4xl bg-primary text-dark-text dark:text-light-text cursor-pointer font-medium hover:brightness-115 transition-all ${customStyle}`}
				onClick={onClick}
			>
				{icon !== undefined && icon}
				{text !== undefined && text}
			</button>
		</motion.div>
	);
}

TextIconButton.propTypes = {
	onClick: PropTypes.func,
	icon: PropTypes.node,
	text: PropTypes.string,
	customStyle: PropTypes.string,
};

export default TextIconButton;
