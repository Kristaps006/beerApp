import React from "react";
import styles from "../../styles/Home.module.css";
import { useForm } from "react-hook-form";
import { Button } from "../features/form/button";
import { Form } from "../features/form/form";
import { Input } from "../features/form/input";

export const UserForm = () => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Form methods={methods} submit={onSubmit} className={styles.form}>
      <Input type={"text"} name={"firstName"} children={"First name"} />
      <Input type={"text"} name="secondName" children={"Second name"} />
      <Input type={"text"} name="beerName" children={"favorite  beer"} />
      <Button type={"submit"} className={styles.button} children="submit" />
    </Form>
  );
};
