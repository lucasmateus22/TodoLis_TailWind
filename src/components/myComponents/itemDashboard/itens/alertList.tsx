import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircleIcon } from "lucide-react"

interface AlertListProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

export default function AlertList({ title, description, children, onClose }: AlertListProps) {

    return (
        <Alert variant="destructive" className="absolute w-[25vw] top-5 left-0 right-0 m-auto z-50 border-1-red-500">
            <AlertCircleIcon />
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