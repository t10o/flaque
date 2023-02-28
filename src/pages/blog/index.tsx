import { gql } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { Blog } from "@/features/blog";
import { PostsQuery } from "@/gql/graphql";
import { initializeApollo } from "@/lib/apolloClient";

interface Props {
  data: PostsQuery;
}

export const BlogPage: NextPage<Props> = (props) => {
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

      <Blog blogList={props.data} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
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

  const client = initializeApollo();

  const { data } = await client.query<PostsQuery>({
    query: QUERY,
  });

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

export default BlogPage;
