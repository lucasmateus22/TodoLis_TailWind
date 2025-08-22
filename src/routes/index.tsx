import Footer from '@/components/myComponents/footer'
import Header from '@/components/myComponents/header'
import Login from '@/pages/login'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => (
    <main className="flex flex-col min-h-screen max-h-screen">
      <Header />
      <Login />
      <Footer />
    </main>
  ),
})
