import { ArrowRight, Cog, FolderKanban, LayoutDashboard, LogOut, MessageCircle, File, Ellipsis, SidebarOpen, Plus } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="admin-panel" type="checkbox" className="drawer-toggle"></input>
            <div className="drawer-content bg-base-200">
                <Outlet />
            </div>
            <aside className="drawer-side shadow-sm is-drawer-close:overflow-visible">
                <label htmlFor="admin-panel" aria-label="tutup panel" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-100 is-drawer-close:w-14 is-drawer-open:w-64">
                    <ul className="menu w-full grow space-y-1">
                        <div className="navbar is-drawer-close:px-0">
                            <div className="is-drawer-open:navbar-start is-drawer-close:hidden">
                                <a href="/">
                                    <img src="/logo/simpade_logo.png" alt="Logo Simpade"  aria-label="website logo" width={152} />
                                </a>
                            </div>
                            <div className="is-drawer-open:navbar-end">
                                <label htmlFor="admin-panel" className="btn btn-square btn-ghost">
                                    <SidebarOpen />
                                </label>
                            </div>
                        </div>
                        <li className="menu-title is-drawer-close:hidden">Navigasi</li>
                        <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Dashboard">
                            <a className="menu-active is-drawer-close:btn is-drawer-close:btn-square is-drawer-close:btn-ghost">
                                <LayoutDashboard /> <span className="is-drawer-close:hidden">Dashboard</span>
                            </a>
                        </li>
                        <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Proyek">
                            <details className="is-drawer-close:hidden" open>
                                <summary><FolderKanban /> <span className="is-drawer-close:hidden">Proyek</span></summary>
                                <ul className="menu">
                                    <li>
                                        <a>
                                            <File className="size-4" /> project-1
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <File className="size-4" /> project-2
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <File className="size-4" /> project-3
                                        </a>
                                    </li>
                                </ul>
                            </details>
                            <label htmlFor="admin-panel" className="btn btn-square btn-ghost is-drawer-open:hidden">
                                <FolderKanban />
                            </label>
                        </li>
                        <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Umpan Balik">
                            <a className="is-drawer-close:btn is-drawer-close:btn-square is-drawer-close:btn-ghost">
                                <MessageCircle /> <span className="is-drawer-close:hidden">Umpan Balik</span>
                            </a>
                        </li>

                        <div className="divider"></div>
                        <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-success " data-tip="Input Data">
                            <a className="btn btn-soft btn-success is-drawer-close:btn-square">
                                <Plus /> <span className="is-drawer-close:hidden">Input Data</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="menu w-full space-y-1">
                        <li className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-error" data-tip="Keluar">
                            <a className="is-drawer-close:btn is-drawer-close:btn-soft is-drawer-close:btn-error is-drawer-close:btn-square is-drawer-close:btn-ghost">
                                <LogOut /> <span className="is-drawer-close:hidden">Keluar</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}