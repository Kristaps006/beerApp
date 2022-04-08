import React from "react";
import { UserForm } from "./components/UserForm";
import { FetchData } from "./components/FetchData";

export default function Home() {
  return (
    <>
      <h3>Posts information:</h3>
      <UserForm />
      <h3>User information:</h3>
      <FetchData />
    </>
  );
}
