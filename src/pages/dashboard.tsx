import Footer from "@/components/myComponents/footer";
import Header from "@/components/myComponents/header";
import AppSidebar from "@/components/myComponents/appSidebar";
import SectionDashboard from "@/components/myComponents/sectionDashboard";

export default function Dashboard() {
    return (
        <div className="gap-4">
            <Header />
            <main className="flex flex-row items-center justify-center min-h-screen min-w-screen !bg-teal-950">
                <div className="flex flex-row items-center !justify-center h-[100%] pt-10 w-full">
                    <div
                        className="flex flex-row h-[100%] w-[100%]" // ajusta para descontar header/footer
                    >
                        <div className="min-w-[6%] w-[9%] h-[80%] rounded-lg">
                            <AppSidebar />
                        </div>
                        {/* Painel do conteúdo */}
                        <div className="flex justify-center !w-[80%] h-[80%] bg-white rounded-lg">
                            <SectionDashboard />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}
