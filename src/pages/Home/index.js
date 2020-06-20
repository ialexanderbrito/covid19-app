import React from 'react';
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

import logo from '../../assets/logo.png';

export default function Home() {
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
            <SituationButton style={{ backgroundColor: '#FBBD09' }}>
              <FontAwesome5 name="globe-americas" size={20} color="#fff" />
              <SituationText>Brasil</SituationText>
            </SituationButton>

            <SituationButton>
              <FontAwesome5 name="flag" size={20} color="#fff" />
              <SituationText>Estados</SituationText>
            </SituationButton>
          </Situation>
        </Header>
      </Container>
    </Wrapper>
  );
}
