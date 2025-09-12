import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"

interface AlertListProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

export default function AlertList({ title, description, onClose }: AlertListProps) {

    return (
        <Alert className="absolute top-5 left-0 right-0 m-auto z-50 w-[25vw]">
            
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
            <button
                onClick={onClose}
                className="absolute top-2 right-2
                flex items-center justify-center
                !p-2 w-[30px] h-[30px] !rounded-full
                transition-colors !bg-red-500 !hover:bg-red-600
                text-white"
            >X</button>
        </Alert>
    )
}