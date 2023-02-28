import { BlogCard } from "@/features/blog/BlogCard";
import { BlogList } from "@/features/blog/BlogList";
import { PostsQuery } from "@/gql/graphql";

interface Props {
  blogList: PostsQuery;
}

export const Blog = ({ blogList }: Props): JSX.Element => {
  return (
    <>
      <BlogList>
        {blogList.posts.map(({ id, title, date, emoji, slug, tags }) => {
          return (
            <>
              <BlogCard
                key={id}
                title={title}
                slug={slug}
                date={date}
                emoji={emoji}
                tags={tags}
              />
            </>
          );
        })}
      </BlogList>
    </>
  );
};

Blog.displayName = "Blog";
