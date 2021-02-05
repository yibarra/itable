import React from 'react';
import { FooterDiv } from './styles';

// footer
const Footer = () => {
  // render
  return (
    <FooterDiv>
      <a href="mailto:yeissonibarra@gmail.com" target="_blank" rel="noreferrer">
        <span className="material-icons">alternate_email</span>
        <span className="text">Julian Ibarra</span>
      </a>
    </FooterDiv>
  );
};

export default Footer;