import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 30px;
  margin: 0;
  outline: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: transparent linear-gradient(180deg, #081851 0%, #011030 100%) 0%
    0% no-repeat padding-box;

  h1 {
    color: #ff4665;
    text-align: center;
    font-size: 40px;
    margin-top: 90px;
    margin-left: 20px;
  }

  p {
    color: #fff;
    text-align: center;
  }

  svg {
    display: block;
    margin: auto;
    color: #fff;
  }

  h1 {
    color: #ff4665;
    text-align: center;
    font-size: 40px;
    margin-top: 90px;
    margin-left: 20px;
  }

  p {
    color: #fff;
    text-align: center;
  }

  svg {
    display: block;
    margin: auto;
    color: #fff;
  }
`;

export const Div = styled.div`
  h1 {
    color: #ff4665;
    text-align: center;
    font-size: 55px;
    margin-top: 90px;
    margin-left: 20px;
  }

  p {
    color: #fff;
    text-align: center;
    font-size: 22px;
  }
`;

export const Form = styled.form`
  max-width: 699px;
  margin: 30px auto;
  display: grid;

  input {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
    align-items: center;
    margin: auto;
    color: #fff;
    width: 100%;
    height: 65px;
    background-color: transparent;
    font-size: 22px;
    padding: 10px 15px;
    border: 1px solid #ffffff;
    border-radius: 6px;
    margin-bottom: 20px;
  }

  hr {
    width: 100%;
    height: 0px;
    border: 1px solid #ffffff;
    opacity: 0.32;
    margin-top: 50px;
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
  width: auto;
  height: 60px;
  font-family: Roboto, Helvetca, sans-serif;
  font-size: 18px;
  font-weight: bold;
`;

export const FaArrowAltCircleDown = styled.img`
  margin-left: auto;
`;
