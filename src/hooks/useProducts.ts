import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../queries/fetchProducts';
const PRODUCTS_QUERY_KEY = 'products';

type useProductsProps = {
  page?: number;
};

const PAGE_SIZE = 10;

export const useProducts = ({ page = 0 }: useProductsProps) => {
  const productQuery = useQuery(
    [PRODUCTS_QUERY_KEY, page],
    () => fetchProducts({ limit: PAGE_SIZE, skip: PAGE_SIZE * page }),
    {
      getNextPageParam: (lastPage, pages) => {
        // Check if there are more pages and return the next page number or undefined
        const totalPages = Math.ceil(lastPage.total / PAGE_SIZE);
        return page + 1 < totalPages ? page + 1 : undefined;
      },
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  );
  return productQuery;
};
