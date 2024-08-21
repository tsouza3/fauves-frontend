import React from "react";

import {
  Container,
  TextContainer,
  Image,
  SubText,
  Button,
  Text,
  Section,
} from "./bannerStyles";

import ManWithPhone from "../assets/images/manwithphone.png";

export default function Banner() {
  return (
    <Section>
      <Container>
        <TextContainer>
          <Text>Seu evento, na palma da sua mão, em tempo real.</Text>
          <SubText>
            Saiba como transformar a forma como você gerencia o seu evento e
            vende seus ingressos.
          </SubText>
          <Button>Descubra &#10095;</Button>
        </TextContainer>

        <Image src={ManWithPhone}></Image>
      </Container>
    </Section>
  );
}
