import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {lazy, Suspense} from "react";

// Pages
const CustomizerPage = lazy(() => import("@pages/CustomizerPage"));
const HomePage = lazy(() => import("@pages/HomePage"));
const TestPage = lazy(() => import("@pages/TestPage"));
const TestPageColorPackage = lazy(() => import("@pages/TestPageColorPackage"));

// Components
import LayoutContainer from "@components/Layout/LayoutContainer";
import LoadingScreen from "@components/LoadingScreen";

// Contexts
import {ThemeProvider} from "@contexts/ThemeContext";
import {MenuProvider} from "@contexts/MenuContext";
import {SecretsProvider} from "@contexts/SecretsContext";

function App() {
	return (
		<ThemeProvider>
			<SecretsProvider>
				<MenuProvider>
					<Router>
						<Suspense fallback={<LoadingScreen />}>
							<LayoutContainer>
								<Routes>
									<Route Component={HomePage} path="/LiveServer/" />
									<Route
										Component={CustomizerPage}
										path="/LiveServer/Customizer"
									/>
									<Route Component={TestPage} path="/LiveServer/TestPage" />
									<Route Component={TestPageColorPackage} path="/LiveServer/TestPageColorPackage" />
								</Routes>
							</LayoutContainer>
						</Suspense>
					</Router>
				</MenuProvider>
			</SecretsProvider>
		</ThemeProvider>
	);
}

export default App;

