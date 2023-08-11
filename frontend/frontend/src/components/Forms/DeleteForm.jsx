import React, { useState } from "react";
import { Button, Form, Input } from "./layout";
import { destroyRegistration } from "../../services/api";
function DeleteForm() {
  const [Email, setEmail] = useState("");

  async function deleteRequest(event) {
    event.preventDefault();
    const body = {
      Email,
    };

    try {
      await destroyRegistration(body);
    } catch (error) {
      console.log(error);
      alert(error.response.data);
    }
  }
  return (
    <Form onSubmit={deleteRequest}>
      <Input
        name="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="  email"
        type="text"
        autoComplete="off"
      ></Input>
      <Button type="submit">Deletar</Button>
    </Form>
  );
}

export default DeleteForm;
