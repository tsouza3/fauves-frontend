import styled from "styled-components";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoIosRemoveCircleOutline } from "react-icons/io";



export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
`;

export const IoAddCircle = styled(IoAddCircleOutline) `
transition: transform 0.2s ease;
cursor: pointer;

&:hover {
  transform: scale(1.10);
}
`

export const IoRemoveCircle = styled(IoIosRemoveCircleOutline) `
transition: transform 0.2s ease;
cursor: pointer;

&:hover {
  transform: scale(1.10);
}
`

export const Wrapper = styled.div`
  width: 40%;
  height: 90px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 1em;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
`;

export const AllContainer = styled.div`
  width: 100%;
  max-height: 30%;
`;

export const Name = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 700;
  color: #4e5450;
  height: 100%:
  width: 100%;
`;

export const Lote = styled.div`
  height: 20px;
  width: 72px;
  background-color: #fa4a01;
  border-radius: 5px;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  display: flex;
  justify-content: center;
  font-size: 14px;
  align-items: center;
`;

export const TypeTicket = styled.div`
  height: 20px;
  width: 72px;
  border-radius: 5px;
  background-color: #f7c901;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5em;
  margin-left: 1em;
  height: 100%;
  width: 50%;
  margin-top: 1em;
  margin-left: 1em;
`;

export const Price = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: #676661;
  margin-left: 0.9em;
  font-size: 17px;
  width: 50%;
  height: 100%;
`;

export const EditAndDelContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 0.5em;
  margin-right: 3.5em;

  align-items: start;
  justify-content: end;
`;

export const CartToCheckout = styled.section`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15vh;
  background-color: #fff;
  z-index: 15;
`;

export const ItensContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
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


export const QntTicket = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
  margin: 0;
  padding: 0;
`;

export const PriceText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 27px;
  margin: 0;
  padding: 0;
`;
