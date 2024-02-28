/**
 * A custom React Hook for fetching images from the Unsplash API using React Query.
 * The data is fetched depending on whether a search text is present or not, and both cases have different interfaces.
 * Returns An instance of `useInfiniteQuery` for fetching images.
 */

import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import useImageQueryStore from '../store';

//This interface when search text is provided by user: FetchResults<Photo[]>
//example: https://api.unsplash.com/search/photos/?&client_id=oCrtWPWTTAVT50aAEeIFIrmHErUCNse4GZSwkHif2xk&query=dog
interface FetchResults<T> {
  total: number;
  total_pages: number;
  results: T[];
}

//This interface when no search text
//example: https://api.unsplash.com/photos/?&client_id=oCrtWPWTTAVT50aAEeIFIrmHErUCNse4GZSwkHif2xk
export interface Photo {
  id: string;
  alt_description: string;
  blur_hash: string;
  urls: {
    thumb: string;
  };
  links: {
    download: string;
  };
}

const useImages = () => {
  const imageQuery = useImageQueryStore((s) => s.imageQuery);

  return useInfiniteQuery<Photo[] | FetchResults<Photo>, Error>({
    queryKey: ['photos', imageQuery],
    queryFn: imageQuery.searchText
      ? ({ pageParam }) =>
          axios
            .get<FetchResults<Photo>>(
              'https://api.unsplash.com/search/photos/?&client_id=oCrtWPWTTAVT50aAEeIFIrmHErUCNse4GZSwkHif2xk',
              {
                params: {
                  order_by: imageQuery.sortOrder,
                  query: imageQuery.searchText,
                  page: pageParam,
                },
              }
            )
            .then((res) => res.data)
      : ({ pageParam }) =>
          axios
            .get<Photo[]>(
              'https://api.unsplash.com/photos/?client_id=oCrtWPWTTAVT50aAEeIFIrmHErUCNse4GZSwkHif2xk',
              {
                params: {
                  page: pageParam,
                  order_by: imageQuery.sortOrder,
                  query: imageQuery.searchText,
                },
              }
            )
            .then((res) => res.data),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if ('results' in lastPage) {
        return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
      }
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useImages;
