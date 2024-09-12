import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { FaLessThan } from 'react-icons/fa';
import { SlOptionsVertical } from "react-icons/sl";
import jsQR from 'jsqr';
import SuccessValidation from './successValidation';
import { IoSearchOutline } from "react-icons/io5";
import { validateQrCode } from '../services/validateQrCode'; 
import ErrorValidation from './errorValidation';

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

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px; 
  height: 650px; 
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  @media (max-width: 800px) {
    width: 100vw; 
    height: 100vh; 
    border-radius: 0; 
  }
`;

const TopDiv = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-around;
  background-color: #fff; 
  height: 12%;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
  gap: 5.5em;
  color: #4b4b4b; 
  position: relative;

  @media (max-width: 800px) {
    height: 9%;
  }
`;

const SelectInterface = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1em;
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
  display: ${(props) => (props.show ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: #fff; 
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #4b4b4b;
  height: 30%;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  text-decoration: none;
  appearance: none;
  text-indent: 10px;
  outline: none;
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

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
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

// Estilizando o menu de opções
const DropdownMenu = styled.div`
  position: absolute;
  top: 35px;
  right: 2px;
  width: 200px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 2000;
`;

const DropdownItem = styled.div`
  padding: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #4b4b4b;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

export default function Checkin() {
  const videoRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState('QRCode');
  const [qrData, setQrData] = useState(null);
  const [validationResult, setValidationResult] = useState(null);
  const [error, setError] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleBackToCheckin = () => {
    setValidationResult(null);
    setError(null);
    setSelectedOption('QRCode');
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDropdownClick = (option) => {
    // Lógica para lidar com as opções selecionadas
    console.log(option);
    setDropdownVisible(false); // Fecha o dropdown após a seleção
  };

  useEffect(() => {
    if (selectedOption === 'QRCode') {
      const getCameraStream = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: { exact: "environment" } }
          });
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        } catch (error) {
          console.error('Erro ao acessar a câmera:', error);
        }
      };

      getCameraStream();
    }
  }, [selectedOption]);

  return (
    <ModalOverlay>
      <ModalContainer>
        {validationResult ? (
          <SuccessValidation qrData={validationResult} onBack={handleBackToCheckin}/>
        ) : error ? (
          <ErrorValidation onBack={handleBackToCheckin}/>
        ) : (
          <>
            <TopDiv>
              <FaLessThan style={{ cursor: 'pointer' }} />
              <p style={{ margin: '0' }}>Participantes</p>
              <div style={{ position: 'relative' }}>
                <SlOptionsVertical style={{ cursor: 'pointer' }} onClick={toggleDropdown} />
                {dropdownVisible && (
                  <DropdownMenu>
                    <DropdownItem onClick={() => handleDropdownClick('opções de check-in')}>
                      Opções de Check-in
                    </DropdownItem>
                    <DropdownItem onClick={() => handleDropdownClick('exportar participantes')}>
                      Exportar Participantes
                    </DropdownItem>
                    <DropdownItem onClick={() => handleDropdownClick('informações de check-in')}>
                      Informações de Check-in
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </div>
            </TopDiv>
            <SelectInterface>
              <Option style={{ marginLeft: '1em' }} selected={selectedOption === 'Lista'} onClick={() => setSelectedOption('Lista')}>
                Lista
              </Option>
              <Option selected={selectedOption === 'QRCode'} onClick={() => setSelectedOption('QRCode')}>
                QR Code
              </Option>
            </SelectInterface>
            <CameraDiv>
              {selectedOption === 'QRCode' ? (
                <Video ref={videoRef} autoPlay />
              ) : (
                <div style={{ width: '100%', height: '100%' }}>
                  <div style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <IoSearchOutline style={{ marginLeft: '1em' }} size='30px'/>
                    <Input placeholder='Procurar'/>
                  </div>
                  <PlaceholderDiv>Lista de Participantes</PlaceholderDiv>
                </div>
              )}
            </CameraDiv>
            <BottomDiv show={selectedOption === 'QRCode'}>
              <p style={{ maxWidth: '95%', textAlign: 'center' }}>
                Digitalize o QR Code para fazer o check-in.
              </p>
            </BottomDiv>
          </>
        )}
      </ModalContainer>
    </ModalOverlay>
  );
}
