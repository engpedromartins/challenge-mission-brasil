import React, { Component } from "react";

class Carrinho extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {}

  render() {
    const locale = "pt-BR";
    const currency = "BRL";
    const fullCurrencyFormat = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    });

    var order = this.props.location.list.productsSelected;

    if (order) {
      var orderResume = order.map((item, key) => {
        let price = fullCurrencyFormat.format(item.price);

        return (
          <li key={key}>
            <div className="cards-item">
              <div className="cards-item-aligment">
                <span>{item.name}</span>
                <small>{price}</small>
                <br />
              </div>
            </div>
          </li>
        );
      });
    }
    let orderTotal = 0;

    //Função que faz o somatório de todos os valores
    for (let index in order) {
      let price = order[index].price;
      orderTotal = Number(orderTotal) + Number(price);
    }
    const orderTotalFormatted = fullCurrencyFormat.format(orderTotal);
    return (
      <div className="container">
        <h1>Resumo do Pedido</h1>
        <div className="content">
          <ul>{orderResume}</ul>
          <div>
            <div className="valueTotal">
              <h4> total</h4>
              <span>{orderTotalFormatted}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carrinho;
