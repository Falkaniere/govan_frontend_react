import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  padding: 30px;
  margin: 0;
  outline: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: transparent linear-gradient(180deg, #081851 0%, #011030 100%) 0%
    0% no-repeat padding-box;

  svg {
    display: block;
    margin: auto;
    color: #fff;
  }
`;

export const Header = styled.header`
  display: grid;
  text-transform: uppercase;

  ul {
    grid-area: nav;
    display: grid;
    grid-template-columns: repeat(5, auto);
    align-items: right;
    justify-items: right;
    margin-top: -30px;
    list-style-type: none;
    line-height: 0;
  }

  a {
    color: #fff;
    text-decoration: none;
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
