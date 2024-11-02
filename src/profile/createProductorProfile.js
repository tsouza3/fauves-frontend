import React, { useState, useEffect } from "react";
import { createProductorProfile } from "../services/createComercialProfile";
import InputMask from "react-input-mask";
import {
  Section,
  Container,
  Form,
  FormTitle,
  InputContainer,
  Input,
  Label,
  SubmitBtn,
  PhotoPreview,
  Photo,
  PhotoInput,
  ToggleButton,
  ButtonContainer,
} from "./createProductorProfileStyles";

import { ErrorAlert} from '../events/error'
import Rodape from '../rodape/rodape'
import { useNavigate } from "react-router-dom";
import Navbar from "../home/navbar";
import MobileNavbar from "../home/mobileNavbar";
import { Profile } from "../userhome/profile";
import Loader from '../Loader/loader'

export default function CreateProductorProfile() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [cpfOrCnpj, setCpfOrCnpj] = useState("CPF");
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Estado para a largura da tela

  const navigate = useNavigate();

  // Função que lida com a troca de imagem
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhotoPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setProfilePhoto(file); 
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto); 
    formData.append("nomeEmpresa", e.target.nomeEmpresa.value);
    formData.append("nomeUsuario", e.target.nomeUsuario.value);
    formData.append("categoria", e.target.categoria.value);
    formData.append("instagram", e.target.instagram.value);
    formData.append("telefone", e.target.telefone.value);
    formData.append("empresa", e.target.empresa.value);
    formData.append("descricao", e.target.descricao.value);
    formData.append("cpfoucnpj", e.target.cpfoucnpj.value);

    try {
      await createProductorProfile(formData, token);
      navigate('/createcomercialprofile/success');
    } catch (error) {
      setErrorMessage("Erro ao criar perfil comercial.");
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    document.getElementById("imageInput").click();
  };

  const toggleCpfOrCnpj = (type) => {
    setCpfOrCnpj(type);
  };

  // Função para monitorar a largura da tela e atualizar o estado
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Section>
      {/* Renderiza Navbar ou MobileNavbar baseado no tamanho da tela */}
      {windowWidth > 700 ? <Navbar /> : <MobileNavbar />}
      
      {/* Renderiza o Profile condicionalmente para telas maiores */}
      {windowWidth > 700 && <Profile />}

      <Container>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <FormTitle>Criar perfil comercial</FormTitle>

          <InputContainer>
            <div
              style={{ position: "relative", width: "150px", height: "150px" }}
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
            </div>
          </InputContainer>

          <InputContainer>
            <Label>Nome da empresa</Label>
            <Input type="text" name="nomeEmpresa" placeholder="Fauves" />
          </InputContainer>
          <InputContainer>
            <Label>Nome do usuário</Label>
            <Input type="text" name="nomeUsuario" placeholder="fauvesbr" />
          </InputContainer>
          <InputContainer>
            <Label>Categoria</Label>
            <Input type="text" name="categoria" placeholder="" />
          </InputContainer>
          <InputContainer>
            <Label>Instagram</Label>
            <Input type="text" name="instagram" />
          </InputContainer>
          <InputContainer>
            <Label>Telefone</Label>
            <InputMask mask="(99) 99999-9999">
              {(inputProps) => <Input {...inputProps} name="telefone" />}
            </InputMask>
          </InputContainer>
          <InputContainer>
            <Label>Empresa</Label>
            <Input type="text" name="empresa" />
          </InputContainer>
          <InputContainer>
            <Label>Descrição</Label>
            <Input type="text" name="descricao" />
          </InputContainer>
          <InputContainer>
            <Label>CPF ou CNPJ</Label>
            <ButtonContainer>
              <ToggleButton
                type="button"
                onClick={() => toggleCpfOrCnpj("CPF")}
                active={cpfOrCnpj === "CPF"}
              >
                CPF
              </ToggleButton>
              <ToggleButton
                type="button"
                onClick={() => toggleCpfOrCnpj("CNPJ")}
                active={cpfOrCnpj === "CNPJ"}
              >
                CNPJ
              </ToggleButton>
            </ButtonContainer>
            <InputMask
              mask={
                cpfOrCnpj === "CPF" ? "999.999.999-99" : "99.999.999/9999-99"
              }
            >
              {(inputProps) => <Input {...inputProps} name="cpfoucnpj" />}
            </InputMask>
          </InputContainer>
          <SubmitBtn type="submit">
            {loading ? <Loader /> : "Criar"}
          </SubmitBtn>
          {errorMessage && <div style={{marginTop: '2em', width: '100%' }}><ErrorAlert error={'Erro ao criar perfil comercial'}/></div>}
        </Form>
      </Container>
      <Rodape />
    </Section>
  );
}
