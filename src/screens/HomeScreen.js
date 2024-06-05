import React, {useEffect, useState} from 'react';
import {StoreContext} from '../store/store';
import {Container, Title, Button, ButtonText} from '../styles/styled';
import api from '../services/api';
import translate from '../i18n';

const HomeScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/data');
        setData(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Title>{translate('homeScreen.title')}</Title>
      {data.map(item => (
        <Title key={item.id}>{item.name}</Title>
      ))}
    </Container>
  );
};

export default HomeScreen;
