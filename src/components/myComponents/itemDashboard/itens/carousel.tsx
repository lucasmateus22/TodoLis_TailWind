import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function CarouselDash() {
    return (
        <Carousel className="w-[95%] h-[90%] bg-teal-600 rounded-xl p-4">
            <CarouselContent>
                <CarouselItem>
                    <h3>One</h3>
                    <img
                        src=""
                        alt="Placeholder"
                        className="rounded-lg"
                    />
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