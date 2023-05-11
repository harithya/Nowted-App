import AuthLayout from "@/components/Layout/AuthLayout";
import React, { ReactElement } from "react";

const Register = () => {
  return (
    <div className="mt-10 space-y-5">
      <div className="form-control">
        <label className="font-semibold">Name</label>
        <input className="input input-bordered w-full" placeholder="Jhon Doe" />
      </div>
      <div className="form-control">
        <label className="font-semibold">Email</label>
        <input
          className="input input-bordered w-full"
          placeholder="example@gmail.com"
        />
      </div>
      <div className="form-control">
        <label className="font-semibold">Password</label>
        <input className="input input-bordered w-full" placeholder="****" />
      </div>
      <div className="form-control ">
        <label className="label cursor-pointer flex-row-reverse justify-end">
          <span className="font-medium ml-5">Remember me</span>
          <input
            type="checkbox"
            checked
            className="checkbox checkbox-primary"
          />
        </label>
      </div>
      <div className="space-y-5">
        <button className="btn btn-info w-full text-lg capitalize">
          Sign In
        </button>
      </div>
    </div>
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
