import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import ky from "ky";

export const FetchData = () => {
  const fetchingData = ky.get("http://localhost:3000/posts").json();

  console.log(fetchingData);
  const { isSuccess, isLoading, error, data } = useQuery(
    "posts",
    () => fetchingData
  );

  //When we waiting/fetching for data
  if (isLoading) return "Loading...";

  //If there is an error fetching the data
  // if (error) return 'An error has occurred: ' + error.message

  //If fetching the data is success and the data is available
  // if(isSuccess) return 'Wuhu, the data available!'

  return (
    <>
      <ul>
        {data.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
};
