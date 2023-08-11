import React, { useState } from "react";
import {
  StyledBody,
  StyledBtn,
  StyledCenter,
  StyledContainer,
  StyledMenu,
  StyledNav,
} from "./layout";
import Row from "./Row";

const [Registrations, setRegistrations] = useState([]);

function Menu() {
  return (
    <StyledCenter>
      <StyledMenu>
        <StyledNav>
          <StyledBtn>Listar</StyledBtn>
          <StyledBtn>Registrar</StyledBtn>
          <StyledBtn>Deletar</StyledBtn>
          <StyledBtn>Procurar</StyledBtn>
        </StyledNav>
        <StyledBody>
          <StyledContainer>
            <Row
              nome={"nome"}
              email={"email"}
              profissão={"profissão"}
              salario={"salario"}
            />
          </StyledContainer>
        </StyledBody>
      </StyledMenu>
    </StyledCenter>
  );
}

export default Menu;
