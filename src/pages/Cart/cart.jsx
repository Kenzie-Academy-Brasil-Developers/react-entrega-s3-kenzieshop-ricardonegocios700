import { useSelector, useDispatch } from "react-redux";
import { ListItems } from "../../components/ListItems/listItems";
import { removeToCartThunk } from "../../store/modules/cart/thunks";

export const Cart = () => {
  const carrinho = useSelector((state) => state.cart);
  //console.log(useSelector((state) => state));
  const dispatch = useDispatch();

  const handleClick = (name) => {
    dispatch(removeToCartThunk(name, carrinho));
  };

  return (
    <div>
      <h1>Carrinho</h1>
      <div className="products">
        {carrinho.map((item, index) => (
          <div key={index}>
            <ListItems item={item} />
            <button onClick={() => handleClick(item.name)}>remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};
