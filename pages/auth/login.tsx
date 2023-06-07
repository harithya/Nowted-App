/* eslint-disable @next/next/no-img-element */
import AuthLayout from "@/components/Layout/AuthLayout";
import MainLayout from "@/components/Layout/MainLayout";
import Button from "@/components/UI/Button";
import Input from "@/components/UI/Form/Input";
import { useAuthStore } from "@/store/authStore";
import http from "@/utils/http";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import toast from "react-simple-toasts";

interface LoginForm {
  email: string;
  password: string;
}
const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();

  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      try {
        const req = await http.post("auth/login", data);
        return Promise.resolve(req.data);
      } catch (error: any) {
        return Promise.reject(error.response.data);
      }
    },
    onSuccess: (res) => {
      login(res.user.id, res.user.name);
      localStorage.setItem("token", res.token);
      router.replace("/app/home");
    },
    onError: (error: any) => {
      toast(error.message);
    },
  });
  const onSubmit = (data: LoginForm) => mutation.mutateAsync(data);

  return (
    <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        placeholder="example@gamil.com"
        {...register("email")}
      />
      <div className="form-control">
        <div className="flex justify-between">
          <label className="font-semibold">Password</label>
          <label className="font-medium">Forget Password ?</label>
        </div>
        <input
          className="input input-bordered w-full"
          placeholder="****"
          type="password"
          {...register("password")}
        />
      </div>
      <div className="space-y-5">
        <Button
          className="btn btn-info w-full text-lg capitalize"
          isLoading={mutation.isLoading}
        >
          Sign In
        </Button>
        <div className="flex justify-center items-center space-x-3">
          <label className="text-gray-400">Dont have an account yet?</label>
          <Link href="/auth/register" className="font-bold">
            Register now
          </Link>
        </div>
      </div>
    </form>
  );
};

Login.getLayout = (page: ReactElement) => (
  <AuthLayout
    title="Masuk ke akun kamu"
    subtitle="Remember everything and tackle any project with your notes, tasks, and schedule all in one place."
  >
    {page}
  </AuthLayout>
);

export default Login;
