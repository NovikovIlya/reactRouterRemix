import { Link, Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";

export function Layout() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">React Router с реальным API</h1>
      <Navigation />
      <hr className="mb-8" />
      <Outlet />
    </div>
  );
}