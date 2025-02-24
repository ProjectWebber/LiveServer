import PropTypes from "prop-types";

function TextIconButton({onClick = () => {}, icon, text, customStyle}) {
	return (
		<button
			className={`flex justify-center items-center px-4 py-2 rounded-4xl bg-dark-cta text-dark-text dark:text-light-text cursor-pointer font-medium hover:brightness-115 transition-all ${customStyle}`}
			onClick={onClick}
		>
			{icon !== undefined && icon}
			{text !== undefined && text}
		</button>
	);
}

TextIconButton.propTypes = {
	onClick: PropTypes.func,
	icon: PropTypes.node,
	text: PropTypes.string,
	customStyle: PropTypes.string,
};

export default TextIconButton;
