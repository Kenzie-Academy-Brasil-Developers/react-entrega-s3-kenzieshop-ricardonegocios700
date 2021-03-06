import { Route, Switch } from "react-router";
import { NavBar } from "../components/NavBar/navBar.jsx";
import { Rodape } from "../components/Rodape/rodape.jsx";
import { Cart } from "../pages/Cart/cart";
import { Products } from "../pages/Products/products";
import { NavBarCSS, ProductsCSS, RodapeCSS } from "../styles/style";

export const Routes = () => {
  return (
    <>
      <NavBarCSS>
        <NavBar />
      </NavBarCSS>
      <Switch>
        <Route exact path="/">
          <ProductsCSS>
            <Products />
          </ProductsCSS>
        </Route>
        <Route path="/cart">
          <ProductsCSS>
            <Cart />
          </ProductsCSS>
        </Route>
      </Switch>

      <RodapeCSS>
        <Rodape />
      </RodapeCSS>
    </>
  );
};
