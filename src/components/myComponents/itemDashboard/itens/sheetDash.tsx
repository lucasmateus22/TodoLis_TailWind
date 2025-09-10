import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function sheetDash() {
    return (
        <Sheet>
            <SheetTrigger className="!bg-emerald-700 text-white px-4 py-2 rounded-md m-2">
                <Menu/>
            </SheetTrigger>
            <SheetContent className="w-full max-w-md">
                <SheetHeader>
                    <SheetTitle>About</SheetTitle>
                    <SheetDescription>
                        Manage your items efficiently.
                    </SheetDescription>
                </SheetHeader>
                {/* Content goes here */}
            </SheetContent>
        </Sheet>
    )
}