import styled from 'styled-components/native';

export const Container1 = styled.ScrollView`
  margin-top: 20px;
`;

export const Container = styled.ScrollView.attrs(() => ({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 5,
  },
}))`
  margin-top: 20px;
`;

export const Option = styled.View`
  background: #fff;
  width: 150px;
  height: 220px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-right: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${'Montserrat_800ExtraBold'};
  color: #004dd5;
  margin-bottom: 5px;
`;

export const SubTitle = styled.Text`
  font-family: ${'Roboto_400Regular'};
  color: #666;
  font-size: 16px;
  font-weight: bold;
`;

export const Img = styled.Image`
  align-self: center;
  width: 130px;
  height: 130px;
`;
