import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../api/axios';

export const RegisterPage = () => {
    const [formData, setFormData] = useState({ nama: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await API.post('/auth/register', formData);
            // Menggunakan class daisyUI untuk alert sukses bisa dilakukan via modal atau toast, 
            // tapi kita gunakan flow navigate ke login sesuai kode awalmu.
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registrasi Gagal.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold justify-center mb-4 text-secondary">
                        Daftar SIMPADE
                    </h2>
                    
                    {/* Alert Error */}
                    {error && (
                        <div className="alert alert-error shadow-sm mb-4 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-2">
                        {/* Nama Lengkap */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Nama Lengkap</span>
                            </label>
                            <input 
                                type="text" 
                                name="nama" 
                                placeholder="Ibra Ibrahim" 
                                className="input input-bordered focus:input-secondary w-full" 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        {/* Email */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="ibra@example.com" 
                                className="input input-bordered focus:input-secondary w-full" 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="••••••••" 
                                className="input input-bordered focus:input-secondary w-full" 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        {/* Tombol Register */}
                        <div className="form-control mt-8">
                            <button 
                                type="submit" 
                                className={`btn btn-secondary w-full ${loading ? 'loading' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Memproses...' : 'Buat Akun'}
                            </button>
                        </div>
                    </form>

                    <div className="divider">SUDAH PUNYA AKUN?</div>

                    <p className="text-sm text-center">
                        <Link to="/login" className="link link-secondary font-bold">
                            Masuk ke akun Anda
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};