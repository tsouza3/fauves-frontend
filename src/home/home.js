import React from "react";

import { useState } from "react";

import Navbar from "./navbar";

import SearchRectangle from "./searchRectangle";
import Rectangle from "./rectangle";
import Carousel from "./carousel";
import GetEvents from "../events/getEvents";

import Banner from "../banner/banner";

import Rodape from "../rodape/rodape";

import { Section, SecondSection, ThreeSection, Container } from "./homeStyles";

function Home() {
  const [totalEvents, setTotalEvents] = useState(0);

  return (
    <>
      <Section>
        <Navbar backgroundColor="#F3F8FC" />
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
