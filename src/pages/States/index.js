import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Title,
  GoBack,
  Navbar,
  Logo,
  Description,
  SearchBar,
  Search,
  List,
  ListItem,
  ListTitle,
  Flag,
} from './styles';

import logo from '../../assets/logo.png';

export default States = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const { states } = route.params;

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(states);

  useEffect(() => {
    const result = states.data.filter((state) =>
      state.state.toLowerCase().includes(search.toLowerCase())
    );
    setFilter(result);
  }, [search]);

  function handleNavigateBack() {
    navigation.goBack();
  }

  navigateToDetails = (state) => {
    navigation.navigate('DetailStates', { detail: state });
  };

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
        <Title>Situação nos Estados</Title>
        <Description>
          O Corona vírus está se espalhando cada vez mais nos países. Faça a sua
          parte e ajude o mundo a vencer esse vírus.
        </Description>

        <SearchBar>
          <Search
            value={search}
            onChangeText={setSearch}
            placeholder="Procure um estado..."
          />
          <Ionicons name="ios-search" size={24} color="#004dd5" />
        </SearchBar>

        <List
          data={filter}
          keyExtractor={(states) => String(states.data)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item: state }) => (
            <ListItem
              onPress={() => {
                navigateToDetails(state);
              }}
            >
              <Flag
                resizeMode="contain"
                source={{
                  uri: `https://devarthurribeiro.github.io/covid19-brazil-api/static/flags/${state.uf}.png`,
                }}
              />
              <ListTitle>{state.state}</ListTitle>
              <Ionicons
                name="ios-arrow-round-forward"
                size={32}
                color="#004dd5"
              />
            </ListItem>
          )}
        />
      </Container>
    </Wrapper>
  );
};
