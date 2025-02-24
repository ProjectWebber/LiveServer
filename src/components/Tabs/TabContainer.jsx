// Components
import Tab from "./Tab"

// Utils
import captalize from "@utils/captalize"

import PropTypes from "prop-types"
import {motion} from "motion/react"

// Hooks
import {useCustomizer} from "@contexts/CustomizerContext"

function TabContainer() {
	const {
		selectedCategory,
		setSelectedCategory,
		categories
	} = useCustomizer()

	return (
		<motion.nav className="relative flex gap-6 lg:gap-8 lg:mb-2 w-1/1 overflow-x-auto">
			{categories.map((category) => {
				return (
					<Tab
						key={"tab-" + category}
						text={captalize(category)}
						id={category}
						checkedItemId={selectedCategory}
						setCheckedItems={setSelectedCategory}
					/>
				)
			})}
		</motion.nav>
	)
}

export default TabContainer
