import React from 'react';

import { Body } from './styles';

import imgAluno from '../../assets/img/aluno.jpg';
// import imgMotorista from '../../assets/img/motorista.png';

export default function Container() {
  return (
    <Body>
      <div id="aluno">
        <img src={imgAluno}></img>
        <div class="alunoText">
          <h1>PARA O ALUNO</h1>
          <p>
            Chega de dificuldade e insegurança na hora de encontrar uma van. A
            GoVan vai conectar você a motoristas de vans de forma rápida e
            segura! Para encontrar uma van credenciada e confiável que faz o seu
            trajeto, faça seu cadastro na plataforma e se conecte a um de nossos
            motoristas. É rápido e simples, basta inserir seus dados e trajeto.
            O resto deixa com a gente!
          </p>
          <button onClick="">ENCONTRAR MOTORISTA</button>
        </div>
      </div>
      <div id="motorista">
        <img src={imgAluno} alt="Vans escolares para alunos"></img>
        <div class="motoristaText">
          <h1>PARA O MOTORISTA</h1>
          <p>
            Chega de panfletagem e bancos vazios na van. A GoVan vai conectar
            você a usuários/alunos! Para encontrar usuários/alunos na sua rota,
            faça seu cadastro na plataforma e se conecte. É rápido e simples,
            basta inserir seus dados pessoais e da van e o trajeto. O resto
            deixa com a gente!
          </p>
        </div>
        <button>CADASTRAR VAN</button>
      </div>
      <h4>NOTÍCIAS</h4>
      <h3>Receba atualizações sobre o sistema</h3>
      <div class="form">
        <input type="text" placeholder="Seu melhor email"></input>
        <button>Enviar</button>
      </div>
    </Body>
  );
}
