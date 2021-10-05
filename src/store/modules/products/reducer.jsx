import { LIST_PRODUCTS } from "./actionTypes";

const initialState = [
  {
    name: "Samsung Galaxy J5 Dual SIM 16 GB dourado 1.5 GB RAM",
    price: 999.99,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_963069-MLA40075538232_122019-F.webp",
  },
  {
    name: "Smartphone TCL L5 Dual Chip",
    price: 759.0,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_715387-MLA43775429216_102020-F.webp",
  },
  {
    name: "Celular Xiaomi Note 8 64GB Rom 4GB Ram Dual Versión Global Space Black",
    price: 1139.0,
    image: "https://m.media-amazon.com/images/I/51wgmCYDFML._AC_SL1000_.jpg",
  },
  {
    name: "Celular Xiaomi Redmi Note 9",
    price: 1502,
    image: "https://m.media-amazon.com/images/I/51T1R513wrL._AC_SL1000_.jpg",
  },
  {
    name: "Smartphone Motorola One Fusion",
    price: 1499,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_956404-MLA43755541735_102020-F.webp",
  },
  {
    name: "iPhone 12 (128 GB) - Branco",
    price: 5599,
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_914966-MLA46082341071_052021-F.webp",
  },
  {
    name: "iPhone 12 Pro 256GB Azul-Pacífico",
    price: 7669,
    image:
      "https://www.fastshop.com.br/wcsstore/FastShopCAS/imagens/_AE_Apple/AEMGMT3BZAAZL/AEMGMT3BZAAZL_PRD_1500_1.jpg",
  },
];

const productsReducer = (state = initialState, action) => {
  //console.log("state: ", state);
  switch (action.type) {
    case LIST_PRODUCTS:
      // retornar todos os produtos
      return state;
    default:
      return state;
  }
};

export default productsReducer;
