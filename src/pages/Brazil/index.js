import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Title,
  GoBack,
  Navbar,
  Logo,
  Header,
  Description,
  SubTitle,
} from './styles';

import logo from '../../assets/logo.png';
import numberFormatter from '../../utils/formatter';

export default Brazil = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { brazil } = route.params;

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
        <Title>Situação no Brasil</Title>
        <Description>
          A atual situação do covid-19 no Brasil é muito preocupante, por isso é
          necessário que cada pessoa faça a sua parte, se prevenindo do vírus.
        </Description>
        <Header>
          <SubTitle>Confirmados</SubTitle>
          <SubTitle>{numberFormatter(brazil.data.confirmed)}</SubTitle>
        </Header>
        <Header style={{ backgroundColor: '#4CB4FB' }}>
          <SubTitle>Ativos</SubTitle>
          <SubTitle>{numberFormatter(brazil.data.cases)}</SubTitle>
        </Header>
        <Header style={{ backgroundColor: '#F25559' }}>
          <SubTitle>Óbitos</SubTitle>
          <SubTitle>{numberFormatter(brazil.data.deaths)}</SubTitle>
        </Header>
        <Header style={{ backgroundColor: '#33b540' }}>
          <SubTitle>Recuperados</SubTitle>
          <SubTitle>{numberFormatter(brazil.data.recovered)}</SubTitle>
        </Header>
      </Container>
    </Wrapper>
  );
};
