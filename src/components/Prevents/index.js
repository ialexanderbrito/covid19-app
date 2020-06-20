import React from 'react';

import { Container1, Container, Option, Title, SubTitle, Img } from './styles';

import img1 from '../../assets/01.png';
import img2 from '../../assets/02.png';
import img3 from '../../assets/03.png';
import img4 from '../../assets/04.png';

const items = [
  {
    key: String(Math.random()),
    img: img4,
    title: 'Fique em casa se puder',
  },
  {
    key: String(Math.random()),
    img: img3,
    title: 'Use máscaras sempre que sair de casa',
  },
  {
    key: String(Math.random()),
    img: img2,
    title: 'Lave as mãos',
  },
  {
    key: String(Math.random()),
    img: img1,
    title: 'Mantenha a distância ',
  },
];

export default function Tips() {
  return (
    <Container1>
      <Title>Prevenções</Title>
      <Container>
        {items.map((item) => (
          <Option key={item.key}>
            <SubTitle>{item.title}</SubTitle>
            <Img source={item.img} resizeMode="contain" />
          </Option>
        ))}
      </Container>
    </Container1>
  );
}
