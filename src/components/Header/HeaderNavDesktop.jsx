//Components
import NavigationLink from "../NavigationLink";
import ThemeButton from "../buttons/ThemeButton";

function HeaderNavDesktop() {
	return (
		<nav className="flex gap-8 text-light-text dark:text-dark-text">
			<div className="flex gap-5">
				<NavigationLink
					text="Início"
					path={"/"}
					ariaLabel="Pagina de Início"
				/>
				<NavigationLink
					text="Customizador"
					path={"/Customizer"}
					ariaLabel="Pagina do Customizador"
				/>
				<NavigationLink
					text="Meus Personagens"
					path={"/MeusPersonagens"}
					ariaLabel="Pagina de personagens salvos"
				/>
			</div>
			|
			<div className="flex gap-5">
				<NavigationLink
					text="Discord"
					path={"https:/discord.gg/KXJ8VGQYmT"}
					ariaLabel="Pagina do Discord"
					customStyle="underline underline-offset-5 text-darkprimary dark:text-primary "
					isExternalLink
				/>
				<NavigationLink
					text="Feedback"
					path={"https:/forms.gle/bYoSxrikGCGA6ffK7"}
					ariaLabel="Pagina de Feedback"
					customStyle="underline underline-offset-5 text-darkprimary dark:text-primary "
					isExternalLink
				/>

				<NavigationLink
					text="Apoiar"
					path={"https:/www.catarse.me/project_webber"}
					ariaLabel="Pagina de Feedback"
					customStyle="underline underline-offset-5 text-darkprimary dark:text-primary "
					isExternalLink
				/>
			</div>
			|
			<ThemeButton />
		</nav>
	);
}

export default HeaderNavDesktop;
