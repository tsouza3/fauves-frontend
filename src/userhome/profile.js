import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  PerfilContainer,
  Photo,
  TextWrapper,
  ButtonContainer,
  Button,
  RedButton,
  PhotoAndName,
} from "./userHomeStyles.js";
import { getUserProfile } from "../services/userDataService.js";



export function Profile() {
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  const [name, setName] = useState(null);
  const [icon, setIcon] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (token) {
          const userData = await getUserProfile({ token });
          setName(userData.name);
          setIcon(userData.profilePhoto);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
      }
    };

    fetchUserProfile();
  }, [token]);

  const handleLogout = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/login");
  };

  return (
    <PerfilContainer>
      <PhotoAndName>
        <Photo src={icon} />
        <TextWrapper>
          {typeof name === "string" &&
            name.trim().split(" ")[0].charAt(0).toUpperCase() +
              name.trim().split(" ")[0].slice(1)}
        </TextWrapper>
      </PhotoAndName>
      <ButtonContainer>
        <Button to="/editprofile">Editar perfil</Button>
        <RedButton onClick={handleLogout}>Sair</RedButton>
      </ButtonContainer>
    </PerfilContainer>
  );
}
