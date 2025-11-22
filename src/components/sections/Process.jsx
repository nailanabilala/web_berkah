import React from 'react';
import { PenTool, Truck } from 'lucide-react';
import Card from '../ui/Card';

const Process = () => {
    const shippingRates = [
        { area: "Bojonegoro, Tuban", price: "Rp 150.000" },
        { area: "Surabaya", price: "Rp 150.000" },
        { area: "Malang, Batu, Blitar, Tulungagung", price: "Rp 250.000" },
        { area: "Banyuwangi", price: "Rp 350.000" },
    ];

    return (
        <section id="cara-pesan" className="py-20 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

                    {/* Left Column: Ordering Process */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <PenTool className="text-zinc-900" />
                            Cara Pemesanan
                        </h2>
                        <div className="space-y-8 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-[2px] before:bg-zinc-100">

                            <div className="relative pl-12">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-zinc-100 text-zinc-900 font-bold rounded-full flex items-center justify-center border border-zinc-200 text-sm">1</div>
                                <h3 className="font-semibold text-lg mb-1">Konsultasi & Estimasi</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    Diskusikan kebutuhan Anda via WA. Kirim foto lokasi atau referensi model. Kami berikan estimasi harga awal.
                                </p>
                            </div>

                            <div className="relative pl-12">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-zinc-100 text-zinc-900 font-bold rounded-full flex items-center justify-center border border-zinc-200 text-sm">2</div>
                                <h3 className="font-semibold text-lg mb-1">DP & Produksi</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    Setuju dengan harga? Lakukan <strong>DP 50%</strong> agar pesanan masuk antrian produksi. Estimasi pengerjaan 14-30 hari kerja.
                                </p>
                            </div>

                            <div className="relative pl-12">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-zinc-100 text-zinc-900 font-bold rounded-full flex items-center justify-center border border-zinc-200 text-sm">3</div>
                                <h3 className="font-semibold text-lg mb-1">Update Progress</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    Tenang, kami akan kirimkan foto/video proses barang Anda saat di workshop sebagai bukti progres.
                                </p>
                            </div>

                            <div className="relative pl-12">
                                <div className="absolute left-0 top-0 w-8 h-8 bg-zinc-900 text-white font-bold rounded-full flex items-center justify-center border border-zinc-900 text-sm">4</div>
                                <h3 className="font-semibold text-lg mb-1">Pelunasan & Kirim</h3>
                                <p className="text-zinc-600 text-sm leading-relaxed">
                                    Barang jadi, Anda lunasi sisa 50% + Ongkir. Armada Berkah Furnitur siap meluncur ke lokasi Anda!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Shipping Info */}
                    <div>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                            <Truck className="text-zinc-900" />
                            Pengiriman (Armada Sendiri)
                        </h2>
                        <Card className="p-6 bg-zinc-50/50">
                            <p className="text-zinc-600 text-sm mb-6">
                                Untuk menjamin keamanan barang besar (bebas lecet/pecah), kami <strong>tidak menggunakan ekspedisi kargo umum</strong>, melainkan diantar langsung oleh tim kami.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm font-medium pb-2 border-b border-zinc-200 text-zinc-400 uppercase tracking-wider">
                                    <span>Wilayah</span>
                                    <span>Tarif Flat</span>
                                </div>
                                {shippingRates.map((rate, index) => (
                                    <div key={index} className="flex items-center justify-between text-sm py-2">
                                        <span className="text-zinc-700">{rate.area}</span>
                                        <span className="font-semibold text-zinc-900">{rate.price}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 p-3 bg-blue-50 text-blue-900 text-xs rounded-lg border border-blue-100">
                                *Tarif sudah termasuk jasa angkat barang ke dalam rumah & instalasi sederhana (pasang kaki/rak).
                            </div>
                        </Card>

                        <div className="mt-6 p-4 border border-dashed border-zinc-300 rounded-xl bg-white">
                            <h4 className="font-semibold text-sm mb-2">Luar Jawa Timur?</h4>
                            <p className="text-sm text-zinc-500">
                                Saat ini kami memprioritaskan Jawa Timur. Untuk luar kota, wajib menggunakan ekspedisi kargo langganan Anda (Risiko pengiriman ditanggung pembeli).
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Process;
