// routeTree.ts
import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router';
import Login from './pages/login'

const rootRoute = createRootRoute({
  component: () => <div><Outlet /></div>,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Outlet />,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <Login />,
});


const routeTree = rootRoute.addChildren([indexRoute, loginRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
