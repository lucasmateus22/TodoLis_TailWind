import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ToList from "./itens/toDoList"
import ChartDashboard from "./itens/chart"

export default function ItemTabDash() {
    return (
        <Tabs defaultValue="todolist" className="w-[100%] h-[100%] pt-1 rounded-lg bg-stone-200">
            <TabsList className="gap-2 flex justify-center w-[100%] bg-stone-300 rounded-t-lg  md:w-[30%] md:ml-[3.5vw]">
                <TabsTrigger value="todolist" className="text-white !bg-teal-950">To do list</TabsTrigger>
                <TabsTrigger value="Chart" className="text-white !bg-teal-950">Chart</TabsTrigger>
            </TabsList>
            <TabsContent value="todolist" className="w-[100%] !h-[100%]">
                <ToList />
            </TabsContent>
            <TabsContent value="Chart" className="flex flex-column align-center justify-center align-end h-[100%]">
                <ChartDashboard />
            </TabsContent>
        </Tabs>
    )
}