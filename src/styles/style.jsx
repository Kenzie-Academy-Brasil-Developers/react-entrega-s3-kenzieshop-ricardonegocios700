import styled from "styled-components";

export const NavBarCSS = styled.div`
  margin: 0;
  min-height: 80px;
  border-bottom: solid 1px black;
  border-bottom-right-radius: 80px;
  border-bottom-left-radius: 80px;
  background-color: #ff8c20;
  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  a {
    padding: 10px;
    font-size: 18px;
  }
  img {
    width: 50px;
  }
  .msg {
    color: blue;
  }
`;

export const ProductsCSS = styled.div`
  text-align: center;
  h1 {
    color: #0c5088;
    text-shadow: #ff8c20 -0.75px -0.75px 2px;
    font-size: 40px;
    margin: 10px;
  }
  button {
    background-color: #ff8c20;
    padding: 6px;
    border: none;
    border-radius: 10px;
    width: 100%;
    color: white;
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

const teste = styled.div`
  #navegacao {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: nowrap;
    align-items: stretch;
    position: relative;
  }
  #navLeft {
    order: 1;
    flex-grow: 4;
  }
  #navRight {
    order: 2;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    position: relative;
    right: 0;
  }
`;
