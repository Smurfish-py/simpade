import { ArrowRight, Cog, FolderKanban, Hash, LayoutDashboard, LogOut, MessageCircle, File, Ellipsis } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="admin-panel" type="checkbox" className="drawer-toggle"></input>
            <div className="drawer-content bg-base-200">
                <Outlet />
            </div>
            <aside className="drawer-side min-h-screen flex flex-col justify-between">
                <div className="w-full">
                    <label htmlFor="admin-panel" aria-label="tutup panel" className="drawer-overlay"></label>
                    <div className="navbar">
                        <a href="/">
                            <img src="/logo/simpade_logo.png" alt="Logo Simpade"  aria-label="website logo" width={152} />
                        </a>
                    </div>
                    <ul className="menu bg-base-100 min-h-full w-80 p-4">
                        <li className="bg-base-300"><a><LayoutDashboard /> Dashboard</a></li>
                        <li>
                            <details open>
                                <summary><FolderKanban /> Proyek</summary>
                                <ul className="menu">
                                    <li><a><File size={16} /> project-1</a></li>
                                    <li><a><File size={16} /> project-2</a></li>
                                    <li><a><File size={16} /> project-3</a></li>
                                    <li><a><Ellipsis size={16} /> Lihat semua proyek</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a><MessageCircle /> Umpan balik</a></li>
                    </ul> 
                </div>
                <div className="w-full">
                    <ul className="menu bg-base-100 min-h-full w-80 p-4">
                        <li><a><Cog /> Pengaturan</a></li>
                        <li><a><LogOut /> Keluar</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}