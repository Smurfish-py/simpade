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
            <div className="modal-box lg:min-w-200">
                <h3 className="text-2xl font-bold mb-2">{ data?.kategori }</h3>
                <div>
                    <span className={`badge badge-sm badge-soft badge-info`}>{ data?.tanggal }</span>
                    <span className={`badge badge-sm badge-soft ${ jenisStyle[jenis]?.badge }`}>{ data?.jenis }</span>
                </div>
                <div className="divider"></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                    <div className="skeleton w-full h-80"></div>

                    <div className="">
                        <p>Total { data?.jenis }</p>
                        <h2 className={`text-4xl ${ jenisStyle[jenis]?.text } font-semibold mb-4`}>Rp. { data?.nominal?.toLocaleString('id-ID') }</h2>
                        <div className="collapse collapse-arrow bg-base-200 border border-base-300">
                            <input type="checkbox" />
                            <div className="collapse-title font-semibold">Detail Anggaran</div>
                            <div className="collapse-content text-sm">
                                <p className="font-semibold">Penanggung jawab: <span className="font-normal">{ data?.penanggung_jawab }</span></p>
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