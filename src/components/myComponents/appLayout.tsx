import React from 'react';
import { Outlet } from "@tanstack/react-router"
import Footer from "./footer"
import Header from "./header"

// Adicione a prop 'children' aqui
export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children} {/* Renderiza o Outlet aqui */}
            <Footer />
        </>
    )
}