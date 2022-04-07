import React from "react";
import { useQuery } from "react-query";


export const FetchData = () => {

    const fetchingData = fetch('http://localhost:3000/posts').then((res) =>
    res.json())

    // Hvad står 'posts' for? It's the name/key of the query
    const { isSuccess, isLoading, error, data } = useQuery('posts', () => fetchingData
    );
  
    //When we waiting/fetching for data
    if (isLoading) return 'Loading...';
  
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
    )
}
  