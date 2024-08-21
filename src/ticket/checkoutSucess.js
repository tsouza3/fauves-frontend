import React from "react";
import {
  LogoContainer,
  Section,
  Logo,
  Container,
  Title,
  SubTitle,
  ImageWrapper,
  Image,
  Text,
  Btn,
  BtnContainer,
} from "./checkoutSucessStyles";

import Rodape from "../rodape/rodape";

import FauvesLogo from "../assets/logo/FauvesLogo.svg";

import Checkout from "../assets/images/checkoutsucess.svg";

import { Link } from "react-router-dom";

export default function CreateEventSucess() {
  return (
    <Section>
      <LogoContainer>
        <Link to="/">
          <Logo src={FauvesLogo}></Logo>
        </Link>
      </LogoContainer>
      <Container>
        <Title>
          Compra finalizada!
          <SubTitle>Nos vemos no show!</SubTitle>
          <Text>
            Baixe o app Fauves para ver os seus ingressos e adicionar créditos
            para seu consumo no dia do evento!
            <Link to="/profile">
              <BtnContainer>
                <Btn>Ver meus ingressos</Btn>
              </BtnContainer>
            </Link>
          </Text>
        </Title>

        <ImageWrapper>
          <Image src={Checkout}></Image>
        </ImageWrapper>
      </Container>
      <Rodape />
    </Section>
  );
}
