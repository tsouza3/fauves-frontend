import React, { useState } from "react";
import axios from "axios";
import { fetchAddressByCep } from "../services/buscaCep";
import { updateUser } from "../services/updateUser";
import {
  Section,
  Container,
  Title,
  Input,
  InputContainer,
  Photo,
  PhotoInput,
  PhotoPreview,
  Label,
  SubTitle,
  InputWrapper,
  FormWrapper,
  SubmitButton,
  PhotoContainer,
} from "./editProfileStyles";
import Navbar from "../home/navbar";
import Rodape from '../rodape/rodape';
import Loader from "../Loader/loader"; 

export default function EditProfile() {
  const [photoPreview, setPhotoPreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    celular: "",
    cep: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
    numero: "",
  });
  const [loading, setLoading] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    document.getElementById("imageInput").click();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCepChange = async (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    handleInputChange(e);
    if (cep.length === 8) {
      try {
        const addressData = await fetchAddressByCep(cep);
        setFormData((prevData) => ({
          ...prevData,
          logradouro: addressData.logradouro,
          bairro: addressData.bairro,
          cidade: addressData.localidade,
          uf: addressData.uf,
        }));
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const token = getCookie("token");
      console.log("Token encontrado:", token); // Log do token

      if (!token) {
        console.error("Token não encontrado");
        alert("Erro: Token não encontrado.");
        return;
      }

      console.log("Enviando os seguintes dados:", formData); // Log dos dados do formulário
      const response = await updateUser(formData, token);
      console.log("Resposta do servidor:", response); // Log da resposta do servidor

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Erro ao atualizar perfil. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const getCookie = (name) => {
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log("Valor do cookie:", cookieValue); // Log do valor do cookie
    return cookieValue;
  };

  return (
    <>
      <Navbar />
      <Section>
        <FormWrapper onSubmit={handleSubmit}>
          <Container>
            <Title>Editar perfil</Title>
            <InputContainer>
              <PhotoContainer
                style={{
                  position: "relative",
                  width: "150px",
                  height: "150px",
                }}
              >
                <PhotoPreview src={photoPreview} />
                <Photo onClick={handleClick}>
                  <PhotoInput
                    name="profilePhoto"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    id="imageInput"
                  />
                </Photo>
              </PhotoContainer>
            </InputContainer>
            <InputContainer>
              <Label>Nome e sobrenome</Label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <Label>Email</Label>
              <Input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                readOnly
                backgroundColor={"#f7f7f7"}
              />
            </InputContainer>
            <InputContainer>
              <Label>CPF</Label>
              <Input
                type="text"
                name="cpf"
                mask={"***.***.***-**"}
                placeholder="___.___.___-__"
                value={formData.cpf}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <Label>Celular</Label>
              <Input
                type="text"
                name="celular"
                mask={"(**) * ****-****"}
                placeholder="(__) _ ____-____ "
                value={formData.celular}
                onChange={handleInputChange}
              />
            </InputContainer>
            <InputContainer>
              <Label>Data de nascimento</Label>
              <Input
                type="text"
                name="dataNascimento"
                mask={"**/**/****"}
                placeholder="__/__/____"
                value={formData.dataNascimento}
                onChange={handleInputChange}
              />
            </InputContainer>
            <SubTitle>Seu endereço</SubTitle>
            <InputContainer>
              <Label>CEP</Label>
              <Input
                type="text"
                name="cep"
                mask={"*****-***"}
                placeholder="_____-___"
                width={"47%"}
                value={formData.cep}
                onChange={handleCepChange}
              />
            </InputContainer>
            <InputWrapper>
              <InputContainer>
                <Label>Logradouro</Label>
                <Input
                  type="text"
                  name="logradouro"
                  width={"95%"}
                  value={formData.logradouro}
                  readOnly
                  backgroundColor={"#f7f7f7"}
                />
              </InputContainer>
              <InputContainer>
                <Label>Bairro</Label>
                <Input
                  type="text"
                  name="bairro"
                  width={"95%"}
                  value={formData.bairro}
                  readOnly
                  backgroundColor={"#f7f7f7"}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper>
              <InputContainer>
                <Label>Cidade</Label>
                <Input
                  type="text"
                  name="cidade"
                  width={"95%"}
                  value={formData.cidade}
                  readOnly
                  backgroundColor={"#f7f7f7"}
                />
              </InputContainer>
              <InputContainer>
                <Label>UF</Label>
                <Input
                  type="text"
                  name="uf"
                  width={"95%"}
                  value={formData.uf}
                  backgroundColor={"#f7f7f7"}
                  readOnly
                />
              </InputContainer>
            </InputWrapper>
            <InputContainer>
              <Label>Número</Label>
              <Input
                type="text"
                name="numero"
                width={"47%"}
                value={formData.numero}
                onChange={handleInputChange}
              />
            </InputContainer>
          </Container>
          <SubmitButton type="submit">
            {loading ? <Loader /> : "Salvar alterações"}
          </SubmitButton>
        </FormWrapper>
      </Section>
      <Rodape />
    </>
  );
}
