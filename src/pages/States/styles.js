import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #ebebeb;
`;

export const Container = styled.ScrollView`
  padding: 30px 24px;
`;

export const Navbar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const GoBack = styled.TouchableOpacity``;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${'Montserrat_800ExtraBold'};
  color: #004dd5;
`;

export const Logo = styled.Image`
  width: 50px;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  font-family: ${'Montserrat_800ExtraBold'};
  color: #fff;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  margin-top: 10px;
  font-size: 14px;
  font-family: ${'Roboto_400Regular'};
  line-height: 20px;
  color: #666;
`;

export const SearchBar = styled.View`
  background: #fff;
  margin-bottom: 40px;
  padding: 20px;
  border-radius: 8px;
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.TextInput`
  width: 220px;
  color: #1b1b1b;
  font-family: ${'Roboto_500Medium'};
`;

export const List = styled.FlatList`
  margin-bottom: 100px;
`;

export const ListItem = styled.TouchableOpacity`
  background: #fff;
  padding: 20px 20px;
  border-radius: 15px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListTitle = styled.Text`
  font-family: ${'Roboto_500Medium'};
  color: #1b1b1b;
`;
