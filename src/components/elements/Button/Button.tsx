import clsx from "clsx";

interface Props {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {
  return (
    <button
      className={clsx(
        "w-full",
        "rounded-lg",
        "px-4",
        "py-2",
        "text-center",
        "text-white",
        "text-lg",
        "bg-gradient-to-r",
        "from-purple-500",
        "to-pink-500"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.displayName = "Button";
