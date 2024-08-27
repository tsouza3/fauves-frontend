import styled from "styled-components";
import ReactInputMask from "react-input-mask";

export const Section = styled.section`
  background-color: #f3f8fc;
  width: 100%;
  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  margin-top: 2em;
  width: 76px;
  height: 74px;
`;

export const Titulo = styled.p`
  display: flex;
  justify-content: center;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 23px;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const FormTitle = styled.p`
  display: flex;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  font-size: 33px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const Span = styled.span`
  margin-top: 10px;
`;

export const Input = styled(ReactInputMask)`
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

export const ImageInput = styled.input`
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: none;
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
  font-family: "Montserrat", sans-serif;
`;

export const Wrapper = styled.div`
  border: 2px dashed #ccc;
  width: 650px;
  height: 200px;
  border-radius: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;

export const PhotoContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 11px;
  width: 700px;
  height: 250px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Text = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #4b4b4b;
  font-size: 20px;
  font-weight: 800;
`;

export const SubText = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #b1b1b1;
  font-size: 15px;
  font-weight: 500;
  margin-left: 0.2em;
`;

export const PublicOrPrivate = styled.div`
  width: 330px;
  height: 130px;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
`;

export const PublicOrPrivateText = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #4b4b4b;
  font-weight: 800;
`;

export const PublicOrPrivateSubText = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #4b4b4b;
  font-weight: 300;
`;

export const InputContainer = styled.div`
  margin-bottom: 2.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


export const PhotoPreview = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover::before {
    opacity: 1;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Cor preta com transparência */
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
    position: relative;
    z-index: 0;
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
`;
