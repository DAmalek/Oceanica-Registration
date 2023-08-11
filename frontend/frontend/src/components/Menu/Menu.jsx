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
import RegistrationForm from "../Forms/RegistrationForm";

function Menu() {
  const [Lselected, setLselected] = useState(true);
  const [Rselected, setRselected] = useState(false);
  const [Dselected, setDselected] = useState(false);

  function Lselect() {
    setLselected(true);
    setRselected(false);
    setDselected(false);
  }
  function Rselect() {
    setLselected(false);
    setRselected(true);
    setDselected(false);
  }
  function Dselect() {
    setLselected(false);
    setRselected(false);
    setDselected(true);
  }

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
          <StyledBtn
            onClick={() => {
              fetchAllRegistration();
              Lselect();
            }}
          >
            Listar
          </StyledBtn>
          <StyledBtn
            onClick={() => {
              Rselect();
            }}
          >
            Registrar
          </StyledBtn>
          <StyledBtn
            onClick={() => {
              Dselect();
            }}
          >
            Deletar
          </StyledBtn>
          <StyledBtn>Procurar</StyledBtn>
        </StyledNav>
        <StyledBody>
          {Lselected ? (
            <StyledContainer>
              <Row
                nome={"nome"}
                email={"email"}
                profissão={"profissão"}
                salario={"salario"}
              />
              {Registrations?.map((value, index) => (
                <Row
                  key={value.id}
                  nome={value.name}
                  email={value.email}
                  profissão={value.profession}
                  salario={value.salary}
                />
              ))}
            </StyledContainer>
          ) : (
            ""
          )}

          {Rselected ? <RegistrationForm /> : ""}
        </StyledBody>
      </StyledMenu>
    </StyledCenter>
  );
}

export default Menu;

// name={name}
// email={email}
// profession={profession}
// salary={salary}
// setName={setName}
// setEmail={setEmail}
// setProfession={setProfession}
// setSalary={setSalary}
