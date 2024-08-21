import React from "react";
import {
  Container,
  Image,
  TextContainer,
  TextWrapper,
  SubTextWrapper,
} from "./rectangleStyles";
import hands from "../assets/images/hands.svg";

export default function Rectangle({ totalEvents }) {
  return (
    <Container>
      <TextContainer>
        <TextWrapper>{totalEvents} eventos rolando hoje!</TextWrapper>
        <SubTextWrapper>{"Bora sair de casa >"}</SubTextWrapper>
      </TextContainer>
      <Image src={hands} alt="Hands"></Image>
    </Container>
  );
}
