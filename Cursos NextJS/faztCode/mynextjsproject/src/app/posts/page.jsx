// import PostCard from "../../components/PostCard";
import PostCard from "@/src/components/PostCard";

async function loadPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

    // await new Promise((resolve) => setTimeout(resolve, 3000));

  return data;
}

// React server component
export default async function PostPages() {
  const posts = await loadPosts();

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
