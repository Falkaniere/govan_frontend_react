import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px, 0px;

  ul {
    padding: 0 40px;
    display: grid;
    grid-template-columns: repeat(5, auto);
    list-style-type: none;
  }

  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    margin-left: 30px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
`;
