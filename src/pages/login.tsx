import LoginBox from "@/components/myComponents/loginBox";


export default function Login() {

    return (
        <div className="flex h-screen w-screen flex-col relative">
            <div className="flex flex-col items-center justify-center w-full h-full bg-teal-950 px-4">
                <LoginBox  />
            </div>
        </div>
    )
}