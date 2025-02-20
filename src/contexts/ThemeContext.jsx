import {useEffect, useState, createContext, useContext} from "react"
import PropTypes from "prop-types"
import {useMemo} from "react"

const ThemeContext = createContext()

function ThemeProvider({children}) {
	const [theme, setTheme] = useState("dark")
	const memoizedTheme = useMemo(() => theme, [theme])

	useEffect(() => {
		const savedTheme = window.localStorage.getItem("theme") || "dark"
		window.localStorage.setItem("theme", memoizedTheme)
		document.body.classList.remove(savedTheme)
		document.body.classList.add(memoizedTheme)
	}, [memoizedTheme])

	return (
		<ThemeContext.Provider
			value={{theme: memoizedTheme, setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

const useTheme = () => useContext(ThemeContext)

export {ThemeProvider, useTheme}
