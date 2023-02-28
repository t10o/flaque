import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

import { BlogContent, BlogContentSkeleton } from "@/features/blog";
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

  if (error) return <p>Error :(</p>;

  return (
    <>{loading ? <BlogContentSkeleton /> : <BlogContent blog={data!} />}</>
  );
};

export default BlogContentPage;
