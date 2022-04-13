import React from "react";
import styles from "../../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { Button } from "../features/form/button";
import { Form } from "../features/form/form";
import { Input } from "../features/form/input";
import { useMutation, useQueryClient } from "react-query";
import ky from "ky";

export const UserForm = () => {
  const methods = useForm();
  const { reset } = methods;

  const postData = (newData: any) =>
    ky
      .post("http://localhost:3000/posts", {
        json: newData,
      })
      .json();

  const queryClient = useQueryClient();

  //Adding post to db
  const addUser = useMutation(postData, {
    // onSuccess: () => queryClient.invalidateQueries("names"),  //* Makes a newtwork call and updates query newData
    onSuccess: (data: any) => {
      queryClient.setQueriesData("names", (oldData: any) => [...oldData, data]); //*updates query instead of making the network call
    },
  });

  const onSubmit = (data: any) => {
    addUser.mutate(data);
    //reset();
  };

  return (
    <Form methods={methods} submit={onSubmit} className={styles.form}>
      <Input type={"text"} name="name" children={"Name"} />
      <Input type={"text"} name="email" children={"Email"} />
      <Input type={"text"} name="address" children={"Address"} />
      <Button type={"submit"} className={styles.button} children="submit" />
    </Form>
  );
};
