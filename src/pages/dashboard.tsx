import AppSidebar from "@/components/myComponents/appSidebar";
import SectionDashboard from "@/components/myComponents/sectionDashboard";

export default function Dashboard() {
    return (
        <main className="flex flex-row items-center justify-center h-[87.5vh] min-w-screen !bg-teal-800">
            <div className="flex flex-row items-center !justify-center h-[100%] pt-10 w-full">
                <div
                    className="flex flex-row justify-around h-[100%] w-[100%]" // ajusta para descontar header/footer
                >
                    <div className="min-w-[6%] w-[6%] h-[80%] rounded-lg">
                        <AppSidebar />
                    </div>
                    {/* Painel do conteúdo */}
                    <div className="flex justify-center !w-[88%] h-[95%] bg-white rounded-lg">
                        <SectionDashboard />
                    </div>
                </div>
            </div>
        </main>
    )
}
