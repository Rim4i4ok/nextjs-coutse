import { useRouter } from "next/router";

function BlogPostPage() {
  const router = useRouter();

  const { slug } = router.query;

  return (
    <div>
      <h1>The blog post:</h1>
      <div>{slug && slug.map((item) => <div key={item}>{item}</div>)}</div>
    </div>
  );
}

export default BlogPostPage;
