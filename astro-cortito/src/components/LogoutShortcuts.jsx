import { signOut } from "auth-astro/client"
import { clearState } from "@/shortcutstore"

const LogoutShortcuts = () => {

    return (
        <div onClick={() => { signOut(); clearState() }}
            tabindex="0"
            className="hover:bg-gray-700 focus-visible:bg-gray-800 rounded-sm cursor-pointer block p-6 outline-none transition-[background-color]"
        >
            Logout <i class="fa-solid fa-right-from-bracket"></i>
        </div>
    )
}

export default LogoutShortcuts
