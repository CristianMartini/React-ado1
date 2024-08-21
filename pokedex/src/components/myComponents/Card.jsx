import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import Image from './Image';

const CardContainer = styled(motion.div)`
  border-radius: 15px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  width: 280px; /* Aumentamos a largura do card */
  background-color: #f8f8f8;
  margin: 20px;
  position: relative;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: translateY(-10px);
  }
`;

const CardHeader = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;

const CardTitle = styled.h2`
  font-size: 1.2em;
  margin: 10px 0;
  color: #333;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 0.9em;
  color: #666;
  text-align: center;
  padding: 0 15px;
  margin-bottom: 15px;
`;

const CardImage = styled(motion.img)`
  width: 100%;
  height: 260px; /* Diminuímos a altura da imagem */
  object-fit: cover;
  cursor: pointer;
`;

const Card = ({ product }) => (
  <CardContainer
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    <CardHeader>
      <FaHeart color="#ff4d4d" size="20" />
    </CardHeader>
    <CardImage
      src={product.imageUrl}
      alt={product.title}
      onClick={() => alert(`Clicked on ${product.title}`)}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    />
    <CardTitle>{product.title}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
  </CardContainer>
);

export default Card;
