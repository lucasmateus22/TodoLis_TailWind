import AppLayout from '@/components/myComponents/appLayout'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(layout)/_layout')({
  component: () => (
    <AppLayout>
      <Outlet/>
    </AppLayout>
  ),
})
