import { LeftSection, RegisterSection, Flex } from "./registerStyles";
import { Logo, Img, ImageWrapper, Image } from "./registerStyles";
import { Title, SubTitle, TextWrapper } from "./registerStyles";
import {
  Span,
  Label,
  Container,
  Form,
  FormTitle,
  InputContainer,
  Input,
  SubmitButton,
  SignupLink,
} from "./registerStyles";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { createUser } from "../services/userService";

import { Link } from "react-router-dom";

import FauvesLogo from "../assets/logo/FauvesLogo.svg";

import Loader from "../Loader/loader";

export default function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createUser(userData);

      if (response.success) {
        console.log("Registro bem-sucedido!");
        navigate("/login");
      } else {
        setPasswordError(response.message);
      }
    } catch (error) {
      console.error("Erro na solicitação:", error);
      setPasswordError("Erro ao registrar. Verifique os dados enviados");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex>
      <LeftSection>
        <Logo>
          <Link to="/">
            <Img src={FauvesLogo}></Img>
          </Link>
        </Logo>
        <TextWrapper>
          <Title>Seu evento, na palma da sua mão, em tempo real.</Title>
          <SubTitle>
            Saiba como transformar a forma como você gerencia o seu evento e
            vende seus ingressos.
          </SubTitle>
          <ImageWrapper></ImageWrapper>
        </TextWrapper>
      </LeftSection>
      <RegisterSection>
        <Container>
          <Form onSubmit={handleSubmit}>
            <FormTitle>Vamos criar sua conta</FormTitle>

            <InputContainer>
              <Label>Nome e sobrenome</Label>
              <Span></Span>
              <Input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <Label>Email</Label>
              <Span></Span>
              <Input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <Label>{"Senha (Mínimo 8 dígitos)"}</Label>
              <Span></Span>
              <Input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
              />
              {passwordError && (
                <span style={{ color: "red", marginTop: "1em" }}>
                  {passwordError}
                </span>
              )}
            </InputContainer>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? <Loader /> : "Criar minha conta"}
            </SubmitButton>
            <SignupLink to="/login">Já tenho conta</SignupLink>
          </Form>
        </Container>
      </RegisterSection>
    </Flex>
  );
}
