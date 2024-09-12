import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #64CC9D;
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
`;

export const UserIcon = styled.div`
border-radius: 50%;
width: 70px;
height: 70px;
border: 2px solid #f3f8fc;

`

export const Content = styled.div`
   text-align: center;
  color: fff;
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  flex-direction: column;
    align-items: center;


`;

export const ConfirmButton = styled.button`
  border-radius: 10px;
  width: 100%;
  height: 65px;
  color: #fff;
  background-color: #EF4118;
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
export const BackButton = styled.button`
  border-radius: 10px;
  width: 100%;
  height: 65px;
  color: #2C895F;
  background-color: #B6FFDE;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  margin-bottom: 1em;
  font-size: 22px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
width: 30%;
height: 30%;
display: flex;
justify-content: center;
`

export const Container = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 85%;

`

export const Wrapper = styled.div`
background-color: #57B188;
border: 1px solid #fff;
height: 120px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-radius: 10px;

`
export const UserWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 200px;
background-color: transparent;
border: 1px solid #fff;
border-radius: 10px;


`