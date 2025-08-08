import Footer from "@/components/myComponents/footer";
import Header from "@/components/myComponents/header";
import AppSidebar from "@/components/myComponents/appSidebar";

export default function Dashboard() {
    return (
        <div className="body">
            <Header />
            <main className="flex flex-row items-center justify-start min-h-screen min-w-screen pt-10 !bg-teal-950">
                <div className="flex flex-row items-start justify-around  !h-full w-full">
                    <AppSidebar />
                    
                </div>
            </main>
            <Footer />
        </div>
    )
}
