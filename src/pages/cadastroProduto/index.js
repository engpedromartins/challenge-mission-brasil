import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputMask from "react-input-mask";
import MaskedInput from "react-text-mask";

import TextInput from "../../components/TextInput";
import { BsPerson } from "react-icons/bs";
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
        <div className={"content"}>
          <Formik
            initialValues={{
              nameProduct: "",
              price: "",
            }}
            validationSchema={Yup.object().shape({
              nameProduct: Yup.string().required("Nome do produto obrigatório"),

              price: Yup.string()
                .min(2, "O valor deve ser maior que 00,01")
                .max(4, "O valor não pode ser maior que 99,99")
                .required("O preço do produto é obrigatório"),
            })}
            onSubmit={(fields, { setSubmitting, setFieldValue }) => {
              const changedValue = fields.price.replace(/\(|\)|\s|-/g, "");
              setFieldValue("price", changedValue);
              let name = fields.nameProduct;
              let price = fields.price;
              let product = [name, price];
              this.setState({
                data: [...this.state.data, { name: name, price: price }],
              });

              alert("Produto adicionado com sucesso");
            }}
            render={({ errors, status, touched }) => (
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
                    type="phone"
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
                        Deseja ver a lista de produtos?
                      </a>
                    </small>
                  </div>
                </div>
              </Form>
            )}
          />
        </div>
      </div>
    );
  }
}

export default CadastroProduto;

class Input extends React.Component {
  render() {
    return (
      <MaskedInput
        mask={[
          "(",
          /[1-9]/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/,
        ]}
      />
    );
  }
}

class CustomInput extends React.Component {
  render() {
    const { name } = this.props;
    return <Field name={name} component={Input} />;
  }
}
