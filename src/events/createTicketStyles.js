import ReactInputMask from "react-input-mask";
import styled from "styled-components";

export const Section = styled.section`
  background-color: #f3f8fc;
  width: 100%;
  height: auto;
`;

export const PriceContainer = styled.div`
  width: 700px;
  background-color: #fdf4de;
  height: 130px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
export const PriceText = styled.p`
  color: #b48513;
  font-family: "Montserrat", sans-serif;
  margin: 1.5em;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #4b4b4b;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 38px;
  margin-top: 2em;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Span = styled.span`
  margin-top: 10px;
`;

export const Input = styled(ReactInputMask)`
  width: ${(props) => props.width || "700px"};
  height: ${(props) => props.height || "50px"};

  text-indent: 20px;

  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 11px;

  &:focus {
    outline: none;
    border-color: #ef4118;
  }
`;

export const Select = styled.select`
  box-sizing: border-box;
  width: ${(props) => props.width || "700px"};
  height: 50px;

  text-indent: 20px;

  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 11px;

  &:focus {
    outline: none;
    border-color: #ef4118;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 2.5em;

  display: flex;
  flex-direction: column;
`;
export const Option = styled.option``;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
`;

export const SubmitButton = styled.button`
  width: 700px;
  height: 50px;
  border-radius: 30px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background: #ef4118;
  letter-spacing: 0.7px;
  font-family: "Montserrat", sans-serif;
`;

export const InputContainer = styled.div`
  margin-bottom: 2.5em;
  display: flex;
  align-items: flex-start;
`;

export const SubTitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 15px;
`;

export const RadioInput = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
  margin-right: 5px;
  cursor: pointer;

  &:checked {
    background-color: #ef4118;
  }
`;

export const RadioButtonContainer = styled.div`
  display: flex;

  align-items: center;
  cursor: pointer;
`;
