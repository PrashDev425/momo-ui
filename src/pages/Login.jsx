import { useAuth0 } from "@auth0/auth0-react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return (<div className="bg-gray-200 min-h-96 pt-10">
        <div className="bg-white w-98 m-auto p-5 space-y-2">
            <form className="flex flex-col">
                <label htmlFor="email">Email</label>
                <input className="outline-none border p-2 rounded-sm" type="email" name="" id="email" />
                <label htmlFor="password">Password</label>
                <input className="outline-none border p-2 rounded-sm" type="email" name="" id="password" />
                <button className="bg-orange-600 p-2 mt-2 text-white">
                    Login
                </button>
                <p className="text-center font-bold">or</p>
            </form>
            <button onClick={loginWithRedirect} className="border p-2 w-[350px] flex justify-center items-center gap-2">
                <FcGoogle size={20}/>
                Continue with Google
            </button>
        </div>
    </div>)
}

export default Login;