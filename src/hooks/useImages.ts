import { useInfiniteQuery } from '@tanstack/react-query';
// import APIClient from '../services/api-client';
// import useGameQueryStore from '../store';
import axios from 'axios';

// const apiClient = new APIClient<Photo>('/games');

export interface Photo {
  id: string;
  alt_description: string;
  blur_hash: string;
  urls: {
    thumb: string;
  };
}

const useImages = (sortOrder: string) =>
  useInfiniteQuery<Photo[], Error>({
    queryKey: ['photos', sortOrder],
    queryFn: ({ pageParam }) =>
      axios
        .get<Photo[]>(
          'https://api.unsplash.com/photos/?client_id=oCrtWPWTTAVT50aAEeIFIrmHErUCNse4GZSwkHif2xk',
          {
            params: {
              page: pageParam,
              order_by: sortOrder,
            },
          }
        )
        .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default useImages;
