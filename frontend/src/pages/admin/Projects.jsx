import React, { useState } from 'react';
import { 
    Plus, 
    Search, 
    Edit, 
    Trash2, 
    MoreVertical, 
    ExternalLink,
    Filter
} from 'lucide-react';

import { AdminHeader, AddProjectModal } from '@/components/admin';

export default function AdminProjects() {
    const [projects, setProjects] = useState([
        { id: 1, title: "Pembangunan Jalan Dusun A", budget: "Rp 150.000.000", status: "Berjalan", location: "Dusun Krajan" },
        { id: 2, title: "Rehabilitasi Balai Desa", budget: "Rp 75.000.000", status: "Selesai", location: "Pusat Desa" },
        { id: 3, title: "Pemasangan Lampu Jalan", budget: "Rp 30.000.000", status: "Perencanaan", location: "Dusun Kidul" },
    ]);

    const getStatusBadge = (status) => {
        switch (status) {
            case "Selesai": 
                return <div className="badge badge-soft badge-success gap-2">Selesai</div>;
            case "Berjalan": 
                return <div className="badge badge-soft badge-info gap-2">Berjalan</div>;
            case "Perencanaan": 
                return <div className="badge badge-soft badge-warning gap-2">Perencanaan</div>;
            default: 
                return <div className="badge badge-ghost">{status}</div>;
        }
    };

    return (
        <>
            <AdminHeader headerTitle="Proyek" />
            <div className="p-6 bg-base-100 min-h-screen">
                {/* Header & Breadcrumbs */}
                <div className="text-sm breadcrumbs mb-4 text-base-content/60">
                    <ul>
                        <li>Admin</li>
                        <li>Manajemen Proyek</li>
                    </ul>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold">Daftar Proyek Desa</h1>
                        <p className="text-base-content/60">Kelola informasi pembangunan dan alokasi dana desa.</p>
                    </div>
                        <button 
                        className="btn btn-primary"
                        onClick={() => document.getElementById('modal_add_project').showModal()}
                        >
                        <Plus size={20} />
                        Tambah Proyek
                    </button>
                </div>

                {/* Kontrol Pencarian & Filter */}
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="join grow max-w-md">
                        <input className="input input-bordered join-item w-full" placeholder="Cari nama proyek..." />
                        <button className="btn join-item btn-square bg-base-200">
                            <Search size={20} />
                        </button>
                    </div>
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-outline border-base-300 gap-2">
                            <Filter size={18} />
                            Filter Status
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-1 menu p-2 shadow bg-base-100 rounded-box w-52 border border-base-200 mt-2">
                            <li><a>Semua Status</a></li>
                            <li><a>Berjalan</a></li>
                            <li><a>Selesai</a></li>
                            <li><a>Perencanaan</a></li>
                        </ul>
                    </div>
                </div>

                {/* Tabel Proyek */}
                <div className="overflow-x-auto rounded-xl border border-base-200 shadow-sm">
                    <table className="table table-zebra">
                        <thead className="bg-base-200/50">
                            <tr className="text-base">
                            <th>Nama Proyek</th>
                            <th>Lokasi</th>
                            <th>Anggaran</th>
                            <th>Status</th>
                            <th className="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project) => (
                            <tr key={project.id} className="hover">
                                <td>
                                    <div className="font-bold">{project.title}</div>
                                    <div className="text-xs opacity-50 uppercase tracking-tighter">ID: PROJ-00{project.id}</div>
                                </td>
                                <td>{project.location}</td>
                                <td className="font-mono text-sm">{project.budget}</td>
                                <td>{getStatusBadge(project.status)}</td>
                                <td>
                                    <div className="flex justify-center gap-2">
                                        <button className="btn btn-ghost btn-xs text-info tooltip" data-tip="Lihat Detail">
                                            <ExternalLink size={16} />
                                        </button>
                                        <button className="btn btn-ghost btn-xs text-warning tooltip" data-tip="Edit">
                                            <Edit size={16} />
                                        </button>
                                        <button className="btn btn-ghost btn-xs text-error tooltip" data-tip="Hapus">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal Tambah Proyek */}
                <AddProjectModal />
            </div>
        </>
    );
}