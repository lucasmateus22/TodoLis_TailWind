import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ItemDashboard() {
    return (
        <Tabs defaultValue="account" className="w-[100%] h-[95%] p-14 rounded-lg">
            <TabsList className="gap-2">
                <TabsTrigger value="Carousel" className="text-white !bg-teal-950">Carousel</TabsTrigger>
                <TabsTrigger value="secondary-item"  className="text-white !bg-teal-950">To do list</TabsTrigger>
            </TabsList>
            <TabsContent value="Carousel">
                <Carousel className="w-[100%] h-[90%] bg-white rounded-lg">
                    <CarouselContent>
                        <CarouselItem>1</CarouselItem>
                        <CarouselItem>2</CarouselItem>
                        <CarouselItem>3</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </TabsContent>
            <TabsContent value="secondary-item">
                <Card className="w-full max-w-sm">
                    <CardHeader>
                        <CardTitle>To do list</CardTitle>
                        <CardDescription>
                            Add your tasks here and manage them efficiently.
                        </CardDescription>
                        <CardAction>
                        </CardAction>
                    </CardHeader>
                    <CardContent>
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="task">task</Label>
                                    <Input
                                        id="task"
                                        type="task"
                                        placeholder="item"
                                        required
                                    />
                                </div>
                            </div>
                    </CardContent>
                    <CardFooter className="justify-around flex-row gap-2">
                        <Button className="w-35 text-white !bg-teal-950" variant="outline">
                            Add Task
                        </Button>
                        <Button className="w-35 !bg-teal-950" variant="destructive">
                            Delete All Tasks
                        </Button>
                    </CardFooter>
                </Card>
            </TabsContent>
        </Tabs>
    )
}