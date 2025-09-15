import Dashboard from '@/pages/dashboard'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(layout)/_layout/dashboard')({
  beforeLoad: ({ context }) => {
    if (!context.auth?.isAuthenticated) {
      throw redirect({ to: '/login' })
    }
  },
  component: Dashboard,
})
