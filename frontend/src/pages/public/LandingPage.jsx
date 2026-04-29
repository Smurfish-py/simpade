import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            <header className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <Link to="/">
                        <img src="/logo/simpade_logo.png" alt="Logo Simpade" width={152} />
                    </Link>
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
                        <Link to="/login" className="btn btn-ghost">
                            Masuk
                        </Link>
                        <Link to="/register" className="btn btn-primary">
                            Daftar
                        </Link>
                    </div>
                </div>
            </header>

            <main></main>
            <footer></footer>
        </>
    );
}