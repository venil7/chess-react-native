import styled from 'styled-components/native';
import { Link } from 'react-router-native';

export const TopMenu = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const MenuItem = styled(Link) `
  align-items: center;
  margin-top: 40;
  padding: 10;
  border: ${({pressed}) => pressed ? 2 : 1};
  border-color: indianred;
  border-radius: 10;
  background: ${({pressed}) => pressed ? 'lightsalmon' : 'papayawhip'};
  margin-left: 10;
  margin-right: 10;
`;