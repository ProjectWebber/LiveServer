import {memo} from "react";

// Icons
import {
	PiXBold,
	PiHouseFill,
	PiChatCenteredDotsFill,
	PiUserPlusFill,
} from "react-icons/pi";
import {FaDiscord, FaHandHoldingUsd} from "react-icons/fa";

// Hooks
import {useMenu} from "@contexts/MenuContext";

// Components
import MenuButton from "@components/Buttons/MenuButton";
import MenuLogo from "./MenuLogo";
import NavigationLink from "../NavigationLink";

function MenuContainer() {
	const {handleClick} = useMenu();

	return (
		<section className="absolute flex flex-col justify-between h-[100dvh] w-screen bg-black/5  dark:bg-black/50 backdrop-blur-[8px] z-30 px-8 py-12">
			<MenuLogo />

			<nav className="flex items-end w-full z-40">
				<section className="flex flex-col h-fit w-full gap-10 rounded-xl">
					<div className="flex flex-col w-full gap-3">
						<NavigationLink
							text={"Início"}
							icon={<PiHouseFill size="1.4rem" />}
							path={"/BetaTesting/"}
							ariaLabel="Pagina inicial"
							handleClick={handleClick}
						/>

						<NavigationLink
							text={"Criar Personagem"}
							icon={<PiUserPlusFill size="1.4rem" />}
							path={"/BetaTesting/Customizer"}
							ariaLabel="Pagina de criação de personagens"
							handleClick={handleClick}
						/>
					</div>

					<MenuButton
						menuContent={
							<>
								<PiXBold size="1.4rem" /> Fechar Menu
							</>
						}
					/>
				</section>

				<section className="flex flex-col gap-3">
					<NavigationLink
						text={"Discord"}
						icon={<FaDiscord size="1.4rem" />}
						path="https://discord.gg/KXJ8VGQYmT"
						customStyle="text-discord"
						ariaLabel="Pagina do discord"
						isExternalLink
					/>

					<NavigationLink
						text={"Feedback"}
						icon={<PiChatCenteredDotsFill size="1.4rem" />}
						path="https://forms.gle/bYoSxrikGCGA6ffK7"
						customStyle="text-golden"
						ariaLabel="Pagina de feedback"
						isExternalLink
					/>

					<NavigationLink
						text={"Apoiar"}
						icon={<FaHandHoldingUsd size="1.4rem" />}
						path="https://www.catarse.me/project_webber"
						customStyle="text-catarse"
						ariaLabel="Pagina do catarse"
						isExternalLink
					/>
				</section>
			</nav>
		</section>
	);
}

export default memo(MenuContainer);
