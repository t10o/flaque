import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

import { Button, Input } from "@/components/elements";
import { Textarea } from "@/components/elements/Textarea";

export default function Contact() {
  const form = useRef(null);

  const schema = z.object({
    name: z.string().min(1, { message: "Name：1文字以上入力してください。" }),
    email: z
      .string()
      .email({ message: "Email：正しいメールアドレスを入力してください。" })
      .min(1),
    message: z
      .string()
      .min(1, { message: "Message：1文字以上入力してください。" }),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    errors.name && toast.error(errors.name.message as string);
    errors.email && toast.error(errors.email.message as string);
    errors.message && toast.error(errors.message.message as string);
  }, [errors]);

  const onSubmit = () => {
    if (!form || !form.current) {
      toast.error("フォームが取得できません。");

      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_MAIL_SERVICE_ID!,
        process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_MAIL_PUBLIC_KEY!
      )
      .then(
        () => {
          toast.success("メッセージを送信しました。");
          reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div className={clsx("px-4", "max-w-7xl", "mx-auto")}>
      <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          className={clsx(
            "w-full",
            "mb-12",
            "shadow-down",
            "focus:outline-0",
            "border-0"
          )}
          {...register("name", { required: true })}
        />

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="email"
          className={clsx(
            "w-full",
            "mb-12",
            "shadow-down",
            "focus:outline-0",
            "border-0"
          )}
          {...register("email", { required: true })}
        />

        <label htmlFor="message">Message</label>
        <Textarea
          id="message"
          className={clsx(
            "w-full",
            "mb-12",
            "shadow-down",
            "focus:outline-0",
            "border-0",
            "h-80"
          )}
          {...register("message", { required: true })}
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
          type="submit"
          label="Submit"
        />
      </form>
    </div>
  );
}
