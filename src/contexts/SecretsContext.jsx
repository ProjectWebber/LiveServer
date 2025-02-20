import {useContext, createContext, useState, useCallback, useMemo} from "react";
import PropTypes from "prop-types";

const SecretsContext = createContext();

function SecretsProvider({children}) {
	const [celCounter, setCelCounter] = useState(0);
	const celCounterMemoized = useMemo(() => celCounter, [celCounter])

	const handleCelCounter = useCallback(() => {
		setCelCounter((prev) => {
			if(prev < 32) return prev + 1
			return prev;
		})
	}, []);

	return (
		<SecretsContext.Provider value={{celCounter: celCounterMemoized, handleCelCounter}}>
			{children}
		</SecretsContext.Provider>
	);
}

const useSecrets = () => useContext(SecretsContext);


SecretsProvider.propTypes = {
	children: PropTypes.any,
};

export {SecretsProvider, useSecrets};
