import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';
import { FaLessThan } from 'react-icons/fa';
import { SlOptionsVertical } from "react-icons/sl";
import jsQR from 'jsqr';
import SuccessValidation from './successValidation';

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
  width: 500px; /* Largura fixa para dispositivos maiores */
  height: 650px; /* Altura fixa para dispositivos maiores */
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  @media (max-width: 600px) {
    width: 100vw; /* Largura total da tela para dispositivos móveis */
    height: 100vh; /* Altura total da tela para dispositivos móveis */
    border-radius: 0; /* Remove bordas arredondadas em dispositivos móveis */
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
`;

const SelectInterface = styled.div`
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

export default function Checkin() {
  const videoRef = useRef(null);
  const [selectedOption, setSelectedOption] = useState('QRCode');
  const [qrData, setQrData] = useState(null);
  
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

  useEffect(() => {
    if (selectedOption === 'QRCode' && videoRef.current) {
      const video = videoRef.current;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      
      const analyzeQRCode = () => {
        if (video.readyState === video.HAVE_ENOUGH_DATA) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);
          
          if (code) {
            console.log('QR Code Data:', code.data);
            setQrData(code.data);
          }
        }
        requestAnimationFrame(analyzeQRCode);
      };

      analyzeQRCode();
    }
  }, [selectedOption, videoRef]);

  return (
    <ModalOverlay>
      <ModalContainer>
        {qrData ? (
          <SuccessValidation qrData={qrData} />
        ) : (
          <>
            <TopDiv>
              <FaLessThan style={{ cursor: 'pointer' }} />
              <p>Participantes</p>
              <SlOptionsVertical style={{ cursor: 'pointer' }} />
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
                <PlaceholderDiv>Lista de Participantes</PlaceholderDiv>
              )}
            </CameraDiv>
            <BottomDiv>
              Digitalize o QR Code para fazer o check-in.
            </BottomDiv>
          </>
        )}
      </ModalContainer>
    </ModalOverlay>
  );
}


