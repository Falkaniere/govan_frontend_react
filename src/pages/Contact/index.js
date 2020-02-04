import React, { Component } from 'react';

import api from '../../services/api';

import { Container, Form, SubmitButton, Div } from './styles';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  };

  handleSubmmit = async e => {
    e.preventDefault();

    const { name, email, phoneNumber, message } = this.state;

    if (!email || !email || !phoneNumber || !message) {
      this.setState({ error: 'favor preencha todos os campos' });
    } else {
      await api.post();
    }
  };

  render() {
    return (
      <>
        <Container>
          <Header />
        </Container>

        <Div>
          <h1>Fale Conosco!</h1>
          <p>
            Estamos aqui para te ouvir, nos conte sobre suas críticas, sugestões{' '}
            <br /> e dúvidas, que nossa equipe irá entrar em contato com você{' '}
          </p>
        </Div>
        <Form>
          <label>Nome (Obrigatório) </label>
          <input
            type="text"
            name="name"
            onChange={e => this.setState({ name: e.target.value })}
          ></input>
          <label>Email (Obrigatório) </label>
          <input
            type="text"
            name="email"
            onChange={e => this.setState({ email: e.target.value })}
          ></input>
          <label>Telefone com DDD </label>
          <input
            type="number"
            name="phoneNumber"
            onChange={e => this.setState({ phoneNumber: e.target.value })}
          ></input>
          <label>Mensagem (Obrigatório) </label>
          <textarea
            rows="7"
            cols="90"
            name="message"
            onChange={e => this.setState({ message: e.target.value })}
          ></textarea>
          <SubmitButton>Enviar</SubmitButton>
        </Form>
        <Footer />
      </>
    );
  }
}

export default Contact;
