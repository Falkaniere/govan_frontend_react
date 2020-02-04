import React, { Component } from 'react';

import { Container, Form, SubmitButton, Div } from './styles';

import Header from '../../components/Header/index';
import Body from '../../components/Body/index';
import Footer from '../../components/Footer/index';

class NotFindDriver extends Component {
  render() {
    return (
      <>
        <Container>
          <Header />
          <Div>
            <h1>VAMOS TE AJUDAR!</h1>
            <p>
              Infelizmente não encontramos um motorista que realize este
              trajeto,
              <br /> <strong>mas não se preocupe</strong>, nos informe seus
              dados para contato que <br />
              <strong>
                iremos procurar um motorista especialmente para o seu trajeto.
              </strong>
            </p>
          </Div>
          <Form>
            <input type="text" placeholder="ENDEREÇO:"></input>
            <input type="text" placeholder="INSTITUIÇÃO DE ENSINO:"></input>
            <SubmitButton>Enviar</SubmitButton>
            <a href="/">Voltar</a>
          </Form>
        </Container>
        <Body />
        <Footer />
      </>
    );
  }
}

export default NotFindDriver;
