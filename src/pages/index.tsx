import { gql, useQuery } from "@apollo/client";

import { PostsQuery } from "@/gql/graphql";

export default function Home() {
  const QUERY = gql`
    query Posts {
      posts {
        title
        slug
        tags
        date
        content {
          html
          markdown
          raw
          text
        }
      }
    }
  `;

  const { data, error, loading } = useQuery<PostsQuery>(QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <>
      {data!.posts.map(({ title, content, date }) => {
        return (
          <>
            <div>{title}</div>
            <div>{date}</div>
            <div>{content.html}</div>
          </>
        );
      })}
    </>
  );
}
