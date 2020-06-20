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

export const Header = styled.View`
  margin-top: 20px;
  padding: 20px 20px;
  background-color: #fbbd09;
  border-radius: 8px;
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
