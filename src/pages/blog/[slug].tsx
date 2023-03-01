import { gql } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";

import { ContentLayout } from "@/components/layouts";
import { BlogContent } from "@/features/blog";
import { ContentsQuery, PostQuery } from "@/gql/graphql";
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

      <ContentLayout>
        <BlogContent blog={data} />
      </ContentLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const QUERY = gql`
    query Contents {
      posts {
        slug
      }
    }
  `;

  const client = initializeApollo();

  const { data } = await client.query<ContentsQuery>({
    query: QUERY,
  });

  const paths = data.posts.map((post) => {
    return `/blog/${post.slug}`;
  });

  return { fallback: false, paths };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params!.slug;

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

  const client = initializeApollo();

  const { data } = await client.query<PostQuery>({
    query: QUERY,
    variables: { slug },
  });

  return {
    props: { data },
    revalidate: 60,
  };
};

export default BlogContentPage;
