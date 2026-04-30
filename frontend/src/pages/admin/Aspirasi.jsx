import React, { useState } from 'react';
import { 
    MessageSquare, 
    Search, 
    Eye, 
    Trash2, 
    CheckCircle2, 
    Clock, 
    Filter,
    User
} from 'lucide-react';
import { AdminHeader } from '@/components/admin';

export default function AdminAspirations() {
  // State untuk menyimpan data aspirasi (Dummy Data)
    const [aspirations] = useState([
        { 
        id: 1, 
        sender: "Siti Aminah", 
        subject: "Penerangan Jalan", 
        message: "Mohon diperhatikan lampu jalan di RT 05 banyak yang mati, membahayakan warga saat malam hari.", 
        date: "25 April 2026", 
        status: "Menunggu" 
        },
        { 
        id: 2, 
        sender: "Agus Pratama", 
        subject: "Sampah Selokan", 
        message: "Selokan di depan balai desa tersumbat sampah plastik, mohon bantuan untuk kerja bakti atau pengangkutan.", 
        date: "22 April 2026", 
        status: "Diproses" 
        },
        { 
        id: 3, 
        sender: "Rina Wijaya", 
        subject: "Jadwal Posyandu", 
        message: "Terima kasih atas bantuan vitamin bulan ini, sangat membantu balita di Dusun Kidul.", 
        date: "20 April 2026", 
        status: "Selesai" 
        },
    ]);

    // State untuk aspirasi yang sedang dipilih/dibuka di modal
    const [selectedAspiration, setSelectedAspiration] = useState(null);

    const getStatusBadge = (status) => {
        switch (status) {
        case "Selesai": return <div className="badge badge-soft badge-success gap-2">Selesai</div>;
        case "Diproses": return <div className="badge badge-soft badge-info gap-2">Diproses</div>;
        default: return <div className="badge badge-soft badge-warning gap-2">Menunggu</div>;
        }
    };

    const handleOpenModal = (aspirasi) => {
        setSelectedAspiration(aspirasi);
        document.getElementById('detail_aspiration_modal').showModal();
    };

    return (
        <>
            <AdminHeader headerTitle="Aspirasi" />
            <div className="p-6 bg-base-100 min-h-screen">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold flex items-center gap-3">
                        <MessageSquare className="text-primary" />
                        Manajemen Aspirasi Warga
                    </h1>
                    <p className="text-base-content/60">Baca dan tindak lanjuti setiap masukan dari masyarakat.</p>
                </div>

                {/* Kontrol Pencarian & Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="join grow">
                        <div className="bg-base-200 join-item flex items-center px-4">
                            <Search size={18} />
                        </div>
                        <input className="input input-bordered join-item w-full" placeholder="Cari berdasarkan nama atau subjek..." />
                    </div>
                    <button className="btn btn-outline gap-2">
                        <Filter size={18} />
                        Filter
                    </button>
                </div>

                {/* Tabel Aspirasi */}
                <div className="overflow-x-auto rounded-xl border border-base-200">
                    <table className="table table-zebra w-full">
                        <thead className="bg-base-200/50">
                            <tr>
                                <th>Pengirim</th>
                                <th>Subjek</th>
                                <th>Tanggal</th>
                                <th>Status</th>
                                <th className="text-center">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aspirations.map((item) => (
                                <tr key={item.id} className="hover">
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar placeholder">
                                                <div className="bg-neutral text-neutral-content rounded-full w-8">
                                                    <span>{item.sender.charAt(0)}</span>
                                                </div>
                                            </div>
                                            <span className="font-medium">{item.sender}</span>
                                        </div>
                                    </td>
                                    <td className="font-semibold text-primary">{item.subject}</td>
                                    <td>{item.date}</td>
                                    <td>{getStatusBadge(item.status)}</td>
                                    <td className="flex justify-center gap-2">
                                        <button 
                                            className="btn btn-square btn-ghost btn-sm tooltip" 
                                            data-tip="Baca Pesan"
                                            onClick={() => handleOpenModal(item)}
                                        >
                                            <Eye size={18} className="text-info" />
                                        </button>
                                        <button className="btn btn-square btn-ghost btn-sm tooltip" data-tip="Hapus">
                                            <Trash2 size={18} className="text-error" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Modal Detail Aspirasi */}
                <dialog id="detail_aspiration_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box max-w-lg">
                        {selectedAspiration && (
                            <>
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="font-bold text-2xl">{selectedAspiration.subject}</h3>
                                        <div className="flex items-center gap-2 text-sm text-base-content/60 mt-1">
                                            <User size={14} />
                                            {selectedAspiration.sender} • {selectedAspiration.date}
                                        </div>
                                    </div>
                                    {getStatusBadge(selectedAspiration.status)}
                                </div>

                                <div className="bg-base-200 p-4 rounded-lg italic text-base-content/80 mb-6">
                                    "{selectedAspiration.message}"
                                </div>

                                <div className="space-y-4">
                                    <h4 className="font-bold">Tindak Lanjut Admin:</h4>
                                    <select className="select select-bordered w-full">
                                        <option disabled selected>Ubah Status Aspirasi</option>
                                        <option>Menunggu</option>
                                        <option>Diproses</option>
                                        <option>Selesai</option>
                                    </select>
                                    <textarea className="textarea textarea-bordered w-full h-24" placeholder="Tuliskan respon atau balasan untuk warga..."></textarea>
                                </div>

                                <div className="modal-action">
                                    <form method="dialog" className="flex gap-2 w-full">
                                        <button className="btn grow">Tutup</button>
                                        <button className="btn btn-primary grow gap-2">
                                            <CheckCircle2 size={18} />
                                            Simpan Perubahan
                                        </button>
                                    </form>
                                </div>
                            </>
                        )}
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </>
    );
}