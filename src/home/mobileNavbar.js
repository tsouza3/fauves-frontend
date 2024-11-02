import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaCompass } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoTicketOutline } from "react-icons/io5";
import { PiUserCircleLight } from "react-icons/pi";
import { Link, useLocation } from 'react-router-dom';

const NavbarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 99;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 15px;
`;

const Linkk = styled(Link)`
  text-decoration: none;
  appearance: none;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => (props.active ? "#ef4118" : "#58636A")};
  font-size: 12px;
  cursor: pointer;

  svg {
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

const MobileNavbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    // Atualiza o item ativo com base na localização atual
    switch (location.pathname) {
      case '/profile':
        setActiveItem('Usuário');
        break;
      case '/':
        setActiveItem('Explorar');
        break;
      case '/ingressos':
        setActiveItem('Ingressos');
        break;
      case '/criarevento':
        setActiveItem('Criar evento');
        break;
      default:
        setActiveItem('');
    }
  }, [location.pathname]);

  return (
    <NavbarContainer>
      <Linkk to="/">
        <NavItem
          active={activeItem === "Explorar"}
          onClick={() => setActiveItem("Explorar")}
        >
          <FaCompass />
          <span>Explorar</span>
        </NavItem>
      </Linkk>

      <NavItem
        active={activeItem === "Pesquisar"}
        onClick={() => setActiveItem("Pesquisar")}
      >
        <CiSearch />
        <span>Pesquisar</span>
      </NavItem>

      <NavItem
        active={activeItem === "Criar evento"}
        onClick={() => setActiveItem("Criar evento")}
      >
        <IoIosAddCircleOutline />
        <span>Criar evento</span>
      </NavItem>

      <NavItem
        active={activeItem === "Ingressos"}
        onClick={() => setActiveItem("Ingressos")}
      >
        <IoTicketOutline />
        <span>Ingressos</span>
      </NavItem>

      <Linkk to="/profile">
        <NavItem
          active={activeItem === "Usuário"}
          onClick={() => setActiveItem("Usuário")}
        >
          <PiUserCircleLight />
          <span>Usuário</span>
        </NavItem>
      </Linkk>
    </NavbarContainer>
  );
};

export default MobileNavbar;
