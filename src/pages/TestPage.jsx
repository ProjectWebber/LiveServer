import NavigationLink from "../components/NavigationLink";
function TestPage() {
	return (
		<section>
			<NavigationLink
				text={"Criar personagem"}
				path="/BetaTesting/Customizer"
				ariaLabel="Ir para o customizador"
				customStyle=" bg-dark-cta py-3 px-5 rounded-4xl text-dark-text! dark:text-light-text! shadow-button"
			/>
		</section>
	);
}

export default TestPage;
