import { useState } from "react";
import { AdminHeader, AdminModal, InputModal, AdminChart } from "@/components/Admin";
import { ConfirmModal } from "@/components/Public";
import { BadgeDollarSign, BadgePercent, Wallet } from 'lucide-react';
import { openModal } from "@/utils/action";
import { DummyData, ChartDummy } from "@/utils/dummyData";

export default function Dashboard() {
    const [selectedData, setSelectedData] = useState(null);

    return (
        <>
            <AdminHeader headerTitle="Dashboard" />
            <main className="p-8">
                {/* Stats Section */}
                <div className="stats stats-vertical lg:stats-horizontal grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="stat bg-base-100 shadow">
                        <div className="stat-figure text-success">
                            <BadgeDollarSign size={40} />
                        </div>
                        <div className="stat-title">Pemasukan</div>
                        <div className="stat-value text-2xl">Rp. 20.000.000</div>
                        <div className="stat-desc">Data per Juli 2026</div>
                    </div>
                    
                    <div className="stat bg-base-100 shadow">
                        <div className="stat-figure text-error">
                            <BadgePercent size={40} />
                        </div>
                        <div className="stat-title">Pengeluaran</div>
                        <div className="stat-value text-2xl">Rp. 10.000.000</div>
                        <div className="stat-desc">Data per Juli 2026</div>
                    </div>
                    
                    <div className="stat bg-base-100 shadow">
                        <div className="stat-figure text-info">
                            <Wallet size={40} />
                        </div>
                        <div className="stat-title">Saldo Saat Ini</div>
                        <div className="stat-value text-2xl">Rp. 20.000.000</div>
                        <div className="stat-desc">Data per Juli 2026</div>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="grid grid-cols-1 lg:grid-cols-1 my-4 gap-4">
                    <AdminChart series={ChartDummy} />
                </div>

                {/* Table Section */}
                <div className="overflow-x-auto card shadow-sm bg-base-100">
                    <table className="table table-zebra">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Tanggal</th>
                                <th>Jenis</th>
                                <th>Kategori</th>
                                <th>Nominal</th>
                                <th>Penanggung Jawab</th>
                                <th>Keterangan</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DummyData?.map((item, index) => (
                                <tr 
                                    key={index} 
                                    className="hover:bg-base-300 cursor-pointer" 
                                    onClick={() => openModal("selected_modal", item, setSelectedData)}
                                >
                                    <th>{index + 1}</th>
                                    <td>{item?.tanggal}</td>
                                    <td>{item?.jenis}</td>
                                    <td>{item?.kategori}</td>
                                    <td>Rp. {item?.nominal?.toLocaleString('id-ID')}</td>
                                    <td>{item?.penanggung_jawab}</td>
                                    <td>{item?.keterangan}</td>
                                    <td>{item?.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modals */}
                <AdminModal data={selectedData} />
                <InputModal />
                <ConfirmModal action="logout" confirmStyle="btn-error" />
            </main>
        </>
    );
}