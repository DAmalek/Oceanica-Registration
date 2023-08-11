import React from "react";
import { StyledRow } from "./layout";

function Row({ nome, email, profissão, salario }) {
  return (
    <StyledRow>
      <div>{nome}</div>
      <div>{email}</div>
      <div>{profissão}</div>
      <div>{salario}</div>
    </StyledRow>
  );
}

export default Row;
