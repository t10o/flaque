import clsx from "clsx";
import Link from "next/link";

interface Props {
  label: string;
}

export const BlogTag = ({ label }: Props): JSX.Element => {
  return (
    <Link
      className={clsx(
        "shadow-up",
        "py-2",
        "px-4",
        "rounded-lg",
        "mr-4",
        "text-primary",
        "text-sm",
        "font-light",
        "hover:shadow-down",
        "hover:cursor-pointer"
      )}
      href={`/blog/${label}`}
    >
      {label}
    </Link>
  );
};

BlogTag.displayName = "BlogTag";
