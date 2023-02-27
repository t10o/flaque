import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

import { Button, Input } from "@/components/elements";
import { Textarea } from "@/components/elements/Textarea";
import { graphql } from "@/gql";

interface Message {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const createQuery = graphql(`
    mutation CreateMessage($name: String!, $email: String!, $message: String!) {
      createMessage(data: { name: $name, email: $email, message: $message }) {
        name
        email
        message
      }
    }
  `);

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
  } = useForm<Message>({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    errors.name && toast.error(errors.name.message as string);
    errors.email && toast.error(errors.email.message as string);
    errors.message && toast.error(errors.message.message as string);
  }, [errors]);

  const [createMessage] = useMutation(createQuery, {
    onCompleted() {
      toast.success("メッセージを送信しました。");
      reset();
    },
    onError: (error) => {
      error.graphQLErrors.map((error) => toast.error(error.message));
    },
  });

  const onSubmit = (data: Message) => {
    createMessage({
      variables: {
        name: data.name,
        email: data.email,
        message: data.message,
      },
    });
  };

  return (
    <div className={clsx("px-4", "max-w-7xl", "mx-auto")}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
