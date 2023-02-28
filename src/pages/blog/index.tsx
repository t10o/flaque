import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import { NextSeo } from "next-seo";

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

  if (error) return <p>Error :(</p>;

  return (
    <>
      <NextSeo
        title="Blog | flaque"
        description="flaqueのブログ一覧ページ"
        openGraph={{
          title: "Blog | flaque",
          description: "flaqueのブログ一覧ページ",
          url: "https://flaque.t10o.one/blog",
        }}
      />

      <Blog blogList={data!} isLoading={loading} />
    </>
  );
};

export default BlogPage;
