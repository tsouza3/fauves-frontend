import styled from "styled-components";
import location from "../assets/icons/location.svg";

export const Container = styled.div`
  display: flex;
  width: 70%;
  height: 80px;
  border: 1px solid #d1d1d1;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 4em;
  align-items: center;
  justify-content: space-between;

  border-radius: 4px;
`;

export const LocationInput = styled.select`
  width: 30%;
  height: 50px;
  border-radius: 4px;
  margin-left: 3em;
  appearance: none;
  background-color: transparent;
  background-image: url(${location});
  background-repeat: no-repeat;
  background-position: 16px center;
  background-size: 20px;
  border: 1px solid #d1d1d1;
  padding: 8px 8px 8px 48px;
  color: #717171;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Input = styled.input`
  height: 47px;
  width: 60%;
  text-indent: 20px;
  border: 1px solid #d1d1d1;
  margin-right: 3em;

  border-radius: 4px;
  font-family: "Montserrat", sans-serif;
  font-size: 15px;

  font-weight: 600;
  color: #717171;
`;

export const Option = styled.option``;
