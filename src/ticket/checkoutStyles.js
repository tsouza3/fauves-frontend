import styled from "styled-components";
import ReactInputMask from "react-input-mask";

const Section = styled.section`
  width: 100%;
  height: 150vh;
  background-color: #f3f8fc;
`;

const BlurContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`


const BlurredImage = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
filter: blur(40px);







`

const UserContainer = styled.div`
  background-color: #fff;
  margin-top: 2em;
  width: 52%;
  height: 70px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 1em;
  position: absolute;
  bottom: 82%;

`;

const FormContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: absolute;
  padding-bottom: 2em;
  top: 20%;

`;

const FormWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 2em;
  margin-top: 1em;
  @media (max-width: 768px) {
    width: 55%;
  }
`;

const EventImage = styled.img`
  border-radius: 10px;
  width: 18%;
  height: 95%;
  object-fit: cover;
  @media (max-width: 1024px) {
    width: 25%;
  }

  @media (max-width: 768px) {
    width: 35%;
  }
`;

const SubmitButton = styled.button`
  width: ${(props) => props.width || "100%"};
  height: 50px;
  border-radius: 30px;
  border: none;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background: #ef4118;
  letter-spacing: 0.7px;
  font-family: "Montserrat", sans-serif;
  align-self: center;
  margin-top: 2em;
  margin-bottom: ${(props) => props.marginBottom || ""};
`;

const Date = styled.div`
  color: #ef4118;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

const Name = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 21px;
  color: #4b4b4b;
`;

const UserText = styled.div`
  margin-left: 1em;
`;

const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #4b4b4b;
`;

const EventOwner = styled.div`
  background-color: #f2f8fc;
  width: 96.5%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 1em;
  margin-bottom: 1em;
`;

const UserIcon = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #ccc;
  margin-right: 1em;
`;

const UserName = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  color: #4b4b4b;
`;

const Input = styled(ReactInputMask)`
  height: 50px;
  text-indent: 20px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  border: 1px solid #c8dae7;
  border-radius: 10px;
  margin-bottom: 1em;
  margin-top: 0.5em;
  width: ${(props) => props.width || "50%"};

  &:focus {
    outline: none;
    border-color: #ef4118;
  }

  &:hover {
    border: 2px solid #c8dae7;
  }
`;

const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  color: #11455d;
  font-weight: 400;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: row;
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-bottom: 1em;
  gap: 0.7em;
`;

const Option = styled.div`
  height: 30px;
  border-radius: 10px;
  width: ${(props) => props.width || "100%"};
  border: 1px solid ${(props) => (props.selected ? "#ef4118" : "#4b4b4b")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 13px;
  cursor: pointer;

  @media (max-width: 768px) {
    width: ${(props) => props.minWidth || "100%"};
  }

  &:hover {
    border: 1px solid #ef4118;
  }
`;

const OptionText = styled.span`
  margin-left: 0.5em;
`;

const PixWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

const QrcodeWrapper = styled.div`
  background-color: #fff;
  border: 3px solid #ccc;

  width: auto;
  height: auto;
  margin-top: 2em;
`;

export const PixText = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top: 2em;
  text-align: center;
  color: #4b4b4b;
`;

export {
  Section,
  BlurContainer,
  UserContainer,
  FormContainer,
  FormWrapper,
  EventImage,
  SubmitButton,
  Date,
  Name,
  UserText,
  Title,
  EventOwner,
  UserIcon,
  UserName,
  Input,
  Label,
  InputContainer,
  InputWrapper,
  OptionsContainer,
  Option,
  OptionText,
  QrcodeWrapper,
  PixWrapper,
  BlurredImage
};
