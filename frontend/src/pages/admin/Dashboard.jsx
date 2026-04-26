import { useState } from "react";
import { AdminHeader, AdminModal } from "@/components/Admin";
import { BadgeDollarSign, BadgePercent, Wallet } from 'lucide-react';

export default function Dashboard() {
    const [ selectedData, setSelectedData ] = useState(null);

    function openModal(data) {
        document.getElementById("selected_modal").showModal();
        setSelectedData(data);
    }

    const data = [
        {
            tanggal: "20 April 2026",
            jenis: "Pengeluaran",
            kategori: "Proyek Jembatan",
            nominal: 10000000,
            penanggung_jawab: "Bpk. Asep",
            keterangan: "Anggaran Jembatan Desa",
        },
        {
            tanggal: "20 April 2026",
            jenis: "Pemasukan",
            kategori: "APBD",
            nominal: 20000000,
            penanggung_jawab: "Bpk. Wahyu",
            keterangan: "APBD",
        },
    ]

    return (
        <>
            <AdminHeader headerTitle="Dashboard" />
            <main className="p-8">
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
                <div className="divider"></div>
                <h2 className="text-2xl font-semibold mb-6">Data Transaksi</h2>
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
                            </tr>
                        </thead>
                        <tbody>
                            { data?.map((item, index) => (
                                <tr key={index} className="hover:bg-base-300 cursor-pointer" onClick={() => openModal(item)} >
                                    <th>{ index + 1 }</th>
                                    <td>{ item?.tanggal }</td>
                                    <td>{ item?.jenis }</td>
                                    <td>{ item?.kategori }</td>
                                    <td>Rp. { item?.nominal?.toLocaleString('id-ID') }</td>
                                    <td>{ item?.penanggung_jawab }</td>
                                    <td>{ item?.keterangan }</td>
                                </tr>
                            )) }
                        </tbody>
                    </table>
                </div>
                <AdminModal data={ selectedData } />
            </main>
        </>
    )
}