import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../src/assets/img/logo.png';
import { Container } from './styles';

export default function HeaderMain() {
  return (
    <>
      <Container>
        <Link to="/">
          <img src={logo} alt="Escolar para alunos"></img>
        </Link>

        <ul class="topnav">
          <li>
            <a href="/">inicio</a>
          </li>
          <li>
            <a href="#aluno">Aluno</a>
          </li>
          <li>
            <a href="/login">motorista</a>
          </li>
          <li>
            <a href="/">quem somos</a>
          </li>
          <li>
            <a href="/">contato</a>
          </li>
        </ul>
      </Container>
    </>
  );
}
