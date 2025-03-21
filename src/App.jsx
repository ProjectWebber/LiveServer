import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {lazy, Suspense, useEffect} from "react";

//Pages
const CustomizerPage = lazy(() => import("@pages/CustomizerPage"));
const HomePage = lazy(() => import("@pages/HomePage"));
const SavedPortraits = lazy(() => import("@pages/SavedPortraits"));
//const TestPage = lazy(() => import("@pages/TestPage"));
//const TestPageColorPackage = lazy(() => import("@pages/TestPageColorPackage"));

//Components
import LayoutContainer from "@components/Layout/LayoutContainer";
import LoadingScreen from "@components/LoadingScreen";

//Contexts
import {SecretsProvider} from "@contexts/SecretsContext";
import {useThemeStore} from "./stores/ThemeStore";

function App() {
	const {theme} = useThemeStore();

	useEffect(() => {
		localStorage.setItem("theme", theme);
		document.body.classList = "";
		document.body.classList.add(theme);
	}, [theme]);

	return (
		<SecretsProvider>
			<Router>
				<Suspense fallback={<LoadingScreen />}>
					<LayoutContainer>
						<Routes>
							<Route Component={HomePage} path="/" />
							<Route Component={CustomizerPage} path="/Customizador" />
							<Route Component={SavedPortraits} path="/MeusPersonagens" />
							{/*<Route Component={TestPage} path="/TestPage" />
							<Route
								Component={TestPageColorPackage}
								path="/TestPageColorPackage"
							/>*/}
						</Routes>
					</LayoutContainer>
				</Suspense>
			</Router>
		</SecretsProvider>
	);
}

export default App;

