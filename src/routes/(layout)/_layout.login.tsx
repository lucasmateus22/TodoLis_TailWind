import Login from '@/pages/login'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/(layout)/_layout/login')({
  beforeLoad: ({ context }) => {
    if(context.auth?.isAuthenticated) {
      throw redirect({to:"/dashboard"})
    }
  },
  component: Login,
})

