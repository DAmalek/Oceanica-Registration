import React from "react";
import { HeaderStyled, Logo } from "./layout";

function Header() {
  return (
    <>
      <HeaderStyled>
        <Logo href="https://www.oceanica.com.br">
          <img
            src="https://www.oceanica.com.br/wp-content/uploads/sites/867/2021/09/logo.png"
            alt="Oceânica - Engenharia Submarina, Navegação e Soluções Offshore"
          />
        </Logo>
      </HeaderStyled>
    </>
  );
}

export default Header;
