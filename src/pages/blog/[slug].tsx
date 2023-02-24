import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { BlogContent } from "@/features/blog";
import { PostQuery } from "@/gql/graphql";

export default function BlogArticle() {
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
  const slug = router.query.slug;

  const { data, error, loading } = useQuery<PostQuery>(QUERY, {
    variables: { slug },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log(data);

  return (
    <>
      <BlogContent />
    </>
  );
}
