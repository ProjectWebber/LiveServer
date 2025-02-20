import { createContext, useCallback, useState } from "react";
import PropTypes from 'prop-types'
import { useContext } from "react";

const MenuContext = createContext();

function MenuProvider({children}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleClick = useCallback(() => {
        setIsMenuOpen((prev) => {
            return !prev
        })
    }, [])

    return <MenuContext.Provider value={{handleClick, isMenuOpen}}>
        {children}
    </MenuContext.Provider>
}

MenuProvider.propTypes = {
    children: PropTypes.node
}

const useMenu = () => useContext(MenuContext);

export {MenuProvider, useMenu}