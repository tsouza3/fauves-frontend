import React, { useState, useEffect } from "react";
import { fetchAddressByCep } from "../services/buscaCep";
import { updateUser } from "../services/updateUser";
import { getUserProfile } from "../services/userDataService";
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
import Rodape from "../rodape/rodape";
import Loader from "../Loader/loader";
import { ErrorAlert } from "../events/error";
import { SuccessAlert } from "../events/success";

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
    cpf: "",
    dataNascimento: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const loadUserProfile = async () => {
      setLoading(true);
      try {
        const cookie = document.cookie;
        console.log("Cookie:", cookie);
        const token = cookie.replace(
          /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );
        console.log("Token:", token);
  
        if (!token) {
          setErrorMessage("Token não encontrado");
          return;
        }
  
        const userProfile = await getUserProfile(token);
  
        setFormData({
          name: userProfile.name || "",
          email: userProfile.email || "",
          celular: userProfile.celular || "",
          cep: userProfile.cep || "",
          logradouro: userProfile.logradouro || "",
          bairro: userProfile.bairro || "",
          cidade: userProfile.cidade || "",
          uf: userProfile.uf || "",
          numero: userProfile.numero || "",
          cpf: userProfile.cpf || "",
          dataNascimento: userProfile.dataNascimento || "",
        });
  
        if (userProfile.profilePhoto) {
          setPhotoPreview(userProfile.profilePhoto);
        }
      } catch (error) {
        console.error("Erro ao carregar perfil do usuário:", error);
      } finally {
        setLoading(false);
      }
    };
  
    loadUserProfile();
  }, []);
  

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
        setErrorMessage("Erro ao buscar CEP");
      }
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

      if (!token) {
        setErrorMessage("Token não encontrado");
        return;
      }

      const response = await updateUser(formData, token);

      setSuccessMessage("Perfil atualizado com sucesso!");
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      setErrorMessage(
        "Erro ao atualizar perfil, verifique os dados e tente novamente"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <FormWrapper>
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
                placeholder="(__) _ ____-____"
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
          <SubmitButton onClick={handleSubmit}>
            {loading ? <Loader /> : "Salvar alterações"}
          </SubmitButton>
          {successMessage && (
            <div style={{ marginTop: "1em", width: "100%" }}>
              <SuccessAlert message={successMessage} />
            </div>
          )}
          {errorMessage && (
            <div style={{ marginTop: "1em", width: "100%" }}>
              <ErrorAlert error={errorMessage} />
            </div>
          )}
        </FormWrapper>
      </Section>
      <Rodape />
    </>
  );
}
