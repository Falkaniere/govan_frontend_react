import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 30px;
  margin: 0;
  outline: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: transparent linear-gradient(180deg, #081851 0%, #011030 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #707070;
`;

export const Div = styled.div`
  h1 {
    color: #ff4665;
    text-align: center;
    font-family: Black 75px;
    font-size: 55px;
    margin-top: 60px;
    margin-left: 20px;
  }

  p {
    color: #a7a7a7;
    text-align: center;
    font-size: 20px;
    margin-bottom: 50px;
  }
`;

export const Form = styled.form`
  max-width: 400px;
  margin: 30px auto;
  display: grid;

  label {
    margin-bottom: 5px;
    text-align: left;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
      'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    letter-spacing: 0;
    color: #1a223f;
    opacity: 1;
  }

  input {
    flex: 1;
    padding: 10px 15px;
    border-radius: 6px;
    border: 1px solid #081851;
    font-size: 16px;
    width: 100%;
    margin-bottom: 20px;
    height: 50px;
  }

  textarea {
    resize: none;
    flex: 1;
    border: 1px solid #081851;
    padding: 10px 15px;
    border-radius: 6px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  margin: 30px auto 0 auto;
  display: block;
  color: #fff;
  background-color: #ff4665;
  border: 1px solid #ff4665;
  border-radius: 32px;
  width: 190px;
  height: 55px;
  font-family: Roboto, Helvetca, sans-serif;
`;
