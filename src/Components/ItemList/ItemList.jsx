import Item from "../Item/Item";

const ItemList = ({ propProductos, onAddToCart }) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {propProductos.map((item) => (
        <Item key={item.id} {...item} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ItemList;




