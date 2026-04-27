export default function Modal({ data }) {  
    const jenisStyle = {
        pemasukan: {
            badge: "badge-success",
            text: "text-success"
        },
        pengeluaran: {
            badge: "badge-error",
            text: "text-error"
        },
    }

    const jenis = data?.jenis?.toLowerCase();

    return (
        <dialog id="selected_modal" className="modal">
            <div className="modal-box lg:max-w-4xl"> {/* Diperlebar agar nyaman di desktop */}
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl font-bold">{ data?.kategori || "Detail Transaksi" }</h3>
                        <div className="mt-2 flex gap-2">
                            <span className="badge badge-sm badge-soft badge-info">{ data?.tanggal }</span>
                            <span className={`badge badge-sm badge-soft ${ jenisStyle[jenis]?.badge || "badge-ghost" }`}>
                                { data?.jenis }
                            </span>
                        </div>
                    </div>
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                    </form>
                </div>

                <div className="divider"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Placeholder Foto Dokumentasi */}
                    <div className="rounded-xl overflow-hidden bg-base-200 flex items-center justify-center min-h-64 border border-base-300">
                        {data?.foto ? (
                            <img src={data.foto} alt="Dokumentasi" className="w-full h-full object-cover" />
                        ) : (
                            <div className="text-center opacity-40">
                                <p className="text-sm italic">Foto dokumentasi tidak tersedia</p>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-sm opacity-60">Nominal Transaksi</p>
                            <h2 className={`text-4xl ${ jenisStyle[jenis]?.text || "" } font-bold mb-6`}>
                                Rp { data?.nominal?.toLocaleString('id-ID') || "0" }
                            </h2>

                            <div className="space-y-4">
                                <div className="bg-base-200 p-4 rounded-lg border border-base-300">
                                    <p className="text-xs uppercase font-bold opacity-50 mb-1">Penanggung Jawab</p>
                                    <p className="font-semibold text-base">{ data?.penanggung_jawab || "-" }</p>
                                </div>

                                <div className="bg-base-200 p-4 rounded-lg border border-base-300">
                                    <p className="text-xs uppercase font-bold opacity-50 mb-1">Keterangan</p>
                                    <p className="text-sm leading-relaxed">
                                        { data?.keterangan || "Tidak ada keterangan tambahan." }
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex items-center gap-2">
                            <div className={`badge badge-outline ${data?.status === 'Aktif' ? 'badge-success' : 'badge-warning'}`}>
                                Status: { data?.status || "Selesai" }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-primary px-8">Tutup</button>
                    </form>
                </div>
            </div>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export function InputModal() {
    return (
        <dialog id="input_modal" className="modal">
            <form className="modal-box">
                <h2 className="text-2xl font-semibold">Input Data Transaksi</h2>
                <div className="divider"></div>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Judul Anggaran</legend>
                    <input type="text" className="input w-full" placeholder="Masukkan judul" />
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Deskripsi Anggaran</legend>
                    <textarea className="textarea h-24 min-w-full" placeholder="Masukkan deskripsi transaksi"></textarea>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Jenis Anggaran</legend>
                    <select className="select w-full">
                        <option value="" disabled selected>Pilih jenis anggaran</option>
                        <option value="">Pengeluaran</option>
                        <option value="">Pemasukan</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Status Anggaran</legend>
                    <select className="select w-full">
                        <option value="" disabled selected>Pilih status anggaran</option>
                        <option value="">Aktif</option>
                        <option value="">Nonaktif</option>
                        <option value="">Pending</option>
                    </select>
                </fieldset>
                <fieldset className="fieldset">
                    <legend className="fieldset-legend">Foto Dokumentasi</legend>
                    <input type="file" className="file-input file-input-primary w-full" />
                </fieldset>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Batal</button>
                    </form>
                    <button type="submit" className="btn btn-primary">Kirim data</button>
                </div>
            </form>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}