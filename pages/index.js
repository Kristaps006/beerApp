import React from "react";
import { UserForm } from "./components/UserForm";
import { FetchData } from "./components/FetchData";
import Link from "next/link";
import { useRouter } from "next/router";


export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="links">
      <Link href="/">
        <div className="header">
          <a className={router.pathname == "/" ? "active" : ""}>Home</a>
        </div>
      </Link>
      <Link href="/user">
        <div className="header">
          <a className={router.pathname == "/user" ? "active" : ""}>Users</a>
        </div>
      </Link>
      </div>
      <h3 style={{textAlign: "center", margin: "20px"}}>Posts information:</h3>
      <UserForm />
      <h3 style={{textAlign: "center", margin: "20px"}} >User information:</h3>
      <FetchData />
    </>
  );
}
