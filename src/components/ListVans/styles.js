import styled from 'styled-components';

export const ListVan = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  list-style-type: none;

  div {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background-color: #fff;
    height: 50px;
  }

  li {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    padding: 20px;
  }

  img {
    border-radius: 4px;
    aling-self: center;
    max-width: 250px;
  }

  strong {
    color: #ff4665;
    font-size: 20px;
    line-height: 20px;
    margin-top: 5px;
    align-self: center;
  }

  span {
    color: #919191;
    font-size: 13px;
    align-self: center;
    opacity: 1;
  }
`;

export const SubmitButton = styled.button`
  margin: 0 auto;
  display: block;
  color: #fff;
  background-color: #ff4665;
  border: 1px solid #ff4665;
  border-radius: 32px;
  width: 250px;
  height: 60px;
  font-family: Roboto, Helvetca, sans-serif;
  font-size: 18px;
  font-weight: bold;
`;
