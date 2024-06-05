import React from 'react';
import {Container, Title} from '../styles/styled';
import Button from '../components/Button';

const DetailsScreen = () => {
  const handleButtonPress = () => {
    console.log('Button pressed');
  };

  return (
    <Container>
      <Title>Details Screen</Title>
      <Button title="Click Me" onPress={handleButtonPress} />
    </Container>
  );
};

export default DetailsScreen;
