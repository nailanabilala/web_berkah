import React from 'react';
import { MessageCircle, ShoppingBag, MapPin } from 'lucide-react';

/**
 * Footer component for the application.
 *
 * Displays company information, navigation links, and contact details.
 *
 * @component
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
    return (
        <footer className="bg-zinc-950 text-zinc-400 py-12 px-4 md:px-6 border-t border-zinc-800">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4 text-white">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-zinc-950 font-bold text-lg">B</div>
                            <span className="font-bold text-xl tracking-tight">Berkah Furnitur</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Spesialis custom furnitur dan kitchen set harga pengrajin. Melayani area Jabodetabek dengan sistem PO yang amanah.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Navigasi</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Beranda</a></li>
                            <li><a href="#katalog" className="hover:text-white transition-colors">Katalog Produk</a></li>
                            <li><a href="#galeri" className="hover:text-white transition-colors">Testimoni Pelanggan</a></li>
                            <li><a href="#cara-pesan" className="hover:text-white transition-colors">Cek Ongkir</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3">
                                <MessageCircle size={18} />
                                <span>085-888-185-382 (Admin WA)</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ShoppingBag  size={18} />
                                <span>@bangSyukron_furniture</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin size={18} />
                                <span>Bojonegoro, Jawa Timur</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-800 text-center text-xs">
                    &copy; 2024 Berkah Furnitur. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
