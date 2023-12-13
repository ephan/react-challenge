import { Dispatch } from 'react';
import { ListData } from '../../types/listData';
import ListItem from '../ListItem/ListItem';

type ListProps = {
  listData: ListData;
  setSelectedProductId: Dispatch<number>;
};

function List({ listData, setSelectedProductId }: ListProps) {
  return (
    <ul className="flex-grow lg:flex-grow-0 min-w-[25rem]">
      {listData.products?.map((product) => (
        <ListItem
          key={product.id}
          product={product}
          setSelectedProductId={setSelectedProductId}
        />
      ))}
    </ul>
  );
}

export default List;
