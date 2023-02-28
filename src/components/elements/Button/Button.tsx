import clsx from "clsx";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends Props {
  label: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx("py-2", "px-4", "rounded-lg", "text-center", className)}
        {...props}
      >
        {props.label}
      </button>
    );
  }
);

Button.displayName = "Button";
