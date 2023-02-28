import { BlogCard } from "@/features/blog/BlogCard";
import { BlogCardSkeleton } from "@/features/blog/BlogCardSkeleton";
import { BlogList } from "@/features/blog/BlogList";
import { PostsQuery } from "@/gql/graphql";

interface Props {
  blogList: PostsQuery;
  isLoading: boolean;
}

export const Blog = ({ blogList, isLoading }: Props): JSX.Element => {
  const skeletons = [];

  for (let i = 0; i < 10; i++) {
    skeletons.push(<BlogCardSkeleton key={i} />);
  }

  return (
    <>
      <BlogList>
        {isLoading
          ? skeletons
          : blogList.posts.map(({ id, title, date, emoji, slug, tags }) => {
              return (
                <BlogCard
                  key={id}
                  title={title}
                  slug={slug}
                  date={date}
                  emoji={emoji}
                  tags={tags}
                />
              );
            })}
      </BlogList>
    </>
  );
};

Blog.displayName = "Blog";
