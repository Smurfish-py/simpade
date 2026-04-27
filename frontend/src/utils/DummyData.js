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

const ProjectData = [
    {
        id: 1,
        nama_proyek: "Jembatan Cinta",
        lokasi: "Kebon Kopi",
        koordinat: [-6.906112, 107.565021],
        tanggal_mulai: "12 Jan 2026",
        est_selesai: "20 Juni 2026",
        persentase: 65,
        status: "Berjalan"
    },
    {
        id: 2,
        nama_proyek: "Renovasi Aula Utama",
        lokasi: "SMKN 1 Cimahi",
        koordinat: [-6.90211757623383, 107.538503828836],
        tanggal_mulai: "05 Feb 2026",
        est_selesai: "15 Mei 2026",
        persentase: 90,
        status: "Finishing"
    },
];

const DummyFeedback = [
    {
        id: 1,
        nama: "Budi Santoso",
        tanggal: "24 April 2026",
        kategori: "Saran Pembangunan",
        pesan: "Mohon untuk penerangan di jalan Kebon Kopi diperbanyak, kalau malam masih terasa sangat gelap di beberapa titik.",
        inisial: "BS",
        warna: "bg-blue-500"
    },
    {
        id: 2,
        nama: "Siti Aminah",
        tanggal: "20 April 2026",
        kategori: "Laporan Kerusakan",
        pesan: "Paving block di area taman Cibeureum ada yang lepas, cukup membahayakan anak-anak yang lari pagi di sana.",
        inisial: "SA",
        warna: "bg-green-600"
    },
    {
        id: 3,
        nama: "Agus Pratama",
        tanggal: "18 April 2026",
        kategori: "Aspirasi",
        pesan: "Terima kasih untuk renovasi aula SMKN 1 Cimahi, sekarang fasilitasnya jauh lebih nyaman untuk kegiatan siswa.",
        inisial: "AP",
        warna: "bg-orange-500"
    }
];

export { DummyData, ChartDummy, ProjectData, DummyFeedback };