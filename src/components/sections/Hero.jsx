import React from 'react';
import { PenTool, Star, Truck, CheckCircle, MapPin } from 'lucide-react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

const Hero = () => {
    const whatsappNumber = "6285888185382";

    const handleWhatsAppClick = (message) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <section className="pt-32 pb-20 px-4 md:px-6 bg-gradient-to-b from-zinc-100 to-zinc-50">
            <div className="container mx-auto max-w-4xl text-center">
                <Badge className="mb-6 bg-zinc-200 text-zinc-800 border-zinc-300 px-4 py-1">
                    Tanpa Toko Offline = Harga Lebih Hemat
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                    Wujudkan Furnitur Impian,<br className="hidden md:block" /> Langsung dari <span className="text-zinc-500">Tangan Pengrajin.</span>
                </h1>
                <p className="text-lg md:text-xl text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Spesialis Pre-Order & Custom Furnitur Jabodetabek. Kami memotong biaya showroom mahal agar Anda mendapatkan kualitas material terbaik dengan harga masuk akal.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button className="h-12 px-8 text-base w-full sm:w-auto" onClick={() => document.getElementById('katalog').scrollIntoView({ behavior: 'smooth' })}>
                        Lihat Katalog Model
                    </Button>
                    <Button variant="outline" className="h-12 px-8 text-base w-full sm:w-auto gap-2" onClick={() => handleWhatsAppClick("Saya punya desain sendiri, ingin tanya harga.")}>
                        <PenTool size={18} />
                        Saya Punya Desain Sendiri
                    </Button>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-3xl mx-auto">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-200 shadow-sm">
                        <div className="p-2 bg-zinc-100 rounded-full"><Star size={16} /></div>
                        <div className="text-sm font-medium">Material<br />Premium</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-200 shadow-sm">
                        <div className="p-2 bg-zinc-100 rounded-full"><Truck size={16} /></div>
                        <div className="text-sm font-medium">Armada<br />Sendiri</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-200 shadow-sm">
                        <div className="p-2 bg-zinc-100 rounded-full"><CheckCircle size={16} /></div>
                        <div className="text-sm font-medium">Garansi<br />Konstruksi</div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-zinc-200 shadow-sm">
                        <div className="p-2 bg-zinc-100 rounded-full"><MapPin size={16} /></div>
                        <div className="text-sm font-medium">Area<br />Jabodetabek</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
