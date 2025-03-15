import {memo} from "react";
import {motion} from "motion/react";

//Icons
import {
	PiXBold,
	PiHouseFill,
	PiChatCenteredDotsFill,
	PiUserPlusFill,
} from "react-icons/pi";
import {FaDiscord, FaHandHoldingUsd} from "react-icons/fa";
import {MdFolderShared} from "react-icons/md";

//Components
import MenuButton from "@components/Buttons/MenuButton";
import MenuLogo from "./MenuLogo";
import NavigationLink from "../NavigationLink";

import {useMenuStore} from "../../stores/MenuStore";

function MenuContainer() {
	const {handleMenu} = useMenuStore();

	return (
		<motion.section
			className="absolute flex flex-col justify-between h-[100dvh] w-screen bg-white/65 dark:bg-black/65 backdrop-blur-[16px] z-30 px-8 py-12"
			initial={{opacity: 0}}
			animate={{opacity: 1}}
		>
			<MenuLogo />

			<nav className="flex items-end w-full z-40">
				<section className="flex flex-col h-fit w-full gap-10 rounded-xl">
					<div className="flex flex-col w-full gap-3">
						<NavigationLink
							text={"Início"}
							icon={<PiHouseFill size="1.4rem" />}
							path={"/"}
							ariaLabel="Pagina inicial"
							handleClick={handleMenu}
						/>

						<NavigationLink
							text={"Criar Personagem"}
							icon={<PiUserPlusFill size="1.4rem" />}
							path={"/Customizador"}
							ariaLabel="Pagina de criação de personagens"
							handleClick={handleMenu}
						/>

						<NavigationLink
							text={"Meus Personagens"}
							icon={<MdFolderShared size="1.4rem" />}
							path={"/MeusPersonagens"}
							ariaLabel="Pagina de personagens salvos"
							handleClick={handleMenu}
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
						path="https:/discord.gg/KXJ8VGQYmT"
						customStyle="text-discord"
						ariaLabel="Pagina do discord"
						isExternalLink
					/>

					<NavigationLink
						text={"Feedback"}
						icon={<PiChatCenteredDotsFill size="1.4rem" />}
						path="https:/forms.gle/bYoSxrikGCGA6ffK7"
						customStyle="text-golden brightness-75 saturate-250 dark:brightness-100 dark:saturate-100"
						ariaLabel="Pagina de feedback"
						isExternalLink
					/>

					<NavigationLink
						text={"Apoiar"}
						icon={<FaHandHoldingUsd size="1.4rem" />}
						path="https:/www.catarse.me/project_webber"
						customStyle="text-catarse"
						ariaLabel="Pagina do catarse"
						isExternalLink
					/>
				</section>
			</nav>
		</motion.section>
	);
}

export default memo(MenuContainer);
