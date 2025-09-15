import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { Cog, Share2, LogOut, ExternalLink } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import SheetDash from "./itemDashboard/itens/sheetDash"
import { useState } from "react"
import AlertList from "./alertList"
import { useAuth } from "@/features/services/authProvider/authProvider"

export default function Header() {
    const [copiedLink, setCopiedLink] = useState<string | undefined>(undefined);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                setCopiedLink(window.location.href);
                setTimeout(() => {
                    setCopiedLink(undefined);
                }, 3000)
            })
            .catch(err => {
                console.error("Falha ao copiar:", err);
                setCopiedLink("Erro ao copiar");
            });
    };

    // Corrigido: Desestruturando 'isAuthenticated' junto com 'logout'
    const { logout, isAuthenticated } = useAuth();

    return (
        <header className="flex !items-center justify-between
                w-[100%] h-[7vh] min-h-[55px] md:h-[9vh]
                shadow-md px-4 py-2 bg-emerald-800">
            {copiedLink && (
                <AlertList
                    title="Copied"
                    description={copiedLink}>
                </AlertList>
            )}
            <div className="flex items-center justify-between
                w-[98%] min-w-[370px]
                text-white md:px-4 rounded-md">
                <div className="flex items-center justify-start
                    w-[70%]
                    text-white md:px-4 rounded-md">
                    <SheetDash />
                    {isAuthenticated && (
                        <span className="text-xl font-bold">Dashboard</span>
                    )}
                </div>
                <Menubar className="h-10">
                    <MenubarMenu>
                        <MenubarTrigger className="md:h-[60px] md:w-[60px] h-[55px] w-[60px] !bg-emerald-800 md:!bg-emerald-700 text-white text-sm font-medium p-0 !rounded-full">
                            <Cog className="!w-[60px]" />
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>User</AvatarFallback>
                                </Avatar>
                                <a href="https://github.com/lucasmateus22">GitHub</a>
                            </MenubarItem>
                            <MenubarItem className="flex justify-between">Vercel <ExternalLink /></MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className="flex justify-between" onClick={handleShare}>Copy link <Share2 /></MenubarItem>
                            <MenubarSeparator />
                            {/* A lógica de renderização condicional está correta, agora 'isAuthenticated' está definida */}
                            {isAuthenticated && (
                                <MenubarItem onClick={logout} className="flex justify-between text-red-500">
                                    Sair
                                    <LogOut className="ml-2 h-4 w-4" />
                                </MenubarItem>
                            )}
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            </div>
        </header>
    );
}