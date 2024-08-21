import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
`;

const FooterText = styled.p`
  margin: 5px 0;
  font-size: 1em;
`;

const FooterIcons = styled.div`
  margin-top: 15px;
  a {
    margin: 0 10px;
    color: #fff;
    font-size: 1.5em;
    transition: color 0.3s;
    &:hover {
      color: #ffcc00; /* Cor do Pikachu */
    }
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterTitle>Pokédex Info</FooterTitle>
    <FooterText>Explore the world of Pokémon with the official Pokédex.</FooterText>
    <FooterText>Data on all Pokémon species, moves, and abilities.</FooterText>
    <FooterIcons>
      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </FooterIcons>
  </FooterContainer>
);

export default Footer;
