import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import { BlogContent, BlogContentSkeleton } from "@/features/blog";
import { PostQuery } from "@/gql/graphql";

export const BlogContentPage = () => {
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

  const router = useRouter();
  const slug = router.query.slug as string;

  const { data, error, loading } = useQuery<PostQuery>(QUERY, {
    variables: { slug },
  });

  if (error) return <p>Error :(</p>;

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

      {loading ? <BlogContentSkeleton /> : <BlogContent blog={data!} />}
    </>
  );
};

export default BlogContentPage;
