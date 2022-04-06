import React from "react";
import { useController, useFormContext } from "react-hook-form";

export const useInput = (name) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorText = errors.name;
  const {
    field: { onBlur },
  } = useController({ name });

  return { errorText, onBlur, register };
};
