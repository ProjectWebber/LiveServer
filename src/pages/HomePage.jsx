import NavigationLink from "../components/NavigationLink";
import PageTransitionAnimation from "../components/PageTransitionAnimation";

function HomePage() {
	const heroImageSrc = "//home-image.avif";

	return (
		<PageTransitionAnimation>
			<section className="flex md:flex-row-reverse flex-col justify-center items-center h-full w-full px-4 md:p-18 gap-7 lg:gap-45">
				<img
					src={heroImageSrc}
					alt="Imagem ilustrativa dos personagens"
					className="max-w-[39rem] 2xl:max-w-[49rem] w-full h-[40%] md:h-auto object-contain"
				/>

				<div className="max-w-[35rem] w-full">
					<div className="w-full min-w-[14rem] flex flex-col gap-3 pb-8 md:pb-12">
						<h1 className="text-3xl lg:text-5xl 2xl:text-6xl font-specialelite text-light-text dark:text-dark-text">
							Personalize o seu personagem!
						</h1>
						<p className="text-md lg:text-xl 2xl:text-2xl text-light-text/80 dark:text-dark-text/80">
							Dê vida à sua imaginação transformando as palavras em um visual
							único e estiloso.
						</p>
					</div>
					<NavigationLink
						text={"Criar personagem"}
						path="//Customizer"
						ariaLabel="Ir para o customizador"
						customStyle=" w-fit bg-primary py-3 px-5 rounded-4xl text-light-text! dark:text-dark-text! shadow-button text-md md:text-lg"
					/>
				</div>
			</section>
		</PageTransitionAnimation>
	);
}

export default HomePage;
