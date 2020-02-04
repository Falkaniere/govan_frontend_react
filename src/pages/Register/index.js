import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { Container, Body, Form, Div, SubmitButton, Footer } from './styles';

import { FaUserAlt } from 'react-icons/fa';
// import { mdCall } from 'react-icons/md';

import Header from '../../components/Header/index';
// import Footer from '../../components/Footer/index';

class Login extends Component {
  render() {
    return (
      <>
        <Container>
          <Header />

          <Div>
            <Body></Body>
            <Form>
              <h3>Cadastrar como Motorista</h3>
              <p>
                Seja um motorista parceiro e conquiste <br /> novos passageiros!
              </p>
              <input type="name" placeholder="Nome de contato" />
              <input type="number" placeholder="CNPJ da empresa"></input>
              <input type="name" placeholder="Nome dantasia da empresa"></input>
              <input type="number" placeholder="Telefone"></input>
              <input type="number" placeholder="Celular"></input>
              <input type="email" placeholder="Email"></input>
              <input type="password" placeholder="Senha"></input>
              <SubmitButton>Cadastrar</SubmitButton>
              <h4>
                Já possui cadastro? <a href="/login">Faça Login</a>
              </h4>
            </Form>
          </Div>
        </Container>
        <Footer></Footer>
      </>
    );
  }
}

export default Login;
