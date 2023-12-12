import { Dispatch } from 'react';
import { Product } from '../../types/product';

type ListItemProps = {
  product: Product;
  setSelectedProductId: Dispatch<number>;
};

function ListItem({ product, setSelectedProductId }: ListItemProps) {
  const handleClick = (productId: number) => {
    setSelectedProductId(productId);
  };

  return (
    <li
      onClick={() => handleClick(product.id)}
      className="border border-slate-200 flex flex-col justify-center items-center gap-4 p-4 rounded-lg hover:bg-slate-300 cursor-pointer"
    >
      <div className="flex gap-4">
        <label>Id:</label>
        <span>{product.id}</span>
      </div>
      <div className="flex gap-4">
        <label>Title:</label>
        {product.title}
      </div>
      <div>
        {/* TODO: Write custom wrapper componnet for Next Image */}
        <img
          src={product.thumbnail}
          alt={product.description}
          width={100}
          height={'auto'}
        />
      </div>
    </li>
  );
}

export default ListItem;
