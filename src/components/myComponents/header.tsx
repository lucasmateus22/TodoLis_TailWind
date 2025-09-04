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
import {  User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import SheetDash from "./itemDashboard/itens/sheetDash"

export default function Header() {
    return (
        <header className="flex !items-center justify-between
                w-[100%] h-[9h] 
                shadow-md px-4 py-2 bg-emerald-800">
            <div className="flex items-center justify-between 
                w-[98%] min-w-[370px]
                text-white px-4 rounded-md">
                <div className="flex items-center justify-start 
                    w-[70%] 
                    text-white px-4 rounded-md">
                    <SheetDash />
                    <span className="text-xl font-bold">Dashboard</span>
                </div>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Menubar className="h-10">
                            <MenubarMenu>
                                <MenubarTrigger className="h-[60px] w-[60px] !bg-emerald-500 text-white text-sm font-medium p-0 !rounded-full">
                                    <User />
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
            </div>

        </header>
    )
}