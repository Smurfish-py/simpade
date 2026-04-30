import React, { Suspense } from 'react';
import { ProjectData } from "@/utils/DummyData";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const ProjectMap = React.lazy(() => import('@/components/ProjectMap'));

export default function ProjectPublic() {
    return (
        <>
            <main className="p-8">
                <div className="mb-10 mt-10">
                    <h1 className="text-4xl font-bold tracking-tight text-base-content">
                        Proyek Desa
                    </h1>
                    <p className="text-base-content/60 mt-1 text-lg">
                        Daftar pengerjaan dan progres pembangunan Proyek Desa.
                    </p>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
                </div>

                <Suspense fallback={<div className="h-96 w-full bg-base-200 animate-pulse rounded-xl mb-8">Loading Map...</div>}>
                    <ProjectMap data={ProjectData} />
                </Suspense>

                <div className="mt-8 mb-2">
                    <h2 className="text-xl font-bold tracking-tight text-base-content">Data Proyek</h2>
                </div>

                <div className="overflow-x-auto card shadow-sm bg-base-100 border border-base-200">
                    <table className="table table-zebra w-full">
                        <thead className="bg-base-200">
                            <tr>
                                <th className="w-16">No</th>
                                <th>Nama Proyek</th>
                                <th>Lokasi</th>
                                <th>Tanggal Mulai</th>
                                <th>Est. Selesai</th>
                                <th className="w-48">Persentase</th>
                                <th className="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProjectData?.map((project, index) => (
                                <tr key={project.id} className="hover:bg-base-200 transition-colors">
                                    <th>{index + 1}</th>
                                    <td className="font-semibold text-primary">{project.nama_proyek}</td>
                                    <td>{project.lokasi}</td>
                                    <td>{project.tanggal_mulai}</td>
                                    <td>{project.est_selesai}</td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <progress 
                                                className={`progress w-24 ${project.persentase === 100 ? 'progress-success' : 'progress-primary'}`} 
                                                value={project.persentase} 
                                                max="100"
                                            ></progress>
                                            <span className="text-xs font-bold">{project.persentase}%</span>
                                        </div>
                                    </td>
                                    <td className="text-center">
                                        <Link 
                                            to={`/projectDetail/${project.id}`} 
                                            className="btn btn-sm btn-soft btn-primary gap-2"
                                        >
                                            <ExternalLink size={16} />
                                            Detail
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}