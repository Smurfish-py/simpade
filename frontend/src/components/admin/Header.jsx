import { SidebarOpen } from "lucide-react";

export default function Header({ headerTitle }) {
    return (
        <header className="navbar bg-base-100 shadow-sm px-8">
            <div className="navbar-start gap-4">
                <label htmlFor="admin-panel" className="btn btn-square btn-ghost lg:hidden">
                    <SidebarOpen />
                </label>
                <h2 className="text-3xl font-semibold">{ headerTitle }</h2>
            </div>
            <div className="navbar-end gap-2">
                <h3 className="text-sm font-semibold">Halo, Admin!</h3>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/placeholder/profile_picture.png" />
                        </div>
                    </div>
                    <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Profil</a></li>
                        <li><a>Pengaturan</a></li>
                        <li><a>Keluar</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}