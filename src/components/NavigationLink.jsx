import PropTypes from "prop-types";
import {Link, NavLink} from "react-router-dom";

function NavigationLink({
	text,
	icon,
	path = "",
	customStyle = "text-light-text dark:text-dark-text",
	ariaLabel = "",
	isExternalLink = false,
	handleClick = () => {}
}) {

	return (
		<>
			{isExternalLink ? (
				<Link
					to={path}
					aria-label={ariaLabel}
					role="link"
					target="_blank"
					className={`flex items-center gap-1 font-medium ${customStyle}`}
				>
					{icon}
					{text}
				</Link>
			) : (
				<NavLink
					to={path}
					aria-label={ariaLabel}
					role="link"
					onClick={handleClick}
					className={`flex items-center gap-1 font-medium ${customStyle}`}
				>
					{icon}
					{text}
				</NavLink>
			)}
		</>
	);
}

NavigationLink.propTypes = {
	text: PropTypes.string,
	icon: PropTypes.node,
	customStyle: PropTypes.string,
	path: PropTypes.string.isRequired,
	ariaLabel: PropTypes.string.isRequired,
	isExternalLink: PropTypes.bool,
	handleClick: PropTypes.func
};

export default NavigationLink;
