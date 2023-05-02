import { gql } from "@apollo/client";
import { GetStaticProps, NextPage } from "next";

import { ContentLayout } from "@/components/layouts";
import { Blog } from "@/features/blog";
import { FilteredPostsQuery, TagsQuery } from "@/gql/graphql";
import { initializeApollo } from "@/lib/apolloClient";

interface Props {
  data: FilteredPostsQuery;
  tag: string;
}

export const FilteredBlogPage: NextPage<Props> = ({ data, tag }) => {
  return (
    <>
      <ContentLayout pageTitle={`${tag} の記事`}>
        <Blog blogList={data} />
      </ContentLayout>
    </>
  );
};

export const getStaticPaths = async () => {
  const QUERY = gql`
    query Tags {
      posts {
        tags
      }
    }
  `;

  const client = initializeApollo();

  const { data } = await client.query<TagsQuery>({
    query: QUERY,
  });

  const allTags = data.posts.map((post) => {
    return post.tags;
  });

  const tags = Array.from(new Set(allTags.flat(2)));

  const paths = tags.map((tag) => {
    return `/blog/${tag}`;
  });

  return { fallback: false, paths };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const tag = params!.tag as string;

  const QUERY = gql`
    query FilteredPosts($tag: [Tags!]) {
      posts(where: { tags_contains_all: $tag }) {
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

  const { data } = await client.query<FilteredPostsQuery>({
    query: QUERY,
    variables: { tag: [tag] },
  });

  return {
    props: { data, tag },
    revalidate: 60,
  };
};

export default FilteredBlogPage;
