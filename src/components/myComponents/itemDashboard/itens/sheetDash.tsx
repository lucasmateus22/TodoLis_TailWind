import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function sheetDash() {
    return (
        <Sheet>
            <SheetTrigger className="bg-teal-800 text-white px-4 py-2 rounded-md">
                Open
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