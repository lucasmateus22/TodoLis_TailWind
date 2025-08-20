// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarSeparator,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar"
import { Home, Settings, LogOut } from "lucide-react"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function AppSidebar() {
  return (
    <SidebarProvider className="!w-[250px] min-w-[200px] rounded-r-lg text-teal-800 static h-195 bg-green-500">
      <Sidebar className="!w-[250px] min-w-[200px] rounded-r-lg text-teal-800 static h-195">
        <SidebarHeader>
          <Input placeholder="Search" type="text" className="mt-2" />
        </SidebarHeader>
        <SidebarContent>
          {/* Grupo de navegação */}
          <SidebarGroup>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/">
                    <Home className="mr-2 h-4 w-4" />
                    Início
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings">
                    <Settings className="mr-2 h-4 w-4" />
                    Themes
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarSeparator />
          <div className="p-4 text-sm text-muted-foreground">
            <Button variant="secondary" size="sm" className="!bg-transparent text-black w-full">
              <LogOut className="mr-2 h-4 w-4" />
              <a href="/" className="!text-black">Logout</a>
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
