import { gql } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";

import { Blog } from "@/features/blog";
import { PostsQuery } from "@/gql/graphql";
import { initializeApollo } from "@/lib/apolloClient";

interface Props {
  data: PostsQuery;
}

export const Home: NextPage<Props> = ({ data }) => {
  return <Blog blogList={data} />;
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

export default Home;
