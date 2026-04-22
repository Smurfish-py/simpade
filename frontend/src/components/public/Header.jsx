export default function Header() {
    return (
        <header className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <a href="/">
                    <img src="/logo/simpade_logo.png" alt="Logo Simpade"  aria-label="website logo" width={152} />
                </a>
            </div>
            <div className="navbar-center">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Dashboard</a></li>
                    <li><a>Proyek</a></li>
                    <li><a>Umpan balik</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <a href="" className="btn btn-ghost">Masuk</a>
                <a href="" className="btn btn-primary">Daftar</a>
            </div>
        </header>
    )
}