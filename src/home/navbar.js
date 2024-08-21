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
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do perfil:", error);
      }
    };

    fetchUserProfile();
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
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
                {" "}
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
          <Link to="/selecteventtype">
            <EventNavLink>Criar evento</EventNavLink>
          </Link>
        </NavLinks>
      </NavbarContainer>
      <Line />
    </>
  );
}

export default Navbar;
