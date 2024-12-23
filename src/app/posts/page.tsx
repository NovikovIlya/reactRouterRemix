import { getPosts } from "@/lib/api";
import { PostCard } from "@/components/posts/PostCard";

// Серверный компонент
export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Последние посты</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}