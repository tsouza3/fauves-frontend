import React, { useState, useEffect } from "react";
import {
  NavbarContainer,
  Logo,
  NavLinks,
  NavLink,
  EventNavLink,
  AccountLink,
  Line,
} from "./navbarStyles";
import { Link } from "react-router-dom";
import FauvesLogo from "../assets/logo/FauvesLogo.svg";
import { getUserProfile } from "../services/userDataService.js";


function Navbar({ backgroundColor }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState(null);
  const [commercialProfiles, setCommercialProfiles] = useState([]);

  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
    "$1",
  );

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (token) {
          const userData = await getUserProfile({ token });
          setName(userData.name);
          setCommercialProfiles(userData.commercialProfiles || []);
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
      }
    };

    fetchUserProfile();
    setLoggedIn(!!token);
  }, [token]);

  return (
    <>
      <NavbarContainer backgroundColor={backgroundColor}>
        <Link to="/">
          <Logo src={FauvesLogo} />
        </Link>
        <NavLinks>
          <NavLink>Eventos</NavLink>
          <NavLink>Para produtores</NavLink>
          {loggedIn ? (
            <Link to="/profile">
              <AccountLink>
                {typeof name === "string" &&
                  name.trim().split(" ")[0].charAt(0).toUpperCase() +
                    name.trim().split(" ")[0].slice(1)}
              </AccountLink>
            </Link>
          ) : (
            <Link to="/login">
              <AccountLink>Login</AccountLink>
            </Link>
          )}
          {commercialProfiles.length > 0 ? (
            <Link to="/createevent">
              <EventNavLink>Criar evento</EventNavLink>
            </Link>
          ) : (
            <Link to="/commercialprofileerror">
              <EventNavLink>Criar evento</EventNavLink>
            </Link>
          )}
        </NavLinks>
      </NavbarContainer>
      <Line />
    </>
  );
}

export default Navbar;
