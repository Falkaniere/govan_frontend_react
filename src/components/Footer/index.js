import React from 'react';

import { Container } from './styles';

import FooterImg from '../../assets/img/back.svg';
import LogoFooter from '../../assets/img/logo-footer.svg';

import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container>
      <div class="footer">
        <div>
          <img src={LogoFooter}></img>
        </div>
      </div>
    </Container>
  );
}
