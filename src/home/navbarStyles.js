import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  background-color: ${(props) => props.backgroundColor || "#fff"};
`;

export const Logo = styled.img`
  width: 121px;
  height: 50px;
  margin-left: 1em;
`;

export const NavLinks = styled(Link)`
  display: flex;
  align-items: center;

  text-decoration: none;
`;

export const EventNavLink = styled.button`
  font-size: 17px;
  border: none;
  height: 45px;
  width: 130px;
  background: #ff3f00;
  color: #fff;
  border-radius: 4px;
  margin-right: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(180, 50, 50, 0.8);
  }
`;
export const AccountLink = styled.button`
  border: 1px solid #c8dae7;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  font-size: 13px;
  height: 45px;
  width: auto;
  min-width: 75px;

  color: #696969;

  background: transparent;

  margin-right: 2em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c8dae7;
  }
`;
export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  transition: color 0.3s ease;

  font-weight: 300;

  color: black;

  &:hover {
    color: #ef4118;
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Line = styled.hr`
  border: 1px solid #d1ebff;
  margin: 0;
`;
