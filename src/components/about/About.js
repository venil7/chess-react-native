import React from "react";
import { Text } from "react-native";
import { Content } from "../Content";
import styled from "styled-components/native";

const about = `
© Art Deineka, 2017
Twitter: @darkest_ruby
`;

const AboutText = styled.Text`
  font-weight: bold;
  font-size: 16;
`;

export const About = () =>
  <Content>
    <AboutText>
      {about}
    </AboutText>
  </Content>;
