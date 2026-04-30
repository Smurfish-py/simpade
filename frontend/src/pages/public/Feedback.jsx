import { DummyFeedback } from "@/utils/DummyData";
import React, { useState } from 'react';
import { Send, MessageSquare, User, Mail, Info } from 'lucide-react';

export default function Feedback() {
    const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus(true);
        // Simulasi pengiriman data
        setTimeout(() => setStatus(false), 3000);
    };

    return (
        <main className="p-8">
            {/* Header Section */}
            <div className="mb-10 mt-10">
                <h1 className="text-4xl font-bold tracking-tight text-base-content">
                    Aspirasi & Laporan
                </h1>
                <p className="text-base-content/60 mt-1 text-lg">
                    Sampaikan pendapat Anda mengenai pembangunan di wilayah kami.
                </p>
                <div className="h-1 w-20 bg-primary mt-4 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Kolom Kiri: Informasi */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="card bg-[#1B4332] text-white shadow-xl p-6">
                        <h2 className="card-title mb-4">Kenapa Suara Anda Penting?</h2>
                        <p className="text-sm opacity-90 leading-relaxed">
                            Setiap masukan yang Anda berikan membantu kami memantau transparansi dan kualitas proyek infrastruktur secara lebih baik.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-lg">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <div className="text-xl font-bold">{DummyFeedback.length}</div>
                                <div className="text-xs opacity-70">Aspirasi Diterima</div>
                            </div>
                        </div>
                    </div>

                    <div className="alert bg-base-100 border border-base-200 shadow-sm text-sm">
                        <Info size={20} className="text-primary" />
                        <span>Respon akan diberikan maksimal 3x24 jam kerja.</span>
                    </div>
                </div>

                {/* Kolom Kanan: Form Feedback */}
                <div className="lg:col-span-2">
                    <div className="card bg-base-100 border border-base-200 shadow-sm p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Nama */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Nama Lengkap</span>
                                    </label>
                                    <div className="relative">
                                        <input type="text" placeholder="Masukan Nama Anda" className="input input-bordered w-full pl-10" required />
                                        <User className="absolute left-3 top-3.5 text-base-content/40" size={18} />
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <div className="relative">
                                        <input type="email" placeholder="Masukan Email Anda" className="input input-bordered w-full pl-10" required />
                                        <Mail className="absolute left-3 top-3.5 text-base-content/40" size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* Jenis Feedback */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Kategori</span>
                                </label>
                                <select className="select select-bordered w-full">
                                    <option>Saran Pembangunan</option>
                                    <option>Laporan Kerusakan</option>
                                    <option>Masalah Teknis Website</option>
                                    <option>Lainnya</option>
                                </select>
                            </div>

                            {/* Pesan */}
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Pesan Anda</span>
                                </label>
                                <textarea className="textarea textarea-bordered w-full" placeholder="Tuliskan masukan atau laporan Anda secara detail..."></textarea>
                            </div>

                            {/* Submit Button */}
                            <button className={`btn btn-primary w-full gap-2 ${status ? 'loading' : ''}`} disabled={status}>
                                {!status && <Send size={18} />}
                                {status ? 'Mengirim...' : 'Kirim Aspirasi'}
                            </button>

                            {status && (
                                <div className="text-center text-success font-medium mt-4">
                                    Terima kasih! Masukan Anda telah kami terima.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <div className="flex items-center gap-3 mb-8">
                    <h2 className="text-2xl font-bold text-base-content">Aspirasi Terbaru</h2>
                    <div className="badge badge-primary badge-outline">{DummyFeedback.length} Masukan</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DummyFeedback.map((item) => (
                        <div key={item.id} className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className="card-body p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`avatar placeholder`}>
                                        <div className={`${item.warna} text-white rounded-full w-10`}>
                                            <span className="text-xs font-bold">{item.inisial}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm">{item.nama}</h4>
                                        <p className="text-[10px] opacity-50 uppercase tracking-wider">{item.tanggal}</p>
                                    </div>
                                </div>
                                
                                <div className="badge badge-ghost badge-sm mb-3 text-[10px] font-semibold uppercase">
                                    {item.kategori}
                                </div>
                                
                                <p className="text-sm text-base-content/80 leading-relaxed italic">
                                    "{item.pesan}"
                                </p>

                                <div className="card-actions justify-end mt-4 pt-4 border-t border-base-100">
                                    <div className="flex items-center gap-1 text-[10px] text-success font-bold">
                                        <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                                        Terverifikasi
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}