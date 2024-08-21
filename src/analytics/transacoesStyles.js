import styled from "styled-components";

export const Section = styled.section`
  background-color: #f3f8fc;
  width: 100%;
  height: auto;
`;

export const CenterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  min-width: 60%;
  max-width: 60%;
  height: 100vh;
  flex-direction: column;
`;

export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #11455d;
  font-size: 32px;
`;

export const Input = styled.input`
  width: 90%;
  height: 90%;
  border: none;
  text-indent: 1em;
`;

export const SearchContainer = styled.div`
  background-color: #fff;
  width: 100%;
  height: 50px;
  margin-top: 2em;
  border-radius: 10px;
  display: flex;
  align-items: center;
`;

export const PlanilhaContainer = styled.div`
  width: 100%;
  background-color: #fff;
  height: 100%;
  margin-top: 1em;
  margin-bottom: 3em;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PlanilhaWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 3px solid #f1f1f1;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

export const PlanilhaItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  gap: 0; // Remove espaço extra entre colunas
  margin: 0 1em;
  border-bottom: 1px solid #f1f1f1;
`;

export const Items = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  color: #4b4b4b;
  font-size: 14px;
  text-align: center;
  padding: 1em;
  box-sizing: border-box;
  flex: 1;
  white-space: normal; // Permite que o texto quebre em várias linhas
  overflow: hidden;
  text-overflow: ellipsis;
  border-right: 1px solid #f1f1f1; // Adiciona linha vertical à direita de cada item
  &:last-child {
    border-right: none; // Remove a borda da última coluna
  }
`;

export const EventName = styled.p`
  margin-top: 2em;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #ef4118;
  font-size: 19px;
`;
