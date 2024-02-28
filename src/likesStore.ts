/**
 * Zustand store for managing liked images.
 * The likedImages state is automatically persisted to localStorage.
 * Changes to likedImages trigger re-renders in components subscribed to this store.
 * So we dont need useEffect hook in our Like component to update and re-render when likedImages state changes.
 */

import { create } from 'zustand';
import { Photo } from './hooks/useImages';

interface LikesState {
  likedImages: Photo[];
  addLikedImage: (image: Photo) => void;
  removeLikedImage: (id: string) => void;
}

const useLikesStore = create<LikesState>((set) => ({
  likedImages: JSON.parse(localStorage.getItem('likedImages') || '[]'),

  addLikedImage: (image) =>
    set((state) => {
      const newLikedImages = [...state.likedImages, image];
      localStorage.setItem('likedImages', JSON.stringify(newLikedImages));
      return { likedImages: newLikedImages };
    }),

  removeLikedImage: (id) =>
    set((state) => {
      const newLikedImages = state.likedImages.filter(
        (image) => image.id !== id
      );
      localStorage.setItem('likedImages', JSON.stringify(newLikedImages));
      return { likedImages: newLikedImages };
    }),
}));
export default useLikesStore;
