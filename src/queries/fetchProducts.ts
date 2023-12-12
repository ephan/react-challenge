import { listDataSchema } from '../schemas/listDataSchema';
import { request } from '../utils/fetchUtils';

const PRODUCT_URL = 'https://dummyjson.com/products';

type fetchProductsProps = {
  limit?: number;
  skip?: number;
};

const DEFAULT_LIMIT = 10;
const DEFAULT_SKIP = 0;

export const fetchProducts = async ({
  limit = DEFAULT_LIMIT,
  skip = DEFAULT_SKIP,
}: fetchProductsProps) => {
  const response = await request(`${PRODUCT_URL}?limit=${limit}&skip=${skip}`);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const responseData = await response.json();
  const validatedData = listDataSchema.safeParse(responseData);
  if (!validatedData.success) {
    throw new Error('Data did not pass validation');
  }

  return validatedData.data;
};
