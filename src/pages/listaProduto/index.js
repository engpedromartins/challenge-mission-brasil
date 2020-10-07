import React, { Component } from "react";
import { FaCartPlus } from "react-icons/fa";
class CadastroProduto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProducts: "",
    };
  }
  componentDidMount() {
    if (this.props.location.list) {
      console.log("ENTREI");
      let products = this.props.location.list.products;
      console.log("aa ", products);
      this.setState({
        listProducts: products,
      });
    }
  }

  render() {
    if (this.props.location.list) {
      var lista = this.props.location.list.products.map((item, key) => {
        return (
          <li key={key}>
            <div className="cards-item">
              <div className="cards-item-aligment">
                <span>{item.name}</span>
                <small>{item.price}</small>
              </div>
              <small>
                <a>
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
          <ul>{lista}</ul>
        </div>
      </div>
    );
  }
}
export default CadastroProduto;
