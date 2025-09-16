import LoginBox from "@/components/myComponents/loginBox";


export default function Login() {

    return (
        <main className="flex h-screen w-screen flex-col relative">
            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 px-4">
                <LoginBox  />
            </div>
        </main>
    )
}