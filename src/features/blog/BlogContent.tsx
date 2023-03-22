import clsx from "clsx";
import NextImage from "next/image";
import ReactMarkdown from "react-markdown";
import twemoji from "twemoji";

import { BlogTag } from "@/features/blog/BlogTag";
import { PostQuery } from "@/gql/graphql";

interface Props {
  blog: PostQuery;
}

export const BlogContent = ({ blog }: Props): JSX.Element => {
  const codePoint = twemoji.convert.toCodePoint(blog.post!.emoji);
  const url = `https://twemoji.maxcdn.com/v/latest/svg/${
    codePoint.split("-")[0]
  }.svg`;

  return (
    <div className={clsx("mx-auto", "max-w-7xl", "px-4")}>
      <div
        className={clsx(
          "my-20",
          "min-w-[72px]",
          "min-h-[72px]",
          "relative",
          "flex",
          "justify-center",
          "items-center"
        )}
      >
        <NextImage src={url} alt={blog.post!.emoji} fill />
      </div>

      <div className={clsx("text-3xl", "text-center")}>{blog.post!.title}</div>

      <div className={clsx("mt-10")}>
        <div className={clsx("mb-2")}>{blog.post!.date}</div>

        <div className={clsx("flex", "mb-8")}>
          {blog.post!.tags.map((tag) => {
            return <BlogTag key={tag} label={tag} />;
          })}
        </div>

        <ReactMarkdown>{blog.post!.content.markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

BlogContent.displayName = "BlogContent";
