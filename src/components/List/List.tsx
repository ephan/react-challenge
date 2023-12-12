import { Dispatch } from 'react';
import { ListData } from '../../types/listData';
import ListItem from '../ListItem/ListItem';

type ListProps = {
  listData: ListData;
  setSelectedProductId: Dispatch<number>;
};

function List({ listData, setSelectedProductId }: ListProps) {
  return (
    <ul>
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
