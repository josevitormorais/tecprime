import React, { Component } from "react";

import { ProductList } from "./styles";
import { getCategoryId } from "./utils";
// import Axios from "axios";
import { tecprime } from "../../services/api";
const data = async categoryId => {
  tecprime
    .getCategoryById({
      category: categoryId
    })
    .then(res => res);
};
export default class Products extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    // eslint-disable-next-line no-restricted-globals
    const categoryId = getCategoryId();
    const result = await data(categoryId);
    console.log(result);
  }

  render() {
    const { products } = this.state;
    return (
      <ProductList>
        c
        {products.map(product => (
          <li key={product.id}>
            <strong>{product.nome}</strong>
            <span>{product.descricao}</span>
            <span>{product.preco}</span>
          </li>
        ))}
      </ProductList>
    );
  }
}
