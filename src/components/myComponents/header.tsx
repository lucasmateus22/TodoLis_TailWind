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
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Link } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import SheetDash from "./itemDashboard/itens/sheetDash"

export default function Header() {
    return (
        <header className="absolute top-0 left-0 flex justify-between w-full bg-white shadow-md px-4 py-2 z-10">
            <HoverCard>
                <div className="w-[20%] bg-teal-700 text-white flex items-center justify-between px-4 rounded-md">
                    <SheetDash />
                    <span className="text-xl font-bold">Dashboard</span>
                </div>
                <HoverCardTrigger asChild>
                    <Menubar className="h-10">
                        <MenubarMenu>
                            <MenubarTrigger className="!bg-teal-800 text-white text-sm font-medium px-3 py-1">
                                <Link />
                            </MenubarTrigger>
                            <MenubarContent>
                                <MenubarItem>
                                    <Avatar>
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>User</AvatarFallback>
                                    </Avatar>
                                </MenubarItem>
                                <MenubarItem>Dashboard</MenubarItem>
                                <MenubarItem><a href="https://github.com/lucasmateus22">GitHub</a></MenubarItem>
                                <MenubarSeparator />
                                <MenubarSub>
                                    <MenubarSubTrigger>Share</MenubarSubTrigger>
                                    <MenubarSubContent>
                                        <MenubarItem><a href="https://www.linkedin.com/in/lucas-mateus-a00485242/">Linkedin</a></MenubarItem>
                                        <MenubarItem>Vercel</MenubarItem>
                                    </MenubarSubContent>
                                </MenubarSub>
                            </MenubarContent>
                        </MenubarMenu>
                    </Menubar>
                </HoverCardTrigger>
                <HoverCardContent className="absolute w-40 h-13 right-10 -bottom-1 flex items-center justify-center">
                    <p className="text-black">My social media</p>
                </HoverCardContent>
            </HoverCard>
        </header>
    )
}