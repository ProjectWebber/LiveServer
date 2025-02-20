import PropTypes from "prop-types";

function TextIconButton({onClick = () => {}, icon, text, customStyle}) {
	return (
		<button
			className={`flex items-center px-3 py-1 rounded-4xl bg-dark-cta text-dark-text dark:text-light-text font-medium ${customStyle}`}
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
