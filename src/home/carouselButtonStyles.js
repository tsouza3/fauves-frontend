import styled from "styled-components";
import { Link } from 'react-router-dom'

export const StyledButton = styled(Link)`
  appearance: none;
  background-color: transparent;
  border: 0.125em solid #2a2ad7;
  border-radius: 10px;
  box-sizing: border-box;
  color: #2a2ad7;
  cursor: pointer;
  display: inline-block;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 3em;
  min-width: 0;
  outline: none;
  padding: 1em 2.3em;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;

  margin-top: 7em;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #2a2ad7;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;
