import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { BlogContent } from "@/features/blog";
import { PostQuery } from "@/gql/graphql";

export const BlogContentPage = () => {
  const QUERY = gql`
    query Post($slug: String) {
      post(where: { slug: $slug }) {
        id
        title
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>Empty :(</p>;

  return (
    <>
      <BlogContent blog={data} />
    </>
  );
};

export default BlogContentPage;
