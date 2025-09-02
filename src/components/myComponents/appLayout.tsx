import React from 'react';
import Footer from "./footer"
import Header from "./header"

// Adicione a prop 'children' aqui
export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col !max-h-[100vh] max-w-[100vw] p-0'>
            <Header />
            {children} 
            <Footer />
        </div>
    )
}