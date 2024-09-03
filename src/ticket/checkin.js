import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { FaLessThan } from 'react-icons/fa';
import { SlOptionsVertical } from "react-icons/sl";
import { Html5QrcodeScanner } from "html5-qrcode";
import SuccessValidation from './successValidationStyles'; // Importe o componente

// Estilo para o modal
const ModalOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

// Estilo do modal
const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 650px;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  @media (max-width: 600px) {
    width: 100vw;
    height: 100vh;
  }
`;

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff; 
  height: 20%;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #4b4b4b;
  padding: 0;
  margin: 0;
  gap: 5.5em;
`;

export const SelectInterface = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  gap: 1.5em;
  flex-direction: row;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #4b4b4b;
  background-color: #fff;
`;

const Option = styled.div`
  cursor: pointer;
  color: ${(props) => (props.selected ? '#ef4118' : '#4b4b4b')};
  border-bottom: ${(props) => (props.selected ? '2px solid #ef4118' : 'none')};
  padding: 10px;
`;

const BottomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff; 
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #4b4b4b;
  height: 30%;
`;

const CameraDiv = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 100%;
  height: 100%;
`;

const PlaceholderDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f3f8fc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #757575;
  font-size: 24px;
  font-weight: bold;
`;

export default function Checkin() {
  const [selectedOption, setSelectedOption] = useState('QRCode');
  const [isSuccess, setIsSuccess] = useState(false);
  const [qrCodeData, setQrCodeData] = useState(null);

  useEffect(() => {
    if (selectedOption === 'QRCode' && !isSuccess) {
      const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
      scanner.render(
        (decodedText, decodedResult) => {
          // Função de sucesso ao ler o QR Code
          console.log(`Código QR lido: ${decodedText}`);
          // Validar o QR code
          handleQrCodeSuccess(decodedText);
          scanner.clear();
        },
        (errorMessage) => {
          // Função de erro durante a leitura
          console.error(`Erro ao ler o QR Code: ${errorMessage}`);
        }
      );
    }
  }, [selectedOption, isSuccess]);

  const handleQrCodeSuccess = (data) => {
    // Simulação de validação
    setQrCodeData(data);
    setIsSuccess(true); // Define como sucesso para renderizar o componente SuccessValidation
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <TopDiv>
          <FaLessThan style={{cursor: 'pointer'}} />
          <p>Participantes</p>
          <SlOptionsVertical style={{cursor: 'pointer'}} />
        </TopDiv>
        <SelectInterface>
          <Option style={{marginLeft: '1em'}} selected={selectedOption === 'Lista'} onClick={() => setSelectedOption('Lista')}>
            Lista
          </Option>
          <Option selected={selectedOption === 'QRCode'} onClick={() => setSelectedOption('QRCode')}>
            QR Code
          </Option>
        </SelectInterface>
        <CameraDiv id="reader">
          {selectedOption === 'QRCode' ? (
            isSuccess ? (
              <SuccessValidation qrData={qrCodeData} />
            ) : (
              <div id="reader"></div>
            )
          ) : (
            <PlaceholderDiv>Lista de Participantes</PlaceholderDiv>
          )}
        </CameraDiv>
        <BottomDiv>
          Digitalize o QR Code para fazer o check-in.
        </BottomDiv>
      </ModalContainer>
    </ModalOverlay>
  );
}
