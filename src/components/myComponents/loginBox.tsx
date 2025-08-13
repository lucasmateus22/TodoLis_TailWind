import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent
} from "@/components/ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

export default function LoginBox() {
    return (
        <Card className="w-96">
            <CardContent>
                <CardHeader className="text-center gap-2 mb-4">
                    <CardTitle className="text-lg">Login</CardTitle>
                    <CardDescription>Enter your credentials to continue</CardDescription>
                </CardHeader>
                <Input placeholder="User" type="text" className="mt-2" />
                <Input placeholder="Password" type="password" className="mt-2" />
                <div className="flex justify-around items-center mt-4 p-2 gap-2">
                    <CardAction>
                        <Button variant="default" size="lg" className="hover:bg-teal-600 text-white w-full">
                            <a href="/dashboard" className="!text-white">Login</a>
                        </Button>
                    </CardAction>
                </div>
                <CardFooter className="flex justify-center">
                    <small>
                        <span className="text-sm text-muted-foreground">Don't have an account?
                            <br />
                            <a href="/dashboard">Enter without account</a>
                        </span>
                    </small>
                </CardFooter>
            </CardContent>
        </Card>
    )
}