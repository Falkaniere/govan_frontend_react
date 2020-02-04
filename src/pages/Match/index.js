import React, { Component } from 'react';

import { FaRegArrowAltCircleDown } from 'react-icons/fa';

import { Container, Div } from './styles';

import logo from '../../assets/img/logo.png';
import imgAluno from '../../assets/img/aluno.jpg';

import Header from '../../components/Header/index';
import ListVans from '../../components/ListVans/index';
import Body from '../../components/Body/index';
import Footer from '../../components/Footer/index';

class Match extends Component {
  render() {
    return (
      <>
        <Container>
          <Header />
          <Div>
            <h1>ENCONTRE UMA VAN!</h1>
            <p>
              Facilitamos a conexão entre usuários e motoristas <br></br> de
              vans credenciadas
            </p>
          </Div>
          <ListVans />
        </Container>
        <Body />
        <Footer />
      </>
    );
  }
}

export default Match;
