import clsx from "clsx";

import { Button, Input } from "@/components/elements";

export default function Contact() {
  return (
    <div className={clsx("px-4", "max-w-7xl", "mx-auto")}>
      <div>Name</div>

      <Input
        className={clsx("w-full", "mb-12", "shadow-down", "focus:outline-0")}
      />

      <div>Email</div>
      <Input
        className={clsx("w-full", "mb-12", "shadow-down", "focus:outline-0")}
      />

      <Button
        className={clsx(
          "w-full",
          "text-white",
          "text-lg",
          "bg-gradient-to-r",
          "from-purple-500",
          "to-pink-500"
        )}
        label="Submit"
        onClick={() => console.log("click")}
      />
    </div>
  );
}
