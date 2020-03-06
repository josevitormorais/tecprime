import React, { Component } from "react";

import { CategoryList } from "./styles";

// import { tecprime } from "../../services/api";

import Axios from "axios";
import { Link } from "react-router-dom";

// import { Container } from './styles';

export default class Home extends Component {
  state = {
    category: []
  };

  componentDidMount() {
    Axios.get(`http://tecprime.com.br/api/categories`).then(res => {
      console.log(res + "meus dados");
      this.setState({ category: res.data });
    });

    // const response = await tecprime.getCategoryById({ category: 4 })
  }

  render() {
    const { category } = this.state;
    console.log(category);
    return (
      <CategoryList>
        {category.map(category => (
          <li key={category.id}>
            <strong>{category.nome}</strong>
            <Link to={`/products/${category.id}`}>ver opcoes</Link>
          </li>
        ))}
      </CategoryList>
    );
  }
}
