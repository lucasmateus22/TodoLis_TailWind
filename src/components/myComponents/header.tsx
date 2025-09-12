import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import SheetDash from "./itemDashboard/itens/sheetDash"
import { useState } from "react"
import AlertList from "./alertList"

export default function Header() {

    const [copiedLink, setCopiedLink] = useState()

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setCopiedLink(copiedLink)
        })
    };

    const handleCloseAlert = () => {
        setCopiedLink("")
    }

    return (
        <header className="flex !items-center justify-between
                w-[100%] h-[7vh] min-h-[55px] md:h-[9vh]
                shadow-md px-4 py-2 bg-emerald-800">
            {copiedLink && <AlertList
                title="Empty Input"
                description="Task text and time cannot be empty"
                onClose={handleCloseAlert}>
            </AlertList>}
            <div className="flex items-center justify-between
                w-[98%] min-w-[370px]
                text-white md:px-4 rounded-md">
                <div className="flex items-center justify-start
                    w-[70%]
                    text-white md:px-4 rounded-md">
                    <SheetDash />
                    <span className="text-xl font-bold">Dashboard</span>
                </div>
                <Menubar className="h-10">
                    <MenubarMenu>
                        <MenubarTrigger className="md:h-[60px] md:w-[60px] h-[55px] w-[60px] !bg-emerald-800 md:!bg-emerald-700 text-white text-sm font-medium p-0 !rounded-full">
                            <User className="!w-[60px]" />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>User</AvatarFallback>
                                </Avatar>
                            </MenubarItem>
                            <MenubarItem><a href="https://github.com/lucasmateus22">GitHub</a></MenubarItem>
                            <MenubarItem>Vercel</MenubarItem>
                            <MenubarSeparator />
                            {/* A lógica de compartilhamento agora está unificada */}
                            <MenubarItem onClick={handleShare}>Share</MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem><a href="/">Sair</a></MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    );
}