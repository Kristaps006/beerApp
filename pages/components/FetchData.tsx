import React, { useEffect, useState } from "react";
import { dehydrate, QueryClient, useQuery } from "react-query";
import ky from "ky";

export interface User {
  [x: string]: any;
  name: string;
  email: string;
  address: string;
}

export const fetchingData = () =>
  ky.get(`http://localhost:3000/posts`).json<User>();

export const FetchData = () => {
  const { data, isFetching, isLoading } = useQuery("names", fetchingData, {});
  console.log(data, "data pre");

  console.log({ isFetching, isLoading });

  return (
    <>
      <ul>
        {data?.map(({ id, name }) => (
          <li key={id}>Name: {name}</li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient(); //?Ensures data is not shared between requests */

  await queryClient.prefetchQuery("names", fetchingData);
  return {
    props: {
      dehydrateState: dehydrate(queryClient),
    },
  };
};
