import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function sheetDash() {
    // Texto do projeto em uma constante para maior clareza
    const projectDescription = "This project is a way to practice and showcase my process of learning new tools. The login process is open for everyone to easily access the repository and see the project.";
    const tools = ["Shadcn/ui", "Tailwind CSS", "TanStack Router", "Google Auth", "TypeScript/TSX"];

    return (
        <Sheet>
            <SheetTrigger className="!bg-emerald-700 hover:!bg-emerald-600 transition-colors duration-200 text-white p-2 rounded-md m-2">
                <Menu />
            </SheetTrigger>
            <SheetContent className="w-full max-w-sm sm:max-w-md bg-gray-100 p-6 flex flex-col justify-between">
                <div>
                    <SheetHeader>
                        <SheetTitle className="text-3xl font-bold mb-4 text-emerald-800">
                            About
                        </SheetTitle>
                        <SheetDescription className="text-gray-700">
                            <h5 className="text-lg font-semibold mb-2 text-gray-800">
                                This project is a way to learn new tools, including:
                            </h5>
                            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-600">
                                {tools.map((tool, index) => (
                                    <li key={index}>{tool}</li>
                                ))}
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                    <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                        <p className="text-sm text-gray-700 leading-relaxed">
                            {projectDescription}
                        </p>
                    </div>
                </div>
                <SheetFooter className="mt-8 border-t pt-4 text-center">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Lucas. All Rights Reserved.
                    </p>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
