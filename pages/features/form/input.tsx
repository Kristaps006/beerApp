import React from "react";
import { useForm } from "react-hook-form";
import { useInput } from "./hooks/useInput";

export const Input = ({ name, children, type }) => {
  const { register, onBlur, errorText } = useInput(name);

  return (
    <>
      <label htmlFor="name">{children}</label>
      <input type={type} {...register(name)} name={name} onBlur={onBlur} />
    </>
  );
};
