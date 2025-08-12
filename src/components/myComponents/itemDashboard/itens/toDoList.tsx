import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

export default function ToList() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>To do list</CardTitle>
                <CardDescription>
                    Add your tasks here and manage them efficiently.
                </CardDescription>
                <CardAction>
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="task">task</Label>
                        <Input
                            id="task"
                            type="task"
                            placeholder="item"
                            required
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="justify-around flex-row gap-2">
                <Button className="w-35 !bg-zinc-600" variant="destructive">
                    Delete All Tasks
                </Button>
                <Button className="w-35 text-white !bg-teal-950" variant="outline">
                    Add Task
                </Button>
            </CardFooter>
        </Card>
    )
}