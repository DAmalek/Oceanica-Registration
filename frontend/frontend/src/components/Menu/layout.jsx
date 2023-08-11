import styled from "styled-components";

export const StyledCenter = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellow;
`;

export const StyledMenu = styled.div`
  width: 750px;
  height: 700px;
  background-color: #ebe9e9; //fica
  margin-top: 15px;
`;

export const StyledNav = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  background-color: blue;
`;

export const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: crimson;
`;

export const StyledContainer = styled.div`
  width: 650px;
  height: 600px;
  background-color: green;
  margin-top: 15px;
  overflow-y: scroll;
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;

  div {
    justify-content: flex-start;
    width: 60px;
  }
`;

export const StyledBtn = styled.button`
  width: 90px;
`;
