import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { BiStore, BiDollar } from "react-icons/bi";
import "./index.scss";
class CadastroProduto extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.handleSendProduct = this.handleSendProduct.bind(this);
  }

  handleSendProduct() {
    let products = this.state.data;
    this.props.history.push({
      pathname: process.env.PUBLIC_URL + `/listaproduto`,
      search: "",
      list: { products },
    });
  }
  render() {
    return (
      <div className={"container"}>
        <h1> Cadastro de Produtos</h1>
        <div className={"content-home"}>
          <Formik
            //
            //Define os valores inicias de cada campo

            initialValues={{
              nameProduct: "",
              price: "",
            }}
            //
            //valida os campos obrigatórios

            validationSchema={Yup.object().shape({
              nameProduct: Yup.string().required("Nome do produto obrigatório"),

              price: Yup.string()
                .min(2, "O valor deve ser maior que 00,01")
                //.max(4, "O valor não pode ser maior que 99,99")
                .required("O preço do produto é obrigatório"),
            })}
            //
            //Formata e envia os dados do formulario pro estado data

            onSubmit={(fields) => {
              let name = fields.nameProduct;
              let price = fields.price;
              this.setState({
                data: [...this.state.data, { name: name, price: price }],
              });

              alert("Produto adicionado com sucesso");
            }}
          >
            {({ props, errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="nameProduct">
                    Nome do Produto <BiStore />
                  </label>
                  <Field
                    mask={"99/99"}
                    name="nameProduct"
                    type="text"
                    className={
                      "form-control" +
                      (errors.nameProduct && touched.nameProduct
                        ? " is-invalid"
                        : "")
                    }
                  />
                  <ErrorMessage
                    name="nameProduct"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price">
                    Preço do Produto <BiDollar />
                  </label>
                  <Field
                    name="price"
                    type="number"
                    className={
                      "form-control" +
                      (errors.price && touched.price ? " is-invalid" : "")
                    }
                  />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="invalid-feedback"
                  />
                </div>

                <div className="group-button">
                  <button type="submit" className="btn btn-primary mr-2">
                    Adicionar Produto
                  </button>
                  <button type="reset" className="btn btn-secondary">
                    Limpar
                  </button>
                  <div>
                    <small>
                      <a onClick={this.handleSendProduct}>
                        Ir para lista de produtos
                      </a>
                    </small>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}

export default CadastroProduto;
