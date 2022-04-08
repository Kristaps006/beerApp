import React from "react";
import styles from "../../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { Button } from "../features/form/button";
import { Form } from "../features/form/form";
import { Input } from "../features/form/input";
import { useMutation } from "react-query";
import ky from "ky";

export const UserForm = () => {
  const methods = useForm();
  const addUser = useMutation((newData) =>
    ky
      .post("http://localhost:3000/posts", {
        json: newData,
      })
      .json()
  );

  const onSubmit = (data) => {
    addUser.mutate(data);
  };

  return (
    <Form methods={methods} submit={onSubmit} className={styles.form}>
      <Input type={"text"} name={"name"} children={"First name"} />
      <Input type={"text"} name="email" children={"Second name"} />
      <Input type={"text"} name="address" children={"favorite  beer"} />
      <Button type={"submit"} className={styles.button} children="submit" />
    </Form>
  );
};
