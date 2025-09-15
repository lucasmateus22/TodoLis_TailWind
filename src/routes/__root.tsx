import { AuthProvider, useAuth } from '@/features/services/authProvider/authProvider';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

// 1. Defina o tipo do contexto para que o TypeScript saiba o que esperar
interface MyRouterContext {
  auth: ReturnType<typeof useAuth>;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  // 2. A função do componente agora recebe o `auth` diretamente
  component: () => (
    // O AuthProvider envolve a aplicação inteira
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  ),
});