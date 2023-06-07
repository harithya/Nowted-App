import Input from "@/components/UI/Form/Input";
import AuthLayout from "@/components/Layout/AuthLayout";
import http from "@/utils/http";
import React, { ReactElement } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import toast from "react-simple-toasts";
import Button from "@/components/UI/Button";
import { useRouter } from "next/router";
import Link from "next/link";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}
const Register = () => {
  const { register, handleSubmit, reset } = useForm<RegisterForm>();

  const router = useRouter();
  const mutation = useMutation({
    mutationFn: async (data: RegisterForm) => {
      try {
        const req = await http.post("auth/register", data);
        return Promise.resolve(req.data);
      } catch (error: any) {
        return Promise.reject(error.response.data);
      }
    },
    onError: (error: any) => {
      toast(error.message);
    },
    onSuccess: (res) => {
      reset();
      router.replace("/auth/login");
      toast(res.message);
    },
  });
  const onSubmit = async (data: RegisterForm) => mutation.mutateAsync(data);

  return (
    <form className="mt-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Nama Lengkap"
        placeholder="Jhon Doe"
        {...register("name")}
      />
      <Input
        label="Email"
        placeholder="example@email.com"
        {...register("email")}
      />
      <Input
        label="Password"
        type="password"
        placeholder="****"
        {...register("password")}
      />
      <div className="space-y-5">
        <Button
          className={`btn btn-info w-full text-lg capitalize mt-5`}
          isLoading={mutation.isLoading}
        >
          Register
        </Button>
      </div>
      <div className="flex justify-center items-center space-x-3">
        <label className="text-gray-400">Already have an account?</label>
        <Link href="/auth/login" className="font-bold">
          Login now
        </Link>
      </div>
    </form>
  );
};

Register.getLayout = (page: ReactElement) => {
  return (
    <AuthLayout
      title="Bikin akun baru"
      subtitle="Nggak susah kok, kamu cuma tinggal masukin beberapa data aja terus langsung jadi deh!"
    >
      {page}
    </AuthLayout>
  );
};

export default Register;
