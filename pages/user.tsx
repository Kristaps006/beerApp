import Link from "next/link";
import React from "react";
import { FetchData } from "./components/FetchData";

const User = () => {
  return (
    <>
      <Link href="/">
        <div>
          <a href="">Home</a>
        </div>
      </Link>
      <FetchData />;
    </>
  );
};
export default User;
