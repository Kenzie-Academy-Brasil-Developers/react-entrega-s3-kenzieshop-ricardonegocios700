import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <span class="msg">Carrinho: x itens, R$ 1.000,00</span>
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
