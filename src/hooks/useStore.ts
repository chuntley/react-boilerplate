import { create } from "zustand";

interface StoreState {
  count: number;
  increment: () => void;
}

const useStore = create<StoreState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

export { useStore };
