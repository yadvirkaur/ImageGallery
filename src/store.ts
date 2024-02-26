import { create } from 'zustand';

interface ImageQuery {
  sortOrder?: string;
  searchText?: string;
}

interface ImageQueryStore {
  imageQuery: ImageQuery;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useImageQueryStore = create<ImageQueryStore>((set) => ({
  imageQuery: {},
  setSearchText: (searchText) => set(() => ({ imageQuery: { searchText } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ imageQuery: { ...store.imageQuery, sortOrder } })),
}));

export default useImageQueryStore;
