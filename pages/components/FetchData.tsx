import React, { useState } from "react";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";
import ky from "ky";
import { UpdateForm } from "./UpdateData";

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
  const [showUpdate, setShowUpdate] = useState(false);
  const [selectItem, setSelectedItem] = useState();
  const onSelectedUser = (id) => {
    setSelectedItem(id);
    setShowUpdate(showUpdate => !showUpdate);
  }

  //fetching profile
  const { data, isFetching, isLoading } = useQuery("names", fetchingData, {});

  const queryClient = useQueryClient();

  //deleting profile
  const deleteId = useMutation(deleteData, {
    onMutate: async (data) => {
      await queryClient.cancelQueries("names"); //*Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      const prevValue = queryClient.getQueryData("names"); //* save previous value to return if mutations throws error
      queryClient.setQueriesData("names", (old: any) => [...old, data]);
      return prevValue;
    },
    onSettled: () => queryClient.refetchQueries("names"),
  });

  return (
    <>
      <ul>
        {data?.map(({ id, name, email, address }) => (
          <div className="test">
            <ul >
              <li key={id} >
                Name: {name}
              </li>
              <li>Email: {email}</li>
              <li>Address: {address}</li>
              <button onClick={() => deleteId.mutate(id)}>Delete</button>
              <button onClick={() => (onSelectedUser(id))}>{showUpdate ? 'Cancel' : 'Update' }</button>
              {showUpdate && selectItem === id ? (
                <UpdateForm id={id}/>
              ): null}
            </ul>
          </div>
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

