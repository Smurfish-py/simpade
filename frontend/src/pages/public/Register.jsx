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
            alert('Registrasi Berhasil! Silahkan Login.');
            navigate('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Registrasi Gagal.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-[80vh] bg-gray-50">
            <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Daftar SIMPADE</h2>
                
                {error && (
                    <div className="p-3 mb-4 text-sm text-red-700 bg-red-100 rounded-lg text-center">
                        {error}
                    </div>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Nama Lengkap</label>
                        <input type="text" name="nama" onChange={handleChange} required 
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            placeholder="Ibra Ibrahim" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" onChange={handleChange} required 
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            placeholder="ibra@example.com" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                        <input type="password" name="password" onChange={handleChange} required 
                            className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                            placeholder="••••••••" />
                    </div>
                    <button type="submit" disabled={loading}
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 font-bold rounded-lg px-5 py-2.5 transition duration-200">
                        {loading ? 'Sedang Memproses...' : 'Buat Akun'}
                    </button>
                </form>

                <p className="mt-6 text-sm text-center text-gray-600">
                    Sudah punya akun? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Masuk</Link>
                </p>
            </div>
        </div>
    );
};