import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../api/axios';

export default function LoginPage() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            const res = await API.post('/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            const userRole = res.data.user.role;
            if (userRole === 'admin' || userRole === 'superadmin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Email atau password salah.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="w-full max-w-sm">

                {/* Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-base-content">Selamat datang</h1>
                    <p className="text-base-content/50 text-sm mt-1">Masuk ke akun SIMPADE Anda</p>
                </div>

                {/* Error */}
                {error && (
                    <div className="alert alert-error mb-5 py-2.5 text-sm rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{error}</span>
                    </div>
                )}

                {/* Card */}
                <div className="bg-base-100 rounded-3xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Email */}
                        <div className="form-control">
                            <label className="label pb-1.5">
                                <span className="label-text font-semibold text-sm">Email</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-2xl focus-within:input-primary transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="nama@perusahaan.com"
                                    className="grow bg-transparent outline-none text-sm"
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label pb-1.5">
                                <span className="label-text font-semibold text-sm">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-3 rounded-2xl focus-within:input-primary transition-all duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <rect x="3" y="11" width="18" height="11" rx="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="••••••••"
                                    className="grow bg-transparent outline-none text-sm"
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="opacity-40 hover:opacity-70 transition-opacity"
                                    onClick={() => setShowPassword(p => !p)}
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                            <line x1="1" y1="1" x2="23" y2="23" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </label>
                            {/* Lupa Password — di bawah field, rata kanan */}
                            <div className="flex justify-end mt-1.5">
                                <Link
                                    to="/forgot-password"
                                    className="text-xs text-primary hover:underline"
                                >
                                    Lupa password?
                                </Link>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-1">
                            <button
                                type="submit"
                                className={`btn btn-primary w-full rounded-2xl gap-2 ${loading ? 'loading' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Sedang Masuk...' : (
                                    <>
                                        Masuk
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="divider text-xs text-base-content/30 my-5">ATAU</div>

                    <p className="text-center text-sm text-base-content/50">
                        Belum punya akun?{' '}
                        <Link to="/register" className="link link-primary font-bold">
                            Daftar sekarang
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};