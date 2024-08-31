import styled from 'styled-components';
import ReactInputMask from 'react-input-mask';

export const Section = styled.section`
  background-color: #f3f8fc;
  width: 100%;
  min-height: 100vh;
  height: auto;
`;

export const Container = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const PurchaseButton = styled.button`
  border-radius: 30px;
  width: 200px;
  height: 50px;
  color: #fff;
  background-color: #fa4a01;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 22px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EventContainer = styled.div`
  background-color: #fff;
  width: 70%;
  display: flex;
  height: 120px;
  align-self: center;
  justify-content: space-between;
  border-radius: 8px;
  margin-top: 2em;
`;

export const ImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  object-fit: cover;
  width: 50%;
  border-radius: 8px;
`;

export const EventText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 16px;
  margin: 0;
  color: #4b4b4b;

`;

export const EventTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  margin-left: 0.7em;
  justify-content: center;
  width: 50%;

`;

export const NameEvent = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
  color: #4b4b4b;

`;

export const TotalPrice = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  margin-right: 2em;
`;

export const PriceText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  margin: 0;
`;

export const TitleContainer = styled.div`
display: flex;
margin-top: 1em;
justify-content: start;
width: 70%;
flex-direction: column;


`

export const CountContainer = styled.div`
display: flex;
width: 70%;
height: 45px;
background-color: #fee2e2;
border-radius: 8px;
margin-top: 1em;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 14px;
text-align: center;
color: #4bb4b4b;
justify-content: space-between;


`

export const InformationTicketContainer = styled.div`
background-color: #fff;
height: 280px;
width: 40%;
border-radius: 10px;
margin-top: 1em;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 95%;
  height: 50px;
  margin-left: 1em;
  text-indent: 20px;
  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 11px;

  &:focus {
    outline: none;
    border-color: #ef4118;
  }
`;


export const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  color: #11455d;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  margin-bottom: 10px;
  margin-left: 1em;

`;
export const Lote = styled.div`
  height: 25px;
  width: 80px;
  background-color: #fa4a01;
  border-radius: 5px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin-bottom: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TypeTicket = styled.div`
  height: 25px;
  width: 80px;
  border-radius: 5px;
  background-color: #d4d5d0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #676661;
`;
export const TicketName = styled.div`
font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #3b3b3b;
`

export const TicketAndTags = styled.div`
height: 100%:
width: 100%;
display: flex;
flex-direction: row;
margin: 1em;
gap: 0.7em;
align-items: center;
`

export const ClockAndTimer = styled.div`
margin-right: 1.5em;
display: flex;
align-items: center;
gap: 0.7em;

`

export const Timer = styled.p`
font-family: "Montserrat", sans-serif;
font-weight: 700;
font-size: 20px;
color: #4b4b4b;

`

export const PixWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
height: 100%;

`
export const QrcodeWrapper = styled.div`
border: 2px solid #ccc;
padding: 2px;


`
export const PixText = styled.p`

font-family: "Montserrat", sans-serif;
font-weight: 700;

text-align: center;
font-size: 15px;
color: #4b4b4b;`

export const SubmitButton = styled.button`

border-radius: 30px;
  width: 32%;
  height: 50px;
  color: #fff;
  background-color: #fa4a01;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 18px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;`

export const PaymmentMethodChange = styled.div`
background-color: #fff;
width: 100%;
height: 70px;
font-family: "Montserrat", sans-serif;
font-weight: 600;
font-size: 16px;
color: #4b4b4b;
display: flex;
border-radius: 0 0 10px 10px;
cursor: pointer;
align-items: center;
gap: 0.5em;
transition: background-color 0.3s ease; /* Transição suave */

&:hover {
background-color: #fbfbfb;
}

`

export const TagParcelamento = styled.div`
display: flex;
text-align: center;
align-items: center;
justify-content: center;
background-color: #f8d8cb;
height: 20%;
border-radius: 6px;

width: auto;
padding: 5px;

`
export const PaymentContentContainer = styled.div`
display: flex;
background-color: #fff;
width: 100%;
flex-direction: column;
height: 400px;
margin-top: 1em;
border: 1px solid #ef4118;
border-radius: 10px;
`

export const FirstPixTextContainer = styled.div`
background-color: #fbfbfb;
height: 25%;
width: 100%;
font-family: "Montserrat", sans-serif;
font-weight: 700;
font-size: 15px;
display: flex;
align-items: center;
justify-content: space-between;
color: #4b4b4b;
border-radius: 10px 10px 0px 0px;
`

export const PixInstrucoes = styled.div`
display: flex;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 15.5px;
width: 100%;
margin-left: 1em;
flex-direction: column;
color: #4b4b4b;
max-width: 99%;


p {
  margin: 0;
  line-height: 1.2em; 
}


`

export const InputCpfOrCnpj = styled(ReactInputMask) `
box-sizing: border-box;
  width: 97%;
  height: 50px;
  margin-left: 1em;
  text-indent: 20px;
  background: #ffffff;
  border: 1px solid #c8dae7;
  border-radius: 11px;

  &:focus {
    outline: none;
    border-color: #ef4118;
  }
`

export const TermsAndCheckoutButton = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 2em;
font-family: "Montserrat", sans-serif;
font-weight: 500;
font-size: 15px;


`

export const Title = styled.h1`
margin: 0;
font-family: "Montserrat", sans-serif;
font-weight: 700;
font-size: 19px;
color: #4b4b4b;

`

export const Price = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 23px;
  margin: 0;
`;

