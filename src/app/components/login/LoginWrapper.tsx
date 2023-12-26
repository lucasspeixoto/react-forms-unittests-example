"use client";

import React from "react";

import LoginForm from "./LoginForm";
import { LoginFormData } from "@/app/schemas/login-schema";

const LoginWrapper: React.FC = () => {
  const singInWithEmailAndPasswordHandler = async (data: LoginFormData) => {
    console.log(data);
  };

  return (
    <LoginForm
      singInWithEmailAndPasswordHandler={singInWithEmailAndPasswordHandler}
    />
  );
};

export default LoginWrapper;
