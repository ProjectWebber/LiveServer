import PropTypes from "prop-types"
import {useCallback} from "react"
import { useMenuStore } from "../../stores/MenuStore"

function MenuButton({menuContent = <p>Sair do Menu</p>, customStyle = ""}) {
	const {handleMenu} = useMenuStore()

	const handleMenuStyle = useCallback(() => {
		return `flex items-center gap-2 text-black dark:text-white cursor-pointer ${customStyle}`
	}, [customStyle])

	return (
		<button onClick={handleMenu} className={handleMenuStyle()}>
			{menuContent}
		</button>
	)
}

MenuButton.propTypes = {
	menuContent: PropTypes.node.isRequired,
	customStyle: PropTypes.string,
}

export default MenuButton
