import styled from 'styled-components';

export const Body = styled.body`
  max-width: 1200px;
  padding: 30px;
  margin: 20px auto;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #ffffff;

  #aluno {
  }

  #aluno img {
    max-width: 100%;
    height: auto;
    margin-bottom: 30px;
    margin-right: 60px;
    float: left;
    background-color: #9a9a9a;
    float: left;
  }

  .alunoText {
    line-height: 1.5;
    max-width: 500px;
    margin-left: auto;
    font: SemiBold 54px/81px Poppins;
    letter-spacing: 0;
    opacity: 1;
  }

  .alunoText p {
    font: Light 16px/26px Poppins;
    letter-spacing: 0;
    color: #7a839e;
    opacity: 1;
  }

  .alunoText h1 {
    font-size: 29px;
    font: Poppins;
    letter-spacing: 0;
    color: #42495b;
    opacity: 1;
  }

  #aluno button {
    color: #fff;
    background-color: #ff4665;
    border: 1px solid #ff4665;
    border-radius: 32px;
    width: 200px;
    height: 45px;
    font-family: Roboto, Helvetca, sans-serif;
  }

  #motorista {
    margin-top: 120px;
    margin-bottom: 100px;
  }

  #motorista img {
    max-width: 100%;
    height: auto;
    background-color: #9a9a9a;
    float: right;
  }

  .motoristaText {
    max-width: 430px;
    line-height: 1.5;
    font: SemiBold 54px/81px Poppins;
    letter-spacing: 0;
    opacity: 1;
  }

  .motoristaText p {
    font: Light 16px/26px Poppins;
    letter-spacing: 0;
    color: #7a839e;
    opacity: 1;
  }

  .motoristaText h1 {
    font-size: 29px;
    font: Poppins;
    letter-spacing: 0;
    color: #42495b;
    opacity: 1;
  }

  #motorista button {
    margin-top: 20px;
    margin-bottom: 20px;
    color: #fff;
    background-color: #ff4665;
    border: 1px solid #ff4665;
    border-radius: 32px;
    width: 200px;
    height: 45px;
    font-family: Roboto, Helvetca, sans-serif;
  }

  .form {
    max-width: 550px;
    margin: auto;
  }

  .form button {
    align-items: right;
    color: #fff;
    background-color: #ff4665;
    border: 1px solid #ff4665;
    border-radius: 32px;
    width: 130px;
    height: 45px;
    font-family: Roboto, Helvetca, sans-serif;
  }

  .form input {
    align-items: right;
    margin-right: 10px;
    width: 350px;
    background: #f6f7fb 0% 0% no-repeat padding-box;
    opacity: 1;
    font-size: 16px;
    padding: 10px 15px;
    border: 1px solid #ffffff;
    border-radius: 6px;
  }

  h4 {
    text-align: center;
    font-size: 20px;
    font-weight: lighter;
    font: Lobster;
    letter-spacing: 0;
    color: #ff4665;
    opacity: 1;
  }

  h3 {
    text-align: center;
    font-size: 30px;
    font-weight: lighter;
    font: Poppins;
    letter-spacing: 0;
    color: #42495b;
    opacity: 1;
  }
`;
