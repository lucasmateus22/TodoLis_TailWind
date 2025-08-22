// src/routes/__root.tsx
import { AuthProvider } from '@/features/services/authProvider/authProvider';
import { createRootRoute, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <>
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    </>
  ),
});