import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 30px;
  margin: 0;
  outline: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: transparent linear-gradient(180deg, #081851 0%, #011030 100%) 0%
    0% no-repeat padding-box;
`;

export const Div = styled.div`
  max-width: 80%;
  padding: 19px;
  margin: 0;
  outline: 0;
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  /* background-color: #011030; */
`;

export const Body = styled.body`
  width: 30%;
  height: 621px;
  display: inline-block;
  /* background-color: #e2e2e2; */
  margin: 0 auto;
  float: center;
`;

export const Form = styled.form`
  width: 30%;
  background-color: #fff;
  display: inline-block;
  text-align: center;
  padding: 5px;
  min-width: 40vw;
  float: right;

  input {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    margin: auto;
    color: #fff;
    width: 50%;
    font-size: 16px;
    padding: 10px 15px;
    border: 1px solid #ffffff;
    border-radius: 6px;
    border: 1px solid #a7a7a7;
    margin-bottom: 10px;

    display: grid;
  }

  h3 {
    align-items: center;
  }

  p {
  }

  a {
    text-decoration: none;
    color: #ff4665;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  margin: 0 auto;
  display: block;
  color: #fff;
  background-color: #ff4665;
  border: 1px solid #ff4665;
  border-radius: 32px;
  width: 150px;
  height: 38px;
  font-family: Roboto, Helvetca, sans-serif;
  font-size: 18px;
`;

export const Footer = styled.footer`
  background-color: #011030;
  height: 100%;
`;
