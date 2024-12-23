import { getUsers } from "@/lib/api";
import { UserCard } from "@/components/users/UserCard";

// Серверный компонент
export default async function UsersPage() {
  const users = await getUsers();
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Список пользователей</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}