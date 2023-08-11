import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
`;

export const Button = styled.button`
  width: 308px;
  height: 30px;
  display: flex;
  margin-top: 3px;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  border-radius: 5px;
`;

export const Input = styled.input`
  margin: 3px 0;
  height: 33px;
  width: 300px;
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  ::placeholder {
    font-size: 23px;
  }
  :disabled {
    background-color: #f2f2f2;
  }
  :-webkit-autofill {
  }
`;
