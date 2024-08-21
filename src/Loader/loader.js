import React from "react";
import { SpinnerContainer, SpinnerBlade } from "./loaderStyles";

const Loader = ({ className }) => (
  <SpinnerContainer className={className}>
    {[...Array(12)].map((_, index) => (
      <SpinnerBlade key={index} />
    ))}
  </SpinnerContainer>
);

export default Loader;
