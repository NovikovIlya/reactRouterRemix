import type { User } from "@/types";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Телефон: {user.phone}</p>
      <p className="text-gray-600">Сайт: {user.website}</p>
    </div>
  );
}