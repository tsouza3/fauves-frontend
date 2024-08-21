import React, { useEffect, useState } from "react";
import {
  Container,
  LocationInput,
  Option,
  Input,
} from "./searchRectangleStyles";
import location from "../assets/icons/location.svg";
import { getDistritos } from "../services/ibgeService";
export default function SearchRectangle() {
  const [distritos, setDistritos] = useState([]);

  useEffect(() => {
    const fetchDistritos = async () => {
      const data = await getDistritos();
      setDistritos(data);
    };

    fetchDistritos();
  }, []);

  return (
    <Container>
      <LocationInput>
        {distritos.map((distrito) => (
          <Option key={distrito.id} value={distrito.id}>
            {distrito.nome}
          </Option>
        ))}
      </LocationInput>
      <Input placeholder="Encontre seu evento" type="text" />
    </Container>
  );
}
