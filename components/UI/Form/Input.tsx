import React, { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: React.ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, ...props },
  ref
) => {
  return (
    <div className="form-control">
      <label className="font-semibold">{label}</label>
      <input ref={ref} className="input input-bordered w-full" {...props} />
    </div>
  );
};

export default forwardRef(Input);
