import styled from 'styled-components';
import backgroundImg from '../../assets/img/back.svg';

export const Container = styled.div`
  background: url(${backgroundImg});
  height: 500px;
  max-width: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
`;
