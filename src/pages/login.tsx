import Footer from "@/components/myComponents/footer"
import Header from "@/components/myComponents/header";
{/*import { createRootRoute, redirect, Outlet } from "@tanstack/react-router"
import { tokenService } from "@/services/tokenService";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";*/}
import LoginBox from "@/components/myComponents/loginBox";

export default function Login() {
    return (
        <div className="flex h-screen w-screen flex-col relative">
            {/* Cabeçalho fixo e compacto */}
            <Header />
            {/* Conteúdo principal com espaço para o header */}
            <main className="flex flex-col items-center justify-center w-full h-full bg-teal-950 pt-16 px-4">
                <LoginBox />
            </main>
            <Footer />
        </div>
    )
}