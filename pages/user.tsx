import Link from "next/link";
import React from "react";
import { FetchData } from "./components/FetchData";
import { useRouter } from "next/router";

const User = () => {
  const router = useRouter();

  return (
    <>
      <div className="links">
        <Link href="/">
          <div className="header" >
            <a className={router.pathname == "/" ? "active" : ""}>Home</a>
          </div>
        </Link>
        <Link href="/user">
          <div className="header" >
            <a className={router.pathname == "/user" ? "active" : ""}>Users</a>
          </div>
        </Link>
      </div>
      <FetchData />
    </>
  );
};
export default User;
