import React from 'react';
import Footer from "./footer"
import Header from "./header"

// Adicione a prop 'children' aqui
export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen w-[100vw]'>
            <Header />
            {children} 
            <Footer />
        </div>
    )
}