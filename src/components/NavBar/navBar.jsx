import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";

export const NavBar = () => {
  const carrinho = useSelector((state) => state.cart);
  const countCarrinho = carrinho.length;
  const someCarrinho = carrinho.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <nav>
      {!!carrinho[0] && (
        <div class="msg">
          <IoMdCart /> {countCarrinho} itens, R$ {someCarrinho.toFixed(2)}
        </div>
      )}
      <div id="navlogo">
        <img src="https://kenzie.com.br/images/logoblue.svg" alt="logo" />
      </div>
      <div class="items">
        <div id="navLeft">
          <Link to="/">Kenzie Shop</Link>
        </div>
        <div id="navRight">
          <Link to="/cart">Carrinho</Link>
        </div>
      </div>
    </nav>
  );
};
