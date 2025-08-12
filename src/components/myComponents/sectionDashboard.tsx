import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ItemDashboard from "./itemDashboard"

export default function SectionDashboard() {
    return (
        <>
            <div className="flex flex-col items-start justify-start rounded-md !h-195 bg-white w-full">

                <Sheet>
                    <SheetTrigger className="text-white !bg-teal-800 mt-5 ml-5">Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>About</SheetTitle>
                            <SheetDescription>

                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
                <ItemDashboard />
            </div>
        </>
    )
}