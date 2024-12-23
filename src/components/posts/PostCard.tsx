import type { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600">{post.body}</p>
    </div>
  );
}