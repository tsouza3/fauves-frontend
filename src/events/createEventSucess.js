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
} from "./createEventSucessStyles";

import FauvesLogo from "../assets/logo/FauvesLogo.svg";

import HandsImage from "../assets/images/hands.svg";

import Rodape from "../rodape/rodape";

import { Link } from "react-router-dom";

export default function CreateEventSucess({text, text2, text3, router}) {
  return (
    <Section>
      <LogoContainer>
        <Link to="/">
          <Logo src={FauvesLogo}></Logo>
        </Link>
      </LogoContainer>
      <Container>
        <Title>
          {text} criado!
          <SubTitle>{text2}</SubTitle>
          <Text>
            Baixe o app Fauves para acompanhar as suas vendas, administrar
            equipe e gerenciar seu evento.
            <Link to={`/${router}`}>
              <BtnContainer>
                <Btn>{text3}</Btn>
              </BtnContainer>
            </Link>
          </Text>
        </Title>

        <ImageWrapper>
          <Image src={HandsImage}></Image>
        </ImageWrapper>
      </Container>
      <Rodape />
    </Section>
  );
}
