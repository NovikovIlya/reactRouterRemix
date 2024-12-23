import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useLoaderData, redirect } from "react-router-dom";

// Типы данных
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        loader: postsLoader,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dashboard",
        loader: usersLoader,
        element: <Dashboard />,
      },
      {
        path: "lazy",
        lazy: () => import("./lazy"),
      },
      {
        path: "redirect",
        loader: redirectLoader,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
];

function Layout() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">React Router с реальным API</h1>

      <nav className="mb-8">
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">Посты</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500 hover:text-blue-700">О нас</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-blue-500 hover:text-blue-700">Пользователи</Link>
          </li>
          <li>
            <Link to="/lazy" className="text-blue-500 hover:text-blue-700">Ленивая загрузка</Link>
          </li>
          <li>
            <Link to="/redirect" className="text-blue-500 hover:text-blue-700">Редирект</Link>
          </li>
        </ul>
      </nav>

      <hr className="mb-8" />

      <Outlet />
    </div>
  );
}

// Загрузчик для постов
async function postsLoader(): Promise<{ posts: Post[] }> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  const posts = await response.json();
  return { posts };
}

function Home() {
  const { posts } = useLoaderData() as { posts: Post[] };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Последние посты</h2>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">О нас</h2>
      <p className="text-gray-600">
        Это демонстрационное приложение, показывающее работу с React Router и реальным API.
      </p>
    </div>
  );
}

// Загрузчик для пользователей
async function usersLoader(): Promise<{ users: User[] }> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return { users };
}

function Dashboard() {
  const { users } = useLoaderData() as { users: User[] };
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Список пользователей</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{user.name}</h3>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Телефон: {user.phone}</p>
            <p className="text-gray-600">Сайт: {user.website}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

async function redirectLoader() {
  return redirect("/");
}

function NoMatch() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Страница не найдена!</h2>
      <p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Вернуться на главную
        </Link>
      </p>
    </div>
  );
}

export default function App() {
  return <Layout />;
}