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
import { useAuth } from "@/features/services/authProvider/authProvider";
import { useState } from "react";

export default function LoginBox() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, loading, user } = useAuth(); // <<-- CORREÇÃO AQUI

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            // Adicione aqui a lógica de redirecionamento após o login
        } catch (error) {
            console.error("ERROR", error)
        }
    }
    if (loading) {
        return <div>Loading...</div>;
    }

    if (user) {
        return <div>Você já está logado como {user.email}!</div>;
    }

    return (
        <Card className="w-96">
            <CardContent>
                <form onSubmit={handleSubmit}> {/* <<-- Adicione o formulário aqui */}
                    <CardHeader className="text-center gap-2 mb-4">
                        <CardTitle className="text-lg">Login</CardTitle>
                        <CardDescription>Enter your credentials to continue</CardDescription>
                    </CardHeader>
                    <Input type="email" value={email} placeholder="Email" required className="mt-2" />{/** onChange={(e) => setEmail(e.target.value)} */}
                    <Input type="password" placeholder="Senha" required />{/**value={password} onChange={(e) => setPassword(e.target.value)} */}
                    <div className="flex justify-around items-center mt-4 p-2 gap-2">
                        <CardAction>
                            <Button variant="default" size="lg" className="hover:bg-teal-600 text-white w-full" type="submit" disabled={loading}>
                                Login
                            </Button>
                        </CardAction>
                    </div>
                </form>
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