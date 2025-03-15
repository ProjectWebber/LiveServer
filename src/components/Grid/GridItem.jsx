import PropTypes from "prop-types";
import {useMemo, useCallback} from "react";
import {motion} from "motion/react";
import {PiXBold} from "react-icons/pi";
import {useRef} from "react";
import {useEffect} from "react";
import {useState} from "react";

function GridItem({src, alt, id, name, checkedItemId, setCheckedItems}) {
	const [isLoading, setIsLoading] = useState(true);
	const isChecked = useMemo(() => checkedItemId === id, [checkedItemId, id]);

	const handleLableStyle = useCallback(() => {
		let style = `relative flex justify-center items-center max-h-23 max-w-23 md:max-h-28 md:max-w-28 h-full aspect-square  rounded-2xl object-contain bg-linear-to-br transition-colors overflow-hidden cursor-pointer
				
		from-light-prop-gradient-start/[20%] to-light-prop-gradient-end/[20%] 
		dark:from-dark-prop-gradient-start/[20%] dark:to-dark-prop-gradient-end/[20%]`;

		const hoverStyle = ` hover:from-light-prop-gradient-start/[28%] hover:to-light-prop-gradient-end/[28%] 
		dark:hover:from-dark-prop-gradient-start/[28%] dark:hover:to-dark-prop-gradient-end/[28%] `;

		const checkedStyle = ` has-checked:from-light-prop-gradient-start/[58%] has-checked:to-light-prop-gradient-end/[58%] 
		has-checked:dark:from-dark-prop-gradient-start/[58%] has-checked:dark:to-dark-prop-gradient-end/[58%]`;

		const loadingStyle = ` ${
			isLoading ? (id !== "prop-vazio" ? "animate-loading" : "") : ""
		}`;

		style += loadingStyle;
		style += hoverStyle;
		style += isChecked && checkedStyle;
		return style;
	}, [isChecked, isLoading])();

	const handleImgStyle = useCallback(() => {
		const categoryZoomStyle = {
			corpos: "top-0 left-0 scale-[1]",
			cabelos: "top-6 lg:top-7 left-1 scale-[1.7]",
			sobrancelhas: "top-22 left-8 lg:top-25 lg:left-10 scale-[4]",
			olhos: "top-19 left-8 lg:top-22 lg:left-9 scale-[4]",
			narizes:
				"top-18 left-11 lg:top-21 lg:left-13 scale-[5] filter dark:invert",
			bocas: "top-9 left-10 lg:top-10 lg:left-13 scale-[5] filter dark:invert",
			camisas: "-top-5 left-[0.8%] lg:-top-5 lg:left-[0.5%] scale-[1.2]",
		};

		return categoryZoomStyle[name];
	}, [name]);

	const image = (
		<img
			src={src}
			alt={alt}
			className={`${
				isLoading && "opacity-0"
			} w-1/1 absolute transition-all ${handleImgStyle()}`}
			draggable={false}
			loading="lazy"
			decoding="async"
			style={{imageRendering: "smooth"}}
			onLoad={(e) => {
				if (e.target.complete) {
					setIsLoading(false);
				}
			}}
		/>
	);

	return (
		<motion.label
			htmlFor={id}
			className={handleLableStyle}
			draggable={false}
			initial={{opacity: 0, y: 10, scale: 1}}
			whileInView={{opacity: 1, y: 0, transition: {duration: 0.4}}}
			whileHover={{scale: 1.1}}
			whileTap={{scale: 0.95, transition: {duration: 0.09}}}
		>
			<input
				type="radio"
				name={name}
				id={id}
				className="hidden "
				value={id}
				checked={isChecked}
				onChange={() => {
					setCheckedItems(name, {id: id, src: src});
				}}
			/>
			{image}
			{id === "prop-vazio" && (
				<PiXBold
					size={"3rem"}
					className="text-light-text dark:text-dark-text"
				/>
			)}
		</motion.label>
	);
}

GridItem.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	checkedItemId: PropTypes.string.isRequired,
	setCheckedItems: PropTypes.func.isRequired,
};

export default GridItem;
