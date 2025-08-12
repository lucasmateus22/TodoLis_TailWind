import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ToList from "./itens/toDoList"
import CarouselDash from "./itens/Carousel"

export default function ItemDashboard() {
    return (
        <Tabs defaultValue="account" className="w-[100%] h-[95%] p-14 rounded-lg">
            <TabsList className="gap-2">
                <TabsTrigger value="Carousel" className="text-white !bg-teal-950">Carousel</TabsTrigger>
                <TabsTrigger value="secondary-item" className="text-white !bg-teal-950">To do list</TabsTrigger>
            </TabsList>
            <TabsContent value="Carousel">
                <CarouselDash />
            </TabsContent>
            <TabsContent value="secondary-item">
                <ToList />
            </TabsContent>
        </Tabs>
    )
}