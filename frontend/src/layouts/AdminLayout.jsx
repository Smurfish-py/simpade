import {
    LayoutDashboard,
    FolderKanban,
    MessageCircle,
    LogOut,
    SidebarOpen,
    Plus
} from "lucide-react";

import { NavLink, Outlet } from "react-router-dom";
import { openModal } from "@/utils/action";

export default function AdminLayout() {
    const navList = [
        {
            title: "Dashboard",
            dest: "/admin/dashboard",
            icon: LayoutDashboard
        },
        {
            title: "Proyek",
            dest: "/admin/projects",
            icon: FolderKanban
        },
        {
            title: "Aspirasi",
            dest: "/admin/feedback",
            icon: MessageCircle
        }
    ];
    return (
        <div className="drawer lg:drawer-open">

            <input id="admin-panel" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content bg-base-200">
                <Outlet />
            </div>

            <aside className="drawer-side shadow-sm is-drawer-close:overflow-visible">
                <label htmlFor="admin-panel" aria-label="tutup panel" className="drawer-overlay" />
                <div className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64">

                    <ul className="menu w-full grow space-y-1">
                        <div className="navbar is-drawer-close:px-0">
                            <div className="is-drawer-open:navbar-start is-drawer-close:hidden">
                                <a href="/">
                                <img
                                    src="/logo/simpade_logo.png"
                                    alt="Logo Simpade"
                                    width={152}
                                />
                                </a>
                            </div>

                            <div className="is-drawer-open:navbar-end">
                                <label htmlFor="admin-panel" className="btn btn-square btn-ghost">
                                <SidebarOpen />
                                </label>
                            </div>
                        </div>

                        <li className="menu-title is-drawer-close:hidden">Navigasi</li>

                        {/* Dynamic Menu */}
                        {navList.map(({ title, dest, icon: Icon }) => (

                        <li key={dest} className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip={title}>
                            <NavLink to={dest} end={dest === "/admin"} className={({ isActive }) => `is-drawer-close:btn is-drawer-close:btn-square  is-drawer-close:btn-ghost flex items-center gap-2 ${isActive ? "menu-active" : ""}` }>

                                <Icon /><span className="is-drawer-close:hidden">{title}</span>
                            </NavLink>
                        </li>
                        ))}

                        <div className="divider"></div>
                        {/* Input Data */}
                        <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-success" data-tip="Input Data">
                            <button className="btn btn-soft btn-success is-drawer-close:btn-square" onClick={() => openModal("input_modal")}>
                                <Plus /><span className="is-drawer-close:hidden">Input Data</span>
                            </button>
                        </li>
                    </ul>

                    <ul className="menu w-full space-y-1">
                        <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-error" data-tip="Keluar">
                            <button className="is-drawer-close:btn is-drawer-close:btn-soft is-drawer-close:btn-error is-drawer-close:btn-square is-drawer-close:btn-ghost" onClick={() => openModal("confirm_modal")}>
                                <LogOut /><span className="is-drawer-close:hidden">Keluar</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </aside>
            <div className="fab">
                <button className="btn btn-lg btn-circle btn-primary size-14 lg:hidden" onClick={() => openModal("input_modal")}><Plus /></button>
            </div>
        </div>
    );
}