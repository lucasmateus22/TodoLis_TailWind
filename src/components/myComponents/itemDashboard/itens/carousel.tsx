import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDash() {
    return (
        <Carousel className="w-[100%] h-[90%] bg-red-500 rounded-xl p-4">
            <CarouselContent>
                <CarouselItem>
                    <h3>One</h3>
                    <img src="" alt="" />
                </CarouselItem>
                <CarouselItem>
                    <h3>Two</h3>
                    <img src="" alt="" />
                </CarouselItem>
                <CarouselItem>
                    <h3>Three</h3>
                    <img src="" alt="" />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-white !bg-teal-950" />
            <CarouselNext className="text-white !bg-teal-950" />
        </Carousel>
    )
}