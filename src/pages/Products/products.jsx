import { useSelector, useDispatch } from "react-redux";
import { ListItems } from "../../components/ListItems/listItems";
import { addToCartThunk } from "../../store/modules/cart/thunks";

export const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleClick = (produto) => {
    dispatch(addToCartThunk(produto));
  };

  return (
    <div>
      <h1>Produtos</h1>
      <div className="products">
        {products.map((item, index) => (
          <div key={index}>
            <ListItems item={item} />
            <button onClick={() => handleClick(item)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};
