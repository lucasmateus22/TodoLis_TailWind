// routeTree.ts
import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router';
import Login from './pages/login'
import Dashboard from './pages/dashboard';

const rootRoute = createRootRoute({
  component: () => <div><Outlet /></div>,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Login />,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/dashboard',
  component: () => <Dashboard />,
});


const routeTree = rootRoute.addChildren([indexRoute, loginRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
