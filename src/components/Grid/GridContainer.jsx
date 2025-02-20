import PropTypes from "prop-types";

function GridContainer({children}) {
	return (
		<section className="relative flex flex-col flex-wrap gap-2 lg:gap-4 max-h-76 h-52 md:h-76 w-1/1 px-4 pt-3 overflow-x-auto overflow-y-hidden">
			{children}
		</section>
	);
}

GridContainer.propTypes = {
	children: PropTypes.node,
};

export default GridContainer;
