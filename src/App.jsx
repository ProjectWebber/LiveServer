import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {lazy, Suspense} from "react";

// Pages
const CustomizerPage = lazy(() => import("@pages/CustomizerPage"));
const HomePage = lazy(() => import("@pages/HomePage"));
const TestPage = lazy(() => import("@pages/TestPage"));

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
									<Route Component={HomePage} path="/BetaTesting/" />
									<Route
										Component={CustomizerPage}
										path="/BetaTesting/Customizer"
									/>
									<Route Component={TestPage} path="/BetaTesting/TestPage" />
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

