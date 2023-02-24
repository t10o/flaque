import { gql, useQuery } from "@apollo/client";

import { BlogCard, BlogList } from "@/features/blog";
import { PostsQuery } from "@/gql/graphql";

export default function Blog() {
  const QUERY = gql`
    query Posts {
      posts {
        id
        title
        slug
        emoji
        tags
        date
      }
    }
  `;

  const { data, error, loading } = useQuery<PostsQuery>(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <BlogList>
        {data!.posts.map(({ id, title, date, emoji, slug, tags }) => {
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
}
