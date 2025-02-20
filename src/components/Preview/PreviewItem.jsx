import PropTypes from "prop-types"

function PreviewItem({src, alt, id}) {
	return (
		<img
			src={src}
			alt={alt}
			id={id}
			draggable={false}
			crossOrigin="anonymous"
			className="absolute top-0 left-0 w-full h-full aspect-square filter dark:invert"
		/>
	)
}

PreviewItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default PreviewItem