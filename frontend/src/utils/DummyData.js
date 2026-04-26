const DummyData = [
    {
        tanggal: "20 April 2026",
        jenis: "Pengeluaran",
        kategori: "Proyek Jembatan",
        nominal: 10000000,
        penanggung_jawab: "Bpk. Asep",
        keterangan: "Anggaran Jembatan Desa",
    },
    {
        tanggal: "20 April 2026",
        jenis: "Pemasukan",
        kategori: "APBD",
        nominal: 20000000,
        penanggung_jawab: "Bpk. Wahyu",
        keterangan: "APBD",
    },
    {
        tanggal: "22 April 2026",
        jenis: "Pengeluaran",
        kategori: "Perbaikan Jalan",
        nominal: 5000000,
        penanggung_jawab: "Bpk. Dedi",
        keterangan: "Perbaikan jalan utama desa",
    },
    {
        tanggal: "25 April 2026",
        jenis: "Pengeluaran",
        kategori: "Pengadaan Lampu Jalan",
        nominal: 3500000,
        penanggung_jawab: "Ibu Rina",
        keterangan: "Pembelian lampu jalan desa",
    },
    {
        tanggal: "28 April 2026",
        jenis: "Pemasukan",
        kategori: "Bantuan Provinsi",
        nominal: 15000000,
        penanggung_jawab: "Bpk. Andi",
        keterangan: "Dana bantuan dari provinsi",
    }
]

const ChartDummy = [
    {
        name: 'pemasukan',
        data: [
            { x: "2026-04-20", y: 20000000 },
            { x: "2026-04-21", y: 20000000 },
            { x: "2026-04-22", y: 20000000 },
            { x: "2026-04-23", y: 20000000 },
            { x: "2026-04-24", y: 20000000 },
            { x: "2026-04-25", y: 20000000 },
            { x: "2026-04-26", y: 20000000 },
            { x: "2026-04-27", y: 20000000 },
            { x: "2026-04-28", y: 15000000 },
            { x: "2026-04-29", y: 15000000 }
        ],
    },
    {
        name: 'pengeluaran',
        data: [
            { x: "2026-04-20", y: 10000000 },
            { x: "2026-04-21", y: 10000000 },
            { x: "2026-04-22", y: 5000000 },
            { x: "2026-04-23", y: 5000000 },
            { x: "2026-04-24", y: 5000000 },
            { x: "2026-04-25", y: 3500000 },
            { x: "2026-04-26", y: 3500000 },
            { x: "2026-04-27", y: 3500000 },
            { x: "2026-04-28", y: 3500000 },
            { x: "2026-04-29", y: 3500000 },
        ],
    }
]

export { DummyData, ChartDummy };