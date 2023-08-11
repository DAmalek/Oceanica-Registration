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
import { getAllRegistration } from "../../services/api";

function Menu() {
  const [Registrations, setRegistrations] = useState(null);
  const [Refresh, setRefresh] = useState(false);
  console.log(Registrations);

  async function fetchAllRegistration() {
    try {
      setRefresh(!Refresh);
      const allRegistrations = await getAllRegistration();
      setRegistrations(allRegistrations);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <StyledCenter>
      <StyledMenu>
        <StyledNav>
          <StyledBtn onClick={() => fetchAllRegistration()}>Listar</StyledBtn>
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
