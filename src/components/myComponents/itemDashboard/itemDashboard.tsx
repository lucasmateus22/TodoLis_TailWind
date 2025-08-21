import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ToList from "./itens/toDoList"
import CarouselDash from "./itens/carousel"

export default function ItemDashboard() {
    return (
        <Tabs defaultValue="account" className="w-[100%] h-[100vh] pl-16 rounded-lg">
            <TabsList className=" relative top-[10vh] gap-2">
                <TabsTrigger value="todolist" className="text-white !bg-teal-950">To do list</TabsTrigger>
                <TabsTrigger value="Carousel" className="text-white !bg-teal-950">Carousel</TabsTrigger>
            </TabsList>
            <TabsContent value="todolist" className="w-[100%] !h-[100%] mt-9">
                <ToList />
            </TabsContent>
            <TabsContent value="Carousel" className="">
                <CarouselDash />
            </TabsContent>
        </Tabs>
    )
}