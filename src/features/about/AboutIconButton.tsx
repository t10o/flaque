import { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface Props {
  color: string;
  href: string;
  icon: IconDefinition;
}

export const AboutIconButton = ({ color, href, icon }: Props) => {
  return (
    <a href={href} target="_blank">
      <div
        className={clsx(
          "relative",
          "shadow-up",
          "w-12",
          "h-12",
          "mb-2",
          "mr-2",
          "rounded-full",
          "hover:shadow-down",
          "hover:cursor-pointer"
        )}
      >
        <FontAwesomeIcon
          className={clsx(
            "absolute",
            "top-1/2",
            "left-1/2",
            "-translate-x-1/2",
            "-translate-y-1/2",
            "text-lg"
          )}
          icon={icon}
          color={color}
        />
      </div>
    </a>
  );
};
