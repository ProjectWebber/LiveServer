import PropTypes from "prop-types";
import {motion} from "motion/react";

function PreviewItem({src, alt, id}) {
	return (
		<motion.img
			initial={{y: -5, opacity: 0}}
			animate={{y: 0, opacity: 1}}
			transition={{duration: 0.25}}
			src={src}
			alt={alt}
			id={id}
			draggable={false}
			crossOrigin="anonymous"
			className="absolute top-0 left-0 w-full h-full aspect-square"
		/>
	);
}

PreviewItem.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
};

export default PreviewItem;
