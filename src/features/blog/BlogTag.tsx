import clsx from "clsx";

interface Props {
  label: string;
}

export const BlogTag = ({ label }: Props): JSX.Element => {
  return (
    <div
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
    >
      {label}
    </div>
  );
};

BlogTag.displayName = "BlogTag";