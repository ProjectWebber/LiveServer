import {memo, useMemo} from "react";
import PropTypes from "prop-types";

function Tab({id, text, setCheckedItems, checkedItemId}) {
	let isChecked = useMemo(() => checkedItemId === id, [checkedItemId, id]);

	return (
		<label
			htmlFor={id}
			className="font-specialelite text-lg lg:text-2xl transition-colors text-light-text-disable has-checked:text-light-text dark:text-dark-text-disable has-checked:dark:text-dark-text cursor-pointer"
			draggable={false}
		>
			<input
				type="radio"
				name={"grid-tabs"}
				id={id}
				value={id}
				checked={isChecked}
				onChange={() => setCheckedItems(id)}
				className="hidden"
			/>
			{text}
		</label>
	);
}

Tab.propTypes = {
	id: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	setCheckedItems: PropTypes.func.isRequired,
	checkedItemId: PropTypes.string.isRequired,
};

export default memo(Tab);
