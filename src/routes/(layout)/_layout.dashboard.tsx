import Dashboard from '@/pages/dashboard'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(layout)/_layout/dashboard')({
  component: () => (
    <Dashboard/>
  ),
})

