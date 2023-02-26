import clsx from "clsx";
import React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx("p-2", "rounded-lg", className)}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
