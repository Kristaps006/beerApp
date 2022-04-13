import React, { useEffect, useState } from "react";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import ky from "ky";

export interface User {
  [x: string]: any;
  name: string;
  email: string;
  address: string;
}

export const fetchingData = () =>
  ky.get(`http://localhost:3000/posts`).json<User>();

export const deleteData = (id: any) =>
  ky.delete(`http://localhost:3000/posts/${id}`).json<User>();

export const FetchData = () => {
  const { data, isFetching, isLoading } = useQuery("names", fetchingData, {});

  const queryClient = useQueryClient();

  const deleteId = useMutation(deleteData, {
    //onSuccess: () => queryClient.invalidateQueries("names"),

    onMutate: (data: any) => {
      const prevUser = queryClient.getQueryData("name");
      console.log(prevUser, "user");

      // queryClient.setQueriesData("names", prevUser);
      console.log(data, "prev");
    },
  });

  return (
    <>
      <ul>
        {data?.map(({ id, name, email, address }) => (
          <>
            <li key={id} style={{ marginTop: "20px" }}>
              Name: {name}
            </li>
            <li>Email: {email}</li>
            <li>Address: {address}</li>
            <button onClick={() => deleteId.mutate(id)}>Delete</button>
          </>
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
