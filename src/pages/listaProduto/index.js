import React, { Component } from "react";
import { FaCartPlus } from "react-icons/fa";
class CadastroProduto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProducts: "",
      productsSelected: "",
    };
    this.navigationToCart = this.navigationToCart.bind(this);
  }
  componentDidMount() {
    if (this.props.location.list) {
      let products = this.props.location.list.products;
      console.log("aa ", products);
      this.setState({
        listProducts: products,
      });
    }
  }

  handleAdd(valueName, valuePrice, valueKey) {
    let name = valueName;
    let price = valuePrice;
    let key = valueKey;

    this.setState({
      productsSelected: [
        ...this.state.productsSelected,
        { key: key, name: name, price: price },
      ],
    });

    alert("Produto aticionado ao carrinho.");
  }
  navigationToCart() {
    let productsSelected = this.state.productsSelected;
    this.props.history.push({
      pathname: process.env.PUBLIC_URL + `/carrinho`,
      search: "",
      list: { productsSelected },
    });
  }

  render() {
    let list = this.props.location.list.products;
    if (list) {
      var showList = list.map((item, key) => {
        return (
          <li key={key}>
            <div className="cards-item">
              <div className="cards-item-aligment">
                <span>{item.name}</span>
                <small>{item.price}</small>
              </div>
              <small>
                <a onClick={() => this.handleAdd(item.name, item.price, key)}>
                  <FaCartPlus />
                  Adicionar ao carrinho{" "}
                </a>
              </small>
              <hr />
            </div>
          </li>
        );
      });
    }
    return (
      <div className="container">
        <h1>Lista de Produtos</h1>
        <div className="content">
          <ul>{showList}</ul>
        </div>
        <div>
          <small>
            <a onClick={this.navigationToCart}>Ir para o carrinho</a>
          </small>
        </div>
      </div>
    );
  }
}
export default CadastroProduto;
