import React from "react";
import { Switch, Route } from "react-router-dom";

import cadastroProduto from "../pages/cadastroProduto";
import listaProduto from "../pages/listaProduto";
import carrinho from "../pages/carrinho";

export default function Routes() {
  return (
    //navegação das paginas
    <Switch>
      <Route path="/" exact component={cadastroProduto} />
      <Route path="/cadastroproduto" component={cadastroProduto} />
      <Route path="/listaproduto" component={listaProduto} />
      <Route path="/carrinho" component={carrinho} />
    </Switch>
  );
}
