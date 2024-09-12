import React, { useState, useEffect } from "react";

import Navbar from "./navbar"; // Navbar padrão
import MobileNavbar from "./mobileNavbar"; // Navbar mobile
import SearchRectangle from "./searchRectangle";
import Rectangle from "./rectangle";
import Carousel from "./carousel";
import GetEvents from "../events/getEvents";
import Banner from "../banner/banner";
import Rodape from "../rodape/rodape";

import { Section, SecondSection, ThreeSection } from "./homeStyles";

function Home() {
  const [totalEvents, setTotalEvents] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Adiciona o listener para o evento de resize da janela
    window.addEventListener("resize", handleResize);

    // Limpa o listener quando o componente é desmontado
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Section>
        {/* Renderiza a Navbar conforme o tamanho da tela */}
        {isMobile ? <MobileNavbar /> : <Navbar backgroundColor="#F3F8FC" />}
        
        <SearchRectangle />
        <Rectangle totalEvents={totalEvents} />
        <Carousel />
      </Section>
      <SecondSection>
        <GetEvents totalEvents={setTotalEvents} />
      </SecondSection>

      <ThreeSection>
        <Banner />
        <Rodape />
      </ThreeSection>
    </>
  );
}

export default Home;
