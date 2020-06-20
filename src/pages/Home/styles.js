import styled from 'styled-components/native';
import Constants from 'expo-constants';

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
  padding: 30px 20px;
  background-color: #fff;
  border-radius: 8px;
`;

export const SubTitle = styled.Text`
  font-size: 24px;
  font-family: ${'Montserrat_800ExtraBold'};
  color: #004dd5;
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: ${'Roboto_400Regular'};
  line-height: 20px;
  color: #666;
`;

export const Situation = styled.TouchableOpacity`
  margin-top: 40px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SituationButton = styled.TouchableOpacity`
  height: 55px;
  width: 150px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #33b540;
  border-radius: 10px;
`;

export const SituationText = styled.Text`
  color: #fff;
  font-family: ${'Roboto_500Medium'};
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
`;
