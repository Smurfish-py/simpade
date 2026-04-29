import { Link } from "react-router-dom";
import { 
    Menu, 
    BarChart3, 
    MessageSquare, 
    FileText, 
    Users, 
    ChevronRight,
    HelpCircle, 
    Search
} from "lucide-react";

export default function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* Navigasi (Header) */}
            <header className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <Menu className="h-5 w-5" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Beranda</Link></li>
                            <li><Link to="/projects">Proyek</Link></li>
                            <li><Link to="/feedback">Aspirasi</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="ml-4">
                        <img src="/logo/simpade_logo.png" alt="Logo Simpade" width={152} />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium">
                        <li><Link to="/">Beranda</Link></li>
                        <li><Link to="/projects">Proyek</Link></li>
                        <li><Link to="/feedback">Aspirasi</Link></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="space-x-2 mr-4">
                        <Link to="/login" className="btn btn-ghost hidden sm:inline-flex">
                            Masuk
                        </Link>
                        <Link to="/register" className="btn btn-primary">
                            Daftar
                        </Link>
                    </div>
                </div>
            </header>

            {/* Konten Utama */}
            <main className="grow" id="beranda">
                {/* Hero Section */}
                <section className="hero min-h-[90vh] bg-base-200" style={{
                    backgroundImage: "url('/images/hero.jpg')"
                }}>
                    <div className="hero-overlay"></div>
                    <div className="flex items-end border w-full h-full p-8">
                        <div className="max-w-2xl">
                            <h1 className="text-5xl font-bold text-primary-content leading-tight">
                                Transparansi Pembangunan Desa untuk Semua
                            </h1>
                            <p className="py-6 text-lg text-primary-content/80">
                                Simpanan Dana Desa (SIMPADE) hadir untuk memudahkan Anda dalam memantau setiap proyek pembangunan dan menyuarakan aspirasi demi kemajuan desa kita bersama.
                            </p>
                            <div className="space-x-4">
                                <Link to="/projects" className="btn btn-lg group">
                                    Lihat Proyek
                                    <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link to="/feedback" className="btn text-primary-content hover:text-primary btn-outline btn-lg">Kirim Aspirasi</Link>
                            </div>
                            <p className="text-xs text-primary-content mt-4">
                                Photo by: <a href="https://www.pexels.com/photo/three-elderly-people-standing-near-concrete-houses-5153194/" target="_blank" rel="noreferrer" className="link">Tom Fisk (pexels)</a>
                            </p>
                        </div>
                    </div>
                </section>

                {/* Layanan Utama Section */}
                <section className="py-20 bg-base-100">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Layanan Utama SIMPADE</h2>
                            <p className="text-base-content/70">Berpartisipasi aktif dalam memajukan lingkungan Anda melalui fitur-fitur kami.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="card bg-base-100 shadow-sm border border-base-200">
                                <div className="card-body items-center text-center">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                                        <BarChart3 className="w-8 h-8" />
                                    </div>
                                    <h3 className="card-title">Pantau Proyek</h3>
                                    <p className="text-sm text-base-content/70">Lihat status, alokasi dana, dan perkembangan proyek infrastruktur secara real-time dan transparan.</p>
                                </div>
                            </div>

                            <div className="card bg-base-100 shadow-sm border border-base-200">
                                <div className="card-body items-center text-center">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4 text-secondary">
                                        <MessageSquare className="w-8 h-8" />
                                    </div>
                                    <h3 className="card-title">Ruang Aspirasi</h3>
                                    <p className="text-sm text-base-content/70">Sampaikan masukan, usulan, maupun umpan balik langsung kepada perangkat desa dengan mudah.</p>
                                </div>
                            </div>

                            <div className="card bg-base-100 shadow-sm border border-base-200">
                                <div className="card-body items-center text-center">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 text-accent">
                                        <FileText className="w-8 h-8" />
                                    </div>
                                    <h3 className="card-title">Keterbukaan Data</h3>
                                    <p className="text-sm text-base-content/70">Akses dokumen publik, laporan anggaran, dan pencapaian target kerja perangkat desa kapan saja.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Statistik Section */}
                <section className="py-20 bg-base-200">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold mb-4">Transparansi dalam Angka</h2>
                            <p className="text-base-content/70">Pencapaian dan partisipasi warga desa hingga saat ini.</p>
                        </div>
                        
                        <div className="flex justify-center">
                            <div className="stats stats-vertical lg:stats-horizontal shadow w-full max-w-4xl bg-base-100">
                                <div className="stat place-items-center py-8">
                                    <div className="stat-title">Proyek Berjalan</div>
                                    <div className="stat-value text-primary">12</div>
                                    <div className="stat-desc mt-2">Tahun Anggaran 2026</div>
                                </div>
                                
                                <div className="stat place-items-center py-8">
                                    <div className="stat-title">Aspirasi Diselesaikan</div>
                                    <div className="stat-value text-secondary">84</div>
                                    <div className="stat-desc mt-2">Dari total 102 laporan</div>
                                </div>
                                
                                <div className="stat place-items-center py-8">
                                    <div className="stat-title">Warga Aktif</div>
                                    <div className="stat-value">1,200+</div>
                                    <div className="stat-desc mt-2">Telah mendaftar & berpartisipasi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-base-100">
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div className="text-center mb-12">
                            <HelpCircle className="mx-auto mb-4 h-12 w-12 text-primary opacity-20" />
                            <h2 className="text-3xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h2>
                            <p className="text-base-content/70">Temukan jawaban cepat untuk pertanyaan umum mengenai penggunaan SIMPADE.</p>
                        </div>

                        <div className="join join-vertical w-full bg-base-100 shadow-sm border border-base-200">
                            <div className="collapse collapse-arrow join-item border-b border-base-200">
                                <input type="radio" name="faq-accordion" defaultChecked /> 
                                <div className="collapse-title text-xl font-medium">
                                    Bagaimana cara saya memantau progres proyek?
                                </div>
                                <div className="collapse-content text-base-content/80"> 
                                    <p>Anda dapat mengakses halaman "Proyek" untuk melihat daftar seluruh pembangunan. Klik pada salah satu proyek untuk melihat rincian anggaran, foto progres, dan status pengerjaan saat ini.</p>
                                </div>
                            </div>
                            
                            <div className="collapse collapse-arrow join-item border-b border-base-200">
                                <input type="radio" name="faq-accordion" /> 
                                <div className="collapse-title text-xl font-medium">
                                    Apakah aspirasi saya akan dibaca oleh perangkat desa?
                                </div>
                                <div className="collapse-content text-base-content/80"> 
                                    <p>Tentu. Setiap aspirasi yang masuk akan diverifikasi oleh admin desa. Anda dapat memantau status aspirasi Anda (Menunggu, Diproses, atau Selesai) melalui dashboard akun Anda.</p>
                                </div>
                            </div>

                            <div className="collapse collapse-arrow join-item">
                                <input type="radio" name="faq-accordion" /> 
                                <div className="collapse-title text-xl font-medium">
                                    Siapa yang bisa mendaftar akun di SIMPADE?
                                </div>
                                <div className="collapse-content text-base-content/80"> 
                                    <p>Sistem ini terbuka untuk seluruh warga desa yang ingin berpartisipasi aktif dalam pengawasan pembangunan. Pendaftaran memerlukan data yang valid untuk memastikan aspirasi berasal dari warga asli.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <aside>
                    <Search className="size-12" />
                    <p>
                        SIMPADE - Simpanan Dana Desa
                        <br />
                        est. 2026
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Navigasi Cepat</h6>
                    <a href="#beranda">Beranda</a>
                    <a href="/register">Daftar</a>
                    <a href="/login">login</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Pengembang</h6>
                    <a href="https://github.com/galhprmnrzk">Galih Permana Rizki</a>
                    <a href="https://github.com/Smurfish-py/">Muhamad Rifqi Kurniawan</a>
                    <a href="https://github.com/rasyairham">Rasya Irham Fadhilah</a>
                </nav>
            </footer>
        </div>
    );
}