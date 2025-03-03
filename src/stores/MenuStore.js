import {create} from 'zustand'

export const useMenuStore = create((set) => ({
    isMenuOpen: false,
    handleMenu: () => set((state) => ({
        isMenuOpen: !state.isMenuOpen
    }))
}))