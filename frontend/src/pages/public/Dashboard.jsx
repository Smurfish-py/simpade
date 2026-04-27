import { useState } from "react"; // Tambahkan ini untuk handle data yang diklik
import { BadgeDollarSign, BadgePercent, Wallet } from 'lucide-react';
import { DummyData } from "@/utils/dummyData";
import PublicModal from "@/components/Public/Modal"; // Import modal publik yang tadi dibuat
import { openModal } from "@/utils/action"; // Pastikan fungsi openModal tersedia

export function DashboardPublic() {
    // State untuk menampung data yang sedang dipilih
    const [selectedData, setSelectedData] = useState(null);

    const handleRowClick = (item) => {
        setSelectedData(item);
        openModal("selected_modal"); // Memanggil fungsi untuk buka dialog
    };

    return (
        <>
            <main className="p-8">
                <div className="mb-10 mt-10">
                    <h1 className="text-4xl font-bold tracking-tight text-base-content">
                        Halo, Galih!
                    </h1>
                    <p className="text-base-content/60 mt-1 text-lg">
                        Selamat datang di Dashboard Simpade.
                    </p>
                    <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
                </div>

                {/* Stats Section */}
                <div className="stats stats-vertical lg:stats-horizontal grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="stat bg-base-100 shadow">
                        <div className="stat-figure text-success">
                            <BadgeDollarSign size={40} />
                        </div>
                        <div className="stat-title">Pemasukan</div>
                        <div className="stat-value text-2xl text-success">Rp. 20.000.000</div>
                        <div className="stat-desc">Update terakhir: Juli 2026</div>
                    </div>
                    
                    <div className="stat bg-base-100 shadow">
                        <div className="stat-figure text-error">
                            <BadgePercent size={40} />
                        </div>
                        <div className="stat-title">Pengeluaran</div>
                        <div className="stat-value text-2xl text-error">Rp. 10.000.000</div>
                        <div className="stat-desc">Update terakhir: Juli 2026</div>
                    </div>
                    
                    <div className="stat bg-base-100 shadow">
                        <div className="stat-figure text-info">
                            <Wallet size={40} />
                        </div>
                        <div className="stat-title">Saldo Saat Ini</div>
                        <div className="stat-value text-2xl text-info">Rp. 10.000.000</div>
                        <div className="stat-desc">Dana tersedia</div>
                    </div>
                </div>

                <div className="mt-8 mb-2">
                    <h2 className="text-xl font-bold tracking-tight text-base-content">Data Transaksi</h2>
                </div>

                <div className="overflow-x-auto card shadow-sm bg-base-100">
                    <table className="table table-zebra">
                        <thead className="bg-base-200">
                            <tr>
                                <th>No</th>
                                <th>Tanggal</th>
                                <th>Jenis</th>
                                <th>Kategori</th>
                                <th>Nominal</th>
                                <th>Penanggung Jawab</th>
                                <th>Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DummyData?.map((item, index) => (
                                <tr 
                                    key={index} 
                                    className="hover:bg-base-300 transition-colors cursor-pointer"
                                    onClick={() => handleRowClick(item)} // Tambahkan event click
                                >
                                    <th>{index + 1}</th>
                                    <td>{item?.tanggal}</td>
                                    <td>
                                        <span className={`font-bold ${item?.jenis === 'Pemasukan' ? 'text-success' : 'text-error'}`}>
                                            {item?.jenis}
                                        </span>
                                    </td>
                                    <td>{item?.kategori}</td>
                                    <td className="font-mono">Rp. {item?.nominal?.toLocaleString('id-ID')}</td>
                                    <td>{item?.penanggung_jawab}</td>
                                    <td className="max-w-xs truncate">{item?.keterangan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>

            {/* Render Modal di luar main tapi di dalam fragment */}
            <PublicModal data={selectedData} />
        </>
    );
}