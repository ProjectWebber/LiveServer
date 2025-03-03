import {create} from "zustand";

export const useThemeStore = create((set) => ({
	theme:
		localStorage.getItem("theme") !== null
			? localStorage.getItem("theme")
			: "dark",
	changeTheme: () => {
		set((state) => {
			const newTheme = state.theme === "light" ? "dark" : "light";
			localStorage.setItem("theme", newTheme);
			return {
				theme: newTheme,
			};
		});
	},
}));
