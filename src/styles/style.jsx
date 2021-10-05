import styled from "styled-components";

export const NavBarCSS = styled.div`
  margin: 0;
  min-height: 80px;
  border-bottom: solid 1px black;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 80px;
  background-color: var(--laranja);
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }
  a {
    padding: 10px;
    font-size: 18px;
  }
  img {
    width: 50px;
  }
  .msg {
    color: var(--azul);
    align-self: flex-end;
    margin-right: 10px;
    svg {
      color: var(--azul);
      width: 18px;
      padding-top: 3px;
    }
  }
`;

export const ProductsCSS = styled.div`
  text-align: center;
  h1 {
    color: var(--azul);
    text-shadow: var(--laranja) -0.75px -0.75px 2px;
    font-size: 40px;
    margin: 10px;
  }

  svg {
    color: var(--azul);
  }
  button {
    background-color: var(--laranja);
    padding: 6px;
    border: none;
    width: 75%;
    color: var(--azul);
    font-weight: 700;
    cursor: pointer;
  }

  .products div:nth-child(even) button {
    border-bottom-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  .products div:nth-child(odd) button {
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .products {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div {
      padding: 15px;
      flex-basis: 200px;
      text-align: center;
      width: 20vw;
      p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 3px;
      }
      img {
        width: 100px;
        height: 180px;
      }
    }
  }
`;

export const RodapeCSS = styled.div`
  background-color: var(--azul);
  width: 100vw;
  min-height: 10vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  span {
    font-size: smaller;
  }
`;
