import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import "./index.css";
import { AuthProvider, useAuth } from "@/features/services/authProvider/authProvider";

// Wrapper que injeta o contexto de auth no router
function AppRouter() {
  const auth = useAuth();

  const router = React.useMemo(
    () =>
      createRouter({
        routeTree,
        context: { auth },
      }),
    [auth]
  );

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </React.StrictMode>
);
