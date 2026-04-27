export default function Modal({ data }) {
    const jenisStyle = data?.jenis?.toLowerCase() === "pemasukan" ? "success" : "error";
    
    return (
        <dialog id="selected_modal" className="modal">
            <div className="modal-box lg:min-w-200">
                <h3 className="text-2xl font-bold mb-2">{ data?.kategori }</h3>
                <div>
                    <span className={`badge badge-sm badge-soft badge-info`}>{ data?.tanggal }</span>
                    <span className={`badge badge-sm badge-soft badge-${ jenisStyle }`}>{ data?.jenis }</span>
                </div>
                <div className="divider"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div className="skeleton w-full min-h-80 h-full"></div>

                    <div className="">
                        <p>Total { data?.jenis }</p>
                        <h2 className={`text-4xl text-${ jenisStyle } font-semibold mb-4`}>Rp. { data?.nominal?.toLocaleString('id-ID') }</h2>
                        <div className="collapse collapse-arrow bg-base-200 border border-base-300">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold">Detail Anggaran</div>
                            <div className="collapse-content text-sm">
                                <p className="font-semibold">Penanggung jawab: <span className="font-normal">{ data?.penanggung_jawab }</span></p>
                                <div className="divider"></div>
                                <p className="font-semibold">Status: <span className="font-normal">{ data?.status }</span></p>
                                <div className="divider"></div>
                                <p className="font-semibold">Keterangan</p>
                                { data?.keterangan }
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Tutup</button>
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