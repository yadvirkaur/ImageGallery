import { create } from 'zustand';

interface ImageQuery {
  //   genreId?: number;
  //   platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface ImageQueryStore {
  imageQuery: ImageQuery;
  //   setGenreId: (genreId: number) => void;
  //   setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useImageQueryStore = create<ImageQueryStore>((set) => ({
  imageQuery: {},
  setSearchText: (searchText) => set(() => ({ imageQuery: { searchText } })),
  //   setGenreId: (genreId) =>
  //     set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  //   setPlatformId: (platformId) =>
  //     set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ imageQuery: { ...store.imageQuery, sortOrder } })),
}));

export default useImageQueryStore;
