import React from "react";
import { Button, Form, Input } from "./layout";
import { useState } from "react";

// name,
//   email,
//   profession,
//   salary,
//   setName,
//   setEmail,
//   setProfession,
//   setSalary

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profession, setProfession] = useState("");
  const [salary, setSalary] = useState("");

  function registrationRequest(event) {
    event.preventDefault();
  }
  return (
    <Form onSubmit={registrationRequest}>
      <Input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="  name"
        type="text"
        autoComplete="off"
      ></Input>
      <Input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="  email"
        type="text"
        autoComplete="off"
      ></Input>
      <Input
        name="profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        placeholder="  profession"
        type="text"
        autoComplete="off"
      ></Input>
      <Input
        name="salary"
        value={salary}
        onChange={(e) => setSalary(e.target.value)}
        placeholder="  salary"
        type="number"
        autoComplete="off"
      ></Input>
      <Button>Registrar</Button>
    </Form>
  );
}

export default RegistrationForm;
