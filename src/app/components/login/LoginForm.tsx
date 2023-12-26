"use client";

import { LoginFormData, loginSchema } from "@/app/schemas/login-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

type LoginFormProps = {
  singInWithEmailAndPasswordHandler: (data: LoginFormData) => void;
};

const LoginForm: React.FC<LoginFormProps> = ({
  singInWithEmailAndPasswordHandler,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <div className="w-[80%] sm:w-[50%] md:w-[35%] lg:w-[25%]">
      <form onSubmit={handleSubmit(singInWithEmailAndPasswordHandler)}>
        <div className="mb-3 gap-2">
          <div className="relative">
            <label
              htmlFor="email"
              data-testid="email"
              className="mb-1 block font-medium text-white"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              aria-label="email"
              {...register("email")}
              className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <>
            {errors.email && (
              <span
                role="alert"
                data-testid="email-error"
                className="text-sm text-meta-1 dark:text-meta-7"
              >
                {errors.email.message}
              </span>
            )}
          </>
        </div>

        <div className="mb-3 gap-2">
          <div className="relative">
            <label
              htmlFor="password"
              data-testid="password"
              className="mb-1 block font-medium text-white"
            >
              Senha
            </label>
            <input
              id="password"
              type="password"
              aria-label="password"
              {...register("password")}
              className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>

          <>
            {errors.password && (
              <span
                role="alert"
                data-testid="password-error"
                className="text-sm text-meta-1 dark:text-meta-7"
              >
                {errors.password.message}
              </span>
            )}
          </>
        </div>

        <div className="mb-4 mt-5 items-center flex justify-center w-full">
          <button
            data-testid="login-button"
            type="submit"
            className="flex w-auto px-4 cursor-pointer items-center justify-center gap-3.5 rounded-lg border border-primary bg-primary p-2 text-white transition hover:bg-opacity-80 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
