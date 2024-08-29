import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../home/navbar";
import { Profile } from "../userhome/profile";
import Loader from "../Loader/loader";
import { useNavigate, useLocation } from "react-router-dom";
import Rodape from "../rodape/rodape";
import {ErrorAlert} from './error'

import {
  Section,
  Container,
  Form,
  FormTitle,
  InputContainer,
  Input,
  Label,
  SubmitButton,
  Span,
  PhotoContainer,
  Wrapper,
  Img,
  Text,
  SubText,
  InputWrapper,
  Select,
  ImageInput,
  PhotoPreview,
} from "./createEventStyles";
import Camera from "../assets/icons/camera.svg";
import { createEvent } from "../services/createEvent";
import { getUserProfile } from "../services/userDataService";

export function CreateEvent() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  const navigate = useNavigate();
  const location = useLocation();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [commercialProfiles, setCommercialProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState("");
  const [addressSuggestions, setAddressSuggestions] = useState([]);
  const [coverPreview, setCoverPreview] = useState(null); // Estado para armazenar o preview da capa

  useEffect(() => {
    const fetchUserProfiles = async () => {
      try {
        if (token) {
          const userProfileData = await getUserProfile({ token });
          setCommercialProfiles(userProfileData.commercialProfiles);
        } else {
          console.error("Token não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar perfis comerciais:", error);
      }
    };

    fetchUserProfiles();
  }, [token]);

  const parseDate = (dateString) => {
    const [datePart, timePart] = dateString.split(" às ");
    const [day, month, year] = datePart.split("/");
    const [hours, minutes] = timePart.split(":");
    return new Date(year, month - 1, day, hours, minutes);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);

      // Converter as datas para o formato Date
      const dataInicio = parseDate(formData.get("dataInicio"));
      const dataTermino = parseDate(formData.get("dataTermino"));

      formData.set("dataInicio", dataInicio.toISOString());
      formData.set("dataTermino", dataTermino.toISOString());

      formData.append("selectedCommercialProfileId", selectedProfile);

      const response = await createEvent(formData, token);

      navigate("/createevent/success");
    } catch (error) {
      console.error("Erro ao criar evento:", error);
      setErrorMessage("Erro ao criar evento.");
    } finally {
      setLoading(false);
    }
  };

  const handleAddressChange = async (e) => {
    const { value } = e.target;
    try {
      const response = await axios.get(
        `https://viacep.com.br/ws/${value}/json/`,
      );
      setAddressSuggestions(response.data);
    } catch (error) {
      console.error("Erro ao buscar endereço:", error);
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const isOnlineEvent = location.pathname === "/createonlineevent";

  return (
    <Section>
      <Navbar />
      <Profile />
      <Container>
        <Form onSubmit={handleSubmit} encType="multipart/form-data">
          <FormTitle>Criar evento</FormTitle>
          <InputContainer>
            <Label>Nome do evento</Label>
            <Input type="text" name="nomeEvento" />
          </InputContainer>

          <InputWrapper>
            <InputContainer>
              <Label>Data e hora do início</Label>
              <Input
                width={"342px"}
                type="text"
                name="dataInicio"
                mask="**/**/**** às **:**"
                placeholder="dd/mm/yyyy às hh:mm"
              />
            </InputContainer>
            <InputContainer>
              <Label>Data e hora do término</Label>
              <Input
                width={"342px"}
                type="text"
                name="dataTermino"
                mask="**/**/**** às **:**"
                placeholder="dd/mm/yyyy às hh:mm"
              />
            </InputContainer>
          </InputWrapper>

          <InputWrapper>
            <InputContainer>
              <Label>Categoria</Label>
              <Input width={"342px"} type="text" name="categoria" />
            </InputContainer>

            <InputContainer>
              <Label>
                {isOnlineEvent ? "Link de transmissão" : "Local do evento"}
              </Label>
              <Input
                width={"342px"}
                type="text"
                name="localDoEvento"
                onChange={handleAddressChange}
                list="addressSuggestions"
                disabled={isOnlineEvent}
              />
              <datalist id="addressSuggestions">
                {addressSuggestions.map((address, index) => (
                  <option key={index} value={address.logradouro} />
                ))}
              </datalist>
            </InputContainer>
          </InputWrapper>

          <InputContainer>
            <Label>Produzido por</Label>
            <Select
              onChange={(e) => setSelectedProfile(e.target.value)}
              value={selectedProfile}
            >
              <option value="">Selecione o perfil comercial</option>
              {commercialProfiles.map((profile) => (
                <option key={profile._id} value={profile._id}>
                  {profile.nomeEmpresa} - {profile.nomeUsuario}
                </option>
              ))}
            </Select>
          </InputContainer>

          <InputContainer>
            <Label>Email ou telefone público</Label>
            <Input type="text" name="emailEvento" />
          </InputContainer>

          <InputContainer>
            <label htmlFor="capaEventoInput" className="custom-file-upload">
              <PhotoContainer>
                {coverPreview ? (
                  <PhotoPreview >
                    <img src={coverPreview}></img>
                  </PhotoPreview>
                ) : (
                  <Wrapper>
                    <Img src={Camera} alt="camera icon" />
                    <Text>
                      Adicionar capa do evento
                      <SubText>Tamanho recomendado 800 x 480</SubText>
                    </Text>
                  </Wrapper>
                )}
                <ImageInput
                  type="file"
                  id="capaEventoInput"
                  accept="image/*"
                  name="capaEvento"
                  onChange={handleCoverChange}
                />
              </PhotoContainer>
            </label>
          </InputContainer>
          <SubmitButton type="submit">
            {loading ? <Loader /> : "Criar evento"}
          </SubmitButton>
          {errorMessage && <div style={{marginTop: '2em' }}><ErrorAlert error={'Erro ao criar evento!'}/></div>}
        </Form>
      </Container>
      <Rodape />
    </Section>
  );
}
