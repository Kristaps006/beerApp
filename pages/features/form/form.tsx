import React from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";

export const Form = ({ children, submit, methods, className }) => {
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(submit)}>
        {children}
      </form>
    </FormProvider>
  );
};
