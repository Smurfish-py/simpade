import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import API from '../../api/axios';

export const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await API.post('/auth/forgot-password', { email });
            setSuccess(true);
        } catch (err) {
            setError(err.response?.data?.message || 'Gagal mengirim email. Coba lagi.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
            <div className="w-full max-w-sm">

                {/* Brand */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-base-content">Lupa password?</h1>
                    <p className="text-base-content/50 text-sm mt-1">
                        Masukkan email Anda untuk menerima tautan reset
                    </p>
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

                    {success ? (
                        /* Success State */
                        <div className="flex flex-col items-center text-center space-y-4 py-2">
                            <div className="bg-success/10 rounded-full p-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h2 className="font-bold text-base-content text-base">Email terkirim!</h2>
                                <p className="text-base-content/50 text-sm mt-1">
                                    Kami telah mengirim tautan reset password ke <span className="font-semibold text-base-content">{email}</span>. Periksa kotak masuk Anda.
                                </p>
                            </div>
                            <div className="w-full pt-2">
                                <Link to="/login" className="btn btn-primary w-full rounded-2xl gap-2">
                                    Kembali ke Login
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        /* Form State */
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </label>
                            </div>

                            {/* Submit */}
                            <div className="pt-1">
                                <button
                                    type="submit"
                                    className={`btn btn-primary w-full rounded-2xl gap-2 ${loading ? 'loading' : ''}`}
                                    disabled={loading}
                                >
                                    {loading ? 'Mengirim...' : (
                                        <>
                                            Kirim Tautan Reset
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}

                    {!success && (
                        <>
                            <div className="divider text-xs text-base-content/30 my-5">ATAU</div>
                            <p className="text-center text-sm text-base-content/50">
                                Ingat password Anda?{' '}
                                <Link to="/login" className="link link-primary font-bold">
                                    Masuk sekarang
                                </Link>
                            </p>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};