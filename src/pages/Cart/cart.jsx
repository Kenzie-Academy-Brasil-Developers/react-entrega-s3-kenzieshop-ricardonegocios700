import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ListItems } from "../../components/ListItems/listItems";
import { removeToCartThunk } from "../../store/modules/cart/thunks";
import { IoMdCart } from "react-icons/io";

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

      {carrinho[0] ? (
        <div className="products">
          {carrinho.map((item, index) => (
            <div key={index}>
              <ListItems item={item} />
              <button onClick={() => handleClick(item.name)}>remove</button>
            </div>
          ))}
        </div>
      ) : (
        <>
          <h2>Seu carrinho está vazio</h2>
          <IoMdCart size={225} />
          <p>
            <Link to="/">Faça suas compras!</Link>
          </p>
        </>
      )}
    </div>
  );
};
