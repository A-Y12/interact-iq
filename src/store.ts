// src/store/index.ts
import create from "zustand";

interface ProfileState {
  hideProfile: boolean;
  setHideProfile: (hide: boolean) => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  hideProfile: false,
  setHideProfile: (hide) => set({ hideProfile: hide }),
}));
