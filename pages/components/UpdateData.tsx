import React from "react";
import styles from "../../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { Button } from "../features/form/button";
import { Form } from "../features/form/form";  
import { Input } from "../features/form/input";
import ky from "ky";
import {
  dehydrate,
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";



export interface User {
  [x: string]: any;
  name: string;
  email: string;
  address: string;
}

export const updateDate = ( id: any) => 
  ky.patch(`http://localhost:3000/posts/${id}`).json<User>();
  

export const UpdateForm = (id) => {
    const methods = useForm();
    const { reset } = methods; 
  

    const onSubmit = (data: any) => {
        console.log('data ->', data);
    };
  
  //Updating data
  const update = useMutation(updateDate, {
    
  })

  return (
    <div className="formPlacement">
      <Form methods={methods} submit={onSubmit} className={styles.form}>
        <Input type={"text"} name="name" children={"Name"} />
        <Input type={"text"} name="email" children={"Email"} />
        <Input type={"text"} name="address" children={"Address"} />
        <Button type={"submit"} className={styles.button} children="submit" />
      </Form>
    </div>
  );
};
