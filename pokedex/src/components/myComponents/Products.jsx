
import styled from 'styled-components';
import Card from './Card';

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center; 
  `;

  const Products = ({ products }) => (
    <Container>
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Container>
  );

  export default Products;
