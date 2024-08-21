import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeftSection, LoginSection, Flex } from "./loginStyles";
import { Logo, Img, ImageWrapper } from "./loginStyles";
import { Title, SubTitle, TextWrapper } from "./loginStyles";
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
} from "./loginStyles";
import Loader from "../Loader/loader";
import FauvesLogo from "../assets/logo/FauvesLogo.svg";
import { loginUser } from "../services/userLoginService";

import { Link } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await loginUser(credentials);
      if (response.success) {
        navigate("/profile");
      } else {
        setLoginError(response.message);
      }
    } catch (error) {
      console.error("Erro no login:", error);
      setLoginError(
        "Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Flex>
      <LeftSection>
        <Logo>
          <Link to="/">
            <Img src={FauvesLogo} alt="Fauves Logo" />
          </Link>
        </Logo>

        <TextWrapper>
          <Title>Seu evento, na palma da sua mão, em tempo real.</Title>
          <SubTitle>
            Saiba como transformar a forma como você gerencia o seu evento e
            vende seus ingressos.
          </SubTitle>
          <ImageWrapper />
        </TextWrapper>
      </LeftSection>
      <LoginSection>
        <Container>
          <Form onSubmit={handleLogin}>
            <FormTitle>Entre na sua conta</FormTitle>
            <InputContainer>
              <Label>Email</Label>
              <Span></Span>
              <Input
                type="email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
            </InputContainer>
            <InputContainer>
              <Label>Senha</Label>
              <Span></Span>
              <Input
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
              />

              {loginError && (
                <span style={{ color: "red", marginTop: "1em" }}>
                  {"Credenciais inválidas."}
                </span>
              )}
            </InputContainer>

            <SubmitButton type="submit">
              {loading ? <Loader /> : "Entrar"}
            </SubmitButton>
            <SignupLink to="/register">Não tenho conta</SignupLink>
          </Form>
        </Container>
      </LoginSection>
    </Flex>
  );
}
