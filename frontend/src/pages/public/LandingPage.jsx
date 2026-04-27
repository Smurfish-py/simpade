export default function LandingPage() {
    return (
        <>
            <header className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a href="/">
                        <img src="/logo/simpade_logo.png" alt="Logo Simpade" width={152} />
                    </a>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal">
                        <li><a>Beranda</a></li>
                        <li><a>Proyek</a></li>
                        <li><a>Aspirasi</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="space-x-1">
                        <a className="btn btn-ghost">Masuk</a>
                        <a className="btn btn-primary">Daftar</a>
                    </div>
                </div>
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </>
    )
}