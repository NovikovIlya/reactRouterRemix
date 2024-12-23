import { Link } from "react-router-dom";

export default function NotFound() {
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