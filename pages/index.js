import React from "react";
import { UserForm } from "./components/UserForm";
import { FetchData } from "./components/FetchData";

export default function Home() {
  return (
    <>
      <UserForm />
      <FetchData />
    </>
  );
}
