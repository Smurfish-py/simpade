import React from 'react';
import { 
    User, 
    Mail, 
    MapPin, 
    ShieldCheck, 
    Edit3, 
    LogOut, 
    Lock,
    CreditCard
} from 'lucide-react';

export default function ProfilePage() {
  // Data dummy user
    const user = {
        name: "Budi Santoso",
        email: "budi.santoso@email.com",
        nik: "3201234567890001",
        role: "Warga",
        address: "RT 03 RW 05, Dusun Krajan, Desa Simpade",
        joinedAt: "12 Januari 2026",
        avatar: "/placeholder/profile_picture.png" // Mengacu pada struktur folder Anda
    };

    return (
        <div className="p-6 bg-base-200 min-h-screen font-sans">
            <div className="max-w-4xl mx-auto">
                <div className="card bg-base-100 shadow-sm overflow-hidden mb-6">
                    <div className="h-32 bg-primary w-full"></div>
                    <div className="card-body -mt-16 flex flex-col items-center sm:flex-row sm:items-end sm:gap-6">
                        <div className="avatar">
                            <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-lg bg-base-100">
                                <img src={user.avatar} alt="Avatar" />
                            </div>
                        </div>
                        <div className="grow text-center sm:text-left mt-4 sm:mt-0">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                <h1 className="text-3xl font-bold">{user.name}</h1>
                                <div className="badge badge-soft badge-secondary">{user.role}</div>
                            </div>
                        <p className="text-base-content/60">Terdaftar sejak: {user.joinedAt}</p>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <button className="btn btn-outline btn-primary btn-sm gap-2">
                                <Edit3 size={16} />
                                Edit Profil
                            </button>
                        </div>
                    </div>
                </div>
                <div className='divider'>Informasi Anda</div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Kolom Kiri: Info Detail */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="card bg-base-100 shadow-sm border border-base-200">
                            <div className="card-body">
                                <h2 className="card-title text-lg mb-4 flex items-center gap-2">
                                    <User size={20} className="text-primary" />
                                    Informasi Personal
                                </h2>
                    
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="label text-xs uppercase font-semibold text-base-content/50 p-0">Nomor Induk Kependudukan (NIK)</label>
                                        <p className="font-medium flex items-center gap-2 mt-1">
                                            <CreditCard size={16} className="opacity-40" />
                                            {user.nik}
                                        </p>
                                    </div>
                                    <div>
                                        <label className="label text-xs uppercase font-semibold text-base-content/50 p-0">Alamat Email</label>
                                        <p className="font-medium flex items-center gap-2 mt-1">
                                            <Mail size={16} className="opacity-40" />
                                            {user.email}
                                        </p>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="label text-xs uppercase font-semibold text-base-content/50 p-0">Alamat Lengkap</label>
                                        <p className="font-medium flex items-center gap-2 mt-1">
                                            <MapPin size={16} className="opacity-40" />
                                            {user.address}
                                        </p>
                                    </div>
                                </div>
                                <div className='divider divider-start'>Bantuan admin</div>
                                <div className="card bg-primary text-primary-content">
                                    <div className="card-body items-center text-center p-6">
                                        <p className="text-sm opacity-90">Butuh bantuan terkait data kependudukan?</p>
                                        <button className="btn btn-sm btn-ghost border-white/20 mt-2">Hubungi Admin</button>
                                    </div>
                                </div>
                                <div className="divider my-2"></div>
                    
                                <div className="flex items-center gap-2 text-success text-sm font-medium">
                                    <ShieldCheck size={18} />
                                    Akun Telah Terverifikasi Sistem Desa
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Kolom Kanan: Pengaturan Akun */}
                    <div className="space-y-6">
                        <div className="card bg-base-100 shadow-sm border border-base-200">
                            <div className="card-body p-4">
                                <h3 className="font-bold mb-4 px-2">Keamanan & Sesi</h3>
                                <ul className="menu bg-base-100 w-full p-0 gap-1">
                                    <li>
                                        <button className="btn btn-soft btn-warning">
                                            <span className="flex items-center gap-3">
                                                <Lock size={18} /> Ganti Kata Sandi
                                            </span>
                                        </button>
                                    </li>
                                    <div className='divider'></div>
                                    <li>
                                        <button className="btn btn-soft btn-error">
                                            <span className="flex items-center gap-3 font-semibold">
                                                <LogOut size={18} /> Keluar Aplikasi
                                            </span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}