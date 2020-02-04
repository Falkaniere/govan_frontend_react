import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { FaRegArrowAltCircleDown } from 'react-icons/fa';

import { Container, Div, Form, SubmitButton } from './style';

import Body from '../../components/Body/index';
import HeaderMain from '../../components/Header/index';
import Footer from '../../components/Footer/index';

// import imgAluno from '../../assets/img/aluno.jpg';

class Inicio extends Component {
  state = {
    newEnd: '',
    newInstitution: '',
  };

  // handleInputChange = event => {
  //   const end = event.target.name;
  //   const institution = event.target.value;
  //   // this.setState({ [end]: institution });
  // };

  handleSubmit = e => {
    e.preventDefault();

    const { newEnd, newInstitution } = this.state;

    if (!newEnd || !newInstitution) {
      this.setState({ error: 'favor preencher todos os campos' });
    }
  };

  render() {
    return (
      <>
        <Container>
          <HeaderMain></HeaderMain>
          <Div>
            <h1>ENCONTRE UMA VAN!</h1>
            <p>
              Facilitamos a conexão entre usuários e motoristas <br></br> de
              vans credenciadas
            </p>
          </Div>
          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="ENDEREÇO:"
              name="newEnd"
              onChange={e => this.setState({ newEnd: e.target.value })}
            />
            <input
              type="text"
              placeholder="INSTITUIÇÃO DE ENSINO:"
              name="newInstitution"
              onChange={e => this.setState({ newInstitution: e.target.value })}
            />
            <SubmitButton>ENCONTRAR MOTORISTA</SubmitButton>
            <hr></hr>
          </Form>
          <p>MOTORISTA, CADASTRE SUA VAN</p>
          <Link>
            <FaRegArrowAltCircleDown></FaRegArrowAltCircleDown>
          </Link>
        </Container>
        <Body />
        <Footer></Footer>
      </>
    );
  }
}

export default Inicio;
