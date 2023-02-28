import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";

import { Blog } from "@/features/blog";
import { PostsQuery } from "@/gql/graphql";

export const BlogPage: NextPage = () => {
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
  if (!data) return <p>Empty :(</p>;

  return <Blog blogList={data} />;
};

export default BlogPage;
