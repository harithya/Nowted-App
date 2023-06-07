import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}
const Button: React.FC<Props> = ({
  children,
  className,
  isLoading,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "btn btn-info w-full text-lg capitalize mt-5",
        className,
        {
          loading: isLoading,
        }
      )}
      disabled={isLoading}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
