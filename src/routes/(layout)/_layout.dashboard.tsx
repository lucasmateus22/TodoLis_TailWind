import Dashboard from '@/routes/dashboard.item/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(layout)/_layout/dashboard')({
  component: () => (
    <Dashboard/>
  ),
})

