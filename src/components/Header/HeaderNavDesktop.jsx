//Components
import NavigationLink from "../NavigationLink";
import ThemeButton from "../buttons/ThemeButton";

function HeaderNavDesktop() {
	return (
		<nav className="flex gap-8 text-light-text dark:text-dark-text">
			<div className="flex gap-5">
				<NavigationLink
					text="Início"
					path={"/BetaTesting/"}
					ariaLabel="Pagina de Início"
				/>
				<NavigationLink
					text="Customizador"
					path={"/BetaTesting/Customizer"}
					ariaLabel="Pagina do Customizador"
				/>
			</div>
			|
			<div className="flex gap-5">
				<NavigationLink
					text="Discord"
					path={"https://discord.gg/KXJ8VGQYmT"}
					ariaLabel="Pagina do Discord"
					customStyle="underline underline-offset-5 text-light-cta dark:text-dark-cta "
					isExternalLink
				/>
				<NavigationLink
					text="Feedback"
					path={"https://forms.gle/bYoSxrikGCGA6ffK7"}
					ariaLabel="Pagina de Feedback"
					customStyle="underline underline-offset-5 text-light-cta dark:text-dark-cta "
					isExternalLink
				/>

				<NavigationLink
					text="Apoiar"
					path={"https://www.catarse.me/project_webber"}
					ariaLabel="Pagina de Feedback"
					customStyle="underline underline-offset-5 text-light-cta dark:text-dark-cta "
					isExternalLink
				/>
			</div>
			|
			<ThemeButton />
		</nav>
	);
}

export default HeaderNavDesktop;
