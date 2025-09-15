import ItemTabDash from "@/components/myComponents/itemDashboard/itemTabDash";

export default function Dashboard() {
    return (
        <main className="flex flex-row items-center justify-center h-[100vh] w-[100vw] p-0">
            {/* Painel do conteúdo */}
            <div className="flex justify-center !w-[95%] h-[100%] rounded-lg md:p-5">
                <ItemTabDash />
            </div>
        </main>
    )
}
