// store.js
import create from "zustand";

const useStore = create((set) => ({
    language: "DE",
    setLanguage: (lang) => set({ language: lang }),
}));

export default useStore;
