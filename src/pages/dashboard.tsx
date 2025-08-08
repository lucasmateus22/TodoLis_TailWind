import Footer from "@/components/myComponents/footer";
import Header from "@/components/myComponents/header";
import AppSidebar from "@/components/myComponents/appSidebar";
import SectionDashboard from "@/components/myComponents/sectionDashboard";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function Dashboard() {
    return (
        <div className="body">
            <Header />
            <main className="flex flex-row items-center justify-start min-h-screen min-w-screen pt-10 !bg-teal-950">
                <div className="flex flex-row items-center !justify-center !h-full w-full pr-10">
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="min-h-[calc(100vh-10rem)]" // ajusta para descontar header/footer
                    >
                        {/* Painel da Sidebar */}
                        <ResizablePanel defaultSize={15} minSize={15} maxSize={15}>
                            <AppSidebar />
                        </ResizablePanel>

                        <ResizableHandle className="bg-gray" />

                        {/* Painel do conteúdo */}
                        <ResizablePanel defaultSize={85} minSize={60}>
                            <SectionDashboard />
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>
            </main>
            <Footer />
        </div>
    )
}
