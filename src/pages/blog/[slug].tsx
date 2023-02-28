import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { BlogContent } from "@/features/blog";
import { PostQuery } from "@/gql/graphql";
import { initializeApollo } from "@/lib/apolloClient";

interface Props {
  data: PostQuery;
}

export const BlogContentPage: NextPage<Props> = ({ data }) => {
  const meta = {
    title: "Content | flaque",
    description: "flaqueのブログ",
    slag: "",
  };

  if (data && data.post) {
    meta.title = `${data.post.title} | flaque`;
    meta.description = data.post.description;
    meta.slag = data.post.slug;
  }

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description,
          url: `https://flaque.t10o.one/blog/${meta.slag}}`,
        }}
      />

      <BlogContent blog={data} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const QUERY = gql`
    query Post($slug: String) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        description
        tags
        date
        emoji
        content {
          markdown
        }
      }
    }
  `;

  const slug = query.slug;

  const client = initializeApollo();

  const { data } = await client.query<PostQuery>({
    query: QUERY,
    variables: { slug },
  });

  return {
    props: { data },
  };
};

export default BlogContentPage;
