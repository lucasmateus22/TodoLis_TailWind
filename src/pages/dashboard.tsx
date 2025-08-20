import Footer from "@/components/myComponents/footer";
import Header from "@/components/myComponents/header";
import AppSidebar from "@/components/myComponents/appSidebar";
import SectionDashboard from "@/components/myComponents/sectionDashboard";

export default function Dashboard() {
    return (
        <>
            <Header />
            <main className="flex flex-row items-center min-h-screen min-w-screen !bg-teal-950">
                <div className="flex flex-row items-center !justify-center !h-full w-full">
                    <div
                        className="flex flex-row h-[100%] w-[100%]" // ajusta para descontar header/footer
                    >
                        <div className="min-w-[15%] w-[15%] h-[80%]">
                            <AppSidebar />
                        </div>
                        {/* Painel do conteúdo */}
                        <div className="flex justify-center !w-[80%] h-[85%] bg-white rounded-lg">
                            <SectionDashboard />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
