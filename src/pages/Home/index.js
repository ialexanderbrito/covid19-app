import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Navbar,
  Title,
  Logo,
  Header,
  SubTitle,
  Description,
  Situation,
  SituationButton,
  SituationText,
} from './styles';

import api from '../../services/api';

import Prevents from '../../components/Prevents';
import logo from '../../assets/logo.png';

export default Home = () => {
  const navigation = useNavigation();

  const [cases, setCases] = useState();
  const [casesState, setCasesState] = useState();

  useEffect(() => {
    const loadCases = async () => {
      try {
        const data = await api.get('/api/report/v1/brazil');

        setCases(data);
      } catch (error) {
        alert(error.message);
      }
    };
    loadCases();
  }, []);

  useEffect(() => {
    const loadCasesState = async () => {
      try {
        const data = await api.get('/api/report/v1');

        setCasesState(data);
      } catch (error) {
        alert(error.message);
      }
    };
    loadCasesState();
  }, []);

  const NavigateToBrazil = () => {
    navigation.navigate('Brazil', { brazil: cases.data });
  };

  const NavigateToState = () => {
    navigation.navigate('States', { states: casesState.data });
  };
  return (
    <Wrapper>
      <Container>
        <Navbar>
          <Title>Covid 19</Title>
          <Logo source={logo} resizeMode="contain" />
        </Navbar>
        <Header>
          <SubTitle>O que é Corona Vírus?</SubTitle>
          <Description>
            O coronavírus (COVID-19) é uma doença infecciosa causada por um novo
            vírus.
          </Description>
          <Description>
            Ele causa problemas respiratórios semelhantes à gripe e sintomas
            como tosse, febre e, em casos mais graves, dificuldade para
            respirar.
          </Description>
          <Situation>
            <SituationButton
              onPress={NavigateToBrazil}
              style={{ backgroundColor: '#FBBD09' }}
            >
              <FontAwesome5 name="globe-americas" size={20} color="#fff" />
              <SituationText>Brasil</SituationText>
            </SituationButton>

            <SituationButton onPress={NavigateToState}>
              <FontAwesome5 name="flag" size={20} color="#fff" />
              <SituationText>Estados</SituationText>
            </SituationButton>
          </Situation>
        </Header>
        <Prevents />
      </Container>
    </Wrapper>
  );
};
