import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface AlertListProps {
    title: string;
    description: string;
    children?: React.ReactNode;
    onClose?: () => void;
}

export default function AlertList({ title, description }: AlertListProps) {

    return (
        <Alert className="absolute top-5 left-0 right-0 m-auto z-50 w-[25vw] min-w-[350px]">
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    )
}