import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Share2 } from "lucide-react"

export default function Header() {
    return (
        <header className="absolute top-0 left-0 flex justify-end w-full bg-white shadow-md px-4 py-2 z-10">
            <Menubar className="h-10">
                <MenubarMenu>
                    <MenubarTrigger className="!bg-teal-800 text-white text-sm font-medium px-3 py-1">
                        <Share2 />                      
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Dashboard</MenubarItem>
                        <MenubarItem>GitHub</MenubarItem>
                        <MenubarSeparator />
                        <MenubarSub>
                            <MenubarSubTrigger>Share</MenubarSubTrigger>
                            <MenubarSubContent>
                                <MenubarItem>Linkedin</MenubarItem>
                                <MenubarItem>Vercel</MenubarItem>
                            </MenubarSubContent>
                        </MenubarSub>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </header>
    )
}