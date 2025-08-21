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
import { Home, LogOut } from "lucide-react"

export default function AppSidebar() {
  return (
    <SidebarProvider className=" flex justify-center min-w-[200px] rounded-lg text-teal-500 static h-195">
      <Sidebar className="flex justify-center !w-[80px] rounded-lg text-teal-800 static h-195">
        <SidebarHeader>
          <SidebarMenuButton asChild>
            <SidebarMenuItem className="flex items-center justify-center p-6">
              <a href="#" className="flex items-center justify-center bg-gray-100 text-white rounded-full h-12 w-12 p-2">
                <Home className="h-7 w-7" />
              </a>
            </SidebarMenuItem>
          </SidebarMenuButton>
        </SidebarHeader>
        <SidebarContent>
          {/* Grupo de navegação */}
          <SidebarGroup>
            <SidebarMenu>
              
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarSeparator />
          <div className="p-4 text-sm text-muted-foreground">
            <SidebarMenuButton asChild>
              <SidebarMenuItem className="flex items-center justify-center p-6 rounded-lg">
                <a href="/"className="flex items-center justify-center bg-gray-100 text-white rounded-full h-12 w-12 p-2">
                  <LogOut className=" h-7 w-7" />
                </a>
              </SidebarMenuItem>
            </SidebarMenuButton>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
