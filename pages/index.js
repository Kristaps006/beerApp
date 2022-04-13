import React from "react";
import { UserForm } from "./components/UserForm";
import { FetchData } from "./components/FetchData";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/user">
        <div>
          <a href="">Users</a>
        </div>
      </Link>
      <h3>Posts information:</h3>
      <UserForm />
      <h3>User information:</h3>
      <FetchData />
    </>
  );
}
