import { Link } from "react-router-dom";

export function Navigation() {
  return (
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
  );
}