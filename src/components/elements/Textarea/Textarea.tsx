import clsx from "clsx";
import React from "react";

export type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={clsx("p-2", "rounded-lg", className)}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
