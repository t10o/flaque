import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import twemoji from "twemoji";

interface Props {
  title: string;
  date: string;
  emoji: string;
  slug: string;
  tags: string[];
}

export const BlogCard = ({
  title,
  date,
  emoji,
  slug,
  tags,
}: Props): JSX.Element => {
  const codePoint = twemoji.convert.toCodePoint(emoji);
  const url = `https://twemoji.maxcdn.com/v/latest/svg/${
    codePoint.split("-")[0]
  }.svg`;

  return (
    <Link
      className={clsx("flex", "p-4", "rounded-lg", "shadow-up", "col-span-1")}
      href={`blog/${slug}`}
    >
      <div
        className={clsx(
          "mr-8",
          "min-w-[72px]",
          "h-full",
          "relative",
          "flex",
          "justify-center",
          "items-center"
        )}
      >
        <Image src={url} alt={emoji} fill />
      </div>

      <div
        className={clsx("flex", "flex-col", "justify-end", "overflow-hidden")}
      >
        <div className={clsx("text-lg", "font-semibold", "mb-auto")}>
          {title}
        </div>

        <div>{date}</div>

        <div className={clsx("flex", "items-center", "mt-2")}>
          {tags.map((tag) => {
            return (
              <div className={clsx("mr-2")} key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
};

BlogCard.displayName = "BlogCard";
