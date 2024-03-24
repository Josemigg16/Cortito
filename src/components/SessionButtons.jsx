import { useEffect } from "react";
import { signIn, signOut } from "auth-astro/client"
import register from "@/libs/register";
import { checkState } from "@/shortcutstore";
import { clearState } from "@/shortcutstore"
import google from "../../public/svg/google.svg"
import github from "../../public/svg/github.svg";

const SessionButtons = ({ session }) => {

    const handleGoogle = () => {
        signIn('google')
    }
    const handleGithub = () => {
        signIn('github')
    }
    const handleLogout = () => {
        signOut()
        clearState()
    }
    
    useEffect(() => {
        if (session) {
            const posts = checkState()
            register({
                name: session.user?.name,
                email: session.user?.email,
                posts,
            })
            clearState()
        }
    })


    return (
        <div>
            {
                !session ? (
                    <div className="md:scale-100 scale-90">

                        <div className="hover:text-gray-100 flex justify-center pl-6 mb-2 items-center hover:bg-gray-600 cursor-pointer bg-gray-700 rounded-3xl px-4 w-80 min-h-12 relative"
                            onClick={handleGoogle}>
                            Sign in with Google
                            <img className="absolute left-6 w-6 h-6" src={google.src} alt="google" />
                        </div>

                        <div className="hover:text-gray-100 flex justify-center pl-6 mb-2 items-center hover:bg-gray-600 cursor-pointer bg-gray-700 rounded-3xl px-4 w-80 min-h-12 relative"
                            onClick={handleGithub}>
                            Sign in with Github
                            <img className="absolute left-6 w-6 h-6" src={github.src} alt="github" />
                        </div>
                    </div>
                ) : (
                    <div className="text-1xl hover:text-gray-100 flex justify-center pl-6 mb-2 items-center hover:bg-gray-600 cursor-pointer bg-gray-700 rounded-3xl px-4 w-80 min-h-12 relative"
                        onClick={handleLogout}>
                        Logout
                    </div>
                )
            }
        </div>
    )
}

export default SessionButtons
