import {create} from "zustand";

export type ModalStore = {
    currentModalId: string | null;
    setCurrentModal: (id: string) => void;
    clearCurrentModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    currentModalId: "",
    setCurrentModal: (id) => set({ currentModalId: id}),
    clearCurrentModal: () => set({ currentModalId: null}),
}));