import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import API from '../../api/axios';

export const LoginPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
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
            const res = await API.post('/auth/login', formData);
            
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            
            const userRole = res.data.user.role;

            if (userRole === 'admin' || userRole === 'superadmin') {
                navigate('/admin/dashboard');
            } else {
                navigate('/');
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Email atau password salah.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold justify-center mb-4 text-primary">
                        Login SIMPADE
                    </h2>
                    
                    {/* Alert Error */}
                    {error && (
                        <div className="alert alert-error shadow-sm mb-4 py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span className="text-sm">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        {/* Input Email */}
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="name@company.com" 
                                className="input input-bordered focus:input-primary w-full" 
                                onChange={handleChange} 
                                required 
                            />
                        </div>

                        {/* Input Password */}
                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="••••••••" 
                                className="input input-bordered focus:input-primary w-full" 
                                onChange={handleChange} 
                                required 
                            />
                            <label className="label">
                                <span className="label-text-alt link link-hover">Lupa password?</span>
                            </label>
                        </div>

                        {/* Tombol Login */}
                        <div className="form-control mt-6">
                            <button 
                                type="submit" 
                                className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Sedang Masuk' : 'Masuk'}
                            </button>
                        </div>
                    </form>

                    <div className="divider">ATAU</div>

                    <p className="text-sm text-center">
                        Belum punya akun?{' '}
                        <Link to="/register" className="link link-primary font-bold italic">
                            Daftar sekarang
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};