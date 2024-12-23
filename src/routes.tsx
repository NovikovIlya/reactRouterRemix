import { type RouteObject } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import PostsPage from "@/app/posts/page";
import AboutPage from "@/app/about/page";
import UsersPage from "@/app/users/page";
import NotFound from "@/app/not-found";
import { redirect } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PostsPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "dashboard",
        element: <UsersPage />,
      },
      {
        path: "lazy",
        lazy: () => import("./lazy"),
      },
      {
        path: "redirect",
        loader: () => redirect("/"),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];