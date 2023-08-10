import { create } from "zustand";

// Interface to store global state of the standings page
interface StandingsStore {
  sortStandings: number;
  sortYear: string;
  setSortStandings: (sort: number) => void;
  setYearStandings: (year: string) => void;
}

// Create store
const useStandingsStore = create<StandingsStore>((set) => ({
  sortStandings: 0, // Default standings sort to division
  sortYear: "",
  setSortStandings: (sort) => set(() => ({ sortStandings: sort })),
  setYearStandings: (year) => set(() => ({ sortYear: year })),
}));

export default useStandingsStore;
