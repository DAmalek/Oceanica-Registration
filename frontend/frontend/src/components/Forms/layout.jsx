import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
  font-size: 18px;
  button {
    width: 300px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 21px;
  }
`;

export const Input = styled.input`
  background-color: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;

  input::placeholder {
    font-size: 21px;
  }
  input:disabled {
    background-color: #f2f2f2;
  }
  input:-webkit-autofill {
  }
`;
