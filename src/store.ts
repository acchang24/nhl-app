import { create } from "zustand";

// Interface to store global state of the app
interface NhlStore {
  sortStandings: number;
  setSortStandings: (sort: number) => void;
}

// Create store
const useNhlStore = create<NhlStore>((set) => ({
  sortStandings: 0, // Default standings sort to division
  setSortStandings: (sort) => set(() => ({ sortStandings: sort })),
}));

export default useNhlStore;
