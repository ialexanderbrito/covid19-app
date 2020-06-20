import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Title,
  Flag,
  GoBack,
  Navbar,
  Header,
  Logo,
  Description,
  Card,
  CardTitle,
  CardNumber,
  Footer,
} from './styles';

import logo from '../../assets/logo.png';
import numberFormatter from '../../utils/formatter';

export default States = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { detail } = route.params;

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <Wrapper>
      <Container>
        <Navbar>
          <GoBack onPress={handleNavigateBack}>
            <AntDesign name="arrowleft" size={24} color="#004dd5" />
          </GoBack>
          <Title>Covid 19</Title>
          <Logo source={logo} resizeMode="contain" />
        </Navbar>
        <Header>
          <Title>{detail.state}</Title>
          <Flag
            resizeMode="contain"
            source={{
              uri: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${detail.uf}.png`,
            }}
          />
        </Header>
        <Description>
          Por conta de sua fácil transmissão o novo Covid-19 se mostrou muito
          mortal, por isso é importante cada pessoa se previnir de maneira
          correta.
        </Description>
        <Card style={{ backgroundColor: '#4CB4FB' }}>
          <CardTitle>Ativos</CardTitle>
          <CardNumber>{numberFormatter(detail.cases)}</CardNumber>
        </Card>
        <Card>
          <CardTitle>Suspeitos</CardTitle>
          <CardNumber>{numberFormatter(detail.suspects)}</CardNumber>
        </Card>
        <Card style={{ backgroundColor: '#F25559' }}>
          <CardTitle>Óbitos</CardTitle>
          <CardNumber>{numberFormatter(detail.deaths)}</CardNumber>
        </Card>
        <Footer>
          * Os estados não disponibilizam os dados de pacientes recuperados.
        </Footer>
      </Container>
    </Wrapper>
  );
};
