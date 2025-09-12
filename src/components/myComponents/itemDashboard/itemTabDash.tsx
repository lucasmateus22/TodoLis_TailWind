import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ToList from "./itens/toDoList"
import ChartDashboard from "./itens/chart"

export default function ItemTabDash() {
    return (
        <Tabs defaultValue="todolist" className="w-[100%] h-[100%] pt-1 rounded-lg md:bg-gray-900 dark">
            <TabsList className="gap-2 flex justify-center w-[100%] rounded-t-lg  md:w-[30%] md:ml-[3.5vw]">
                <TabsTrigger value="todolist" className="!text-white !bg-emerald-500">To do list</TabsTrigger>
                <TabsTrigger value="Chart" className="!text-white !bg-emerald-500">Chart</TabsTrigger>
            </TabsList>
            <TabsContent value="todolist" className="w-[100%] !h-[100%]">
                <ToList />
            </TabsContent>
            <TabsContent value="Chart" className="flex flex-wrap justify-start flex-col align-end h-[800px]">
                <section className="text-white h-[80%] w-[95%]">
                    <div className="px-4">
                        <h2 className="font-bold mb-8">Chart</h2>
                        <h4 className="font-bold mb-4">Tasks completed and incomplete</h4>
                    </div>
                    <div className="flex justify-center align-center">
                        <ChartDashboard />
                    </div>
                    <div className="px-4">
                        <h6 className="font-bold mb-4">About</h6>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </section>
            </TabsContent>
        </Tabs>
    )
}