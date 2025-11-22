import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { products } from '../../data/products';

const Catalog = ({ isPreview = false }) => {
    const whatsappNumber = "6285888185382";

    const handleWhatsAppClick = (message) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    // If isPreview is true, show only first 4 items
    const displayProducts = isPreview ? products.slice(0, 4) : products;

    return (
        <section id="katalog" className="py-20 px-4 md:px-6 bg-zinc-50 border-y border-zinc-200">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold mb-4">Katalog & Inspirasi Model</h2>
                    <p className="text-zinc-600">
                        Semua model di bawah ini adalah sistem <strong>Pre-Order (PO)</strong>. Anda bisa request ubah ukuran, warna, atau bahan sesuai budget.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayProducts.map((product) => (
                        <Card key={product.id} className="overflow-hidden flex flex-col h-full group hover:border-zinc-400 transition-colors">
                            <div className="aspect-square overflow-hidden bg-zinc-100 relative">
                                <img src={product.image} alt={product.name} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                                <Badge className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-zinc-900 border-transparent shadow-sm">
                                    {product.category}
                                </Badge>
                            </div>
                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="font-semibold text-lg mb-1 text-zinc-900">{product.name}</h3>
                                <p className="text-sm font-medium text-zinc-500 mb-3">{product.price}</p>
                                <p className="text-sm text-zinc-600 mb-6 line-clamp-3 flex-grow">
                                    {product.desc}
                                </p>
                                <Button
                                    className="w-full gap-2"
                                    variant="primary"
                                    onClick={() => handleWhatsAppClick(`Halo Berkah Furnitur, saya tertarik dengan model ${product.name}. Bisa minta detail harganya?`)}
                                >
                                    <MessageCircle size={16} />
                                    Tanya via WA
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Show "See More" button only in preview mode */}
                {isPreview && (
                    <div className="mt-12 text-center">
                        <Link to="/katalog">
                            <Button variant="outline" className="h-12 px-8 gap-2">
                                Lihat Semua Model <ArrowRight size={16} />
                            </Button>
                        </Link>
                    </div>
                )}

                {/* Custom Request Card - Only show on full catalog page or if not preview */}
                {!isPreview && (
                    <div className="mt-8 p-8 bg-zinc-900 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Punya Desain Sendiri?</h3>
                            <p className="text-zinc-400 max-w-xl">
                                Punya gambar dari Pinterest atau sketsa tangan? Kirimkan kepada kami, kami hitungkan estimasi biayanya gratis.
                            </p>
                        </div>
                        <Button
                            variant="secondary"
                            className="h-12 px-8 whitespace-nowrap shrink-0 w-full md:w-auto"
                            onClick={() => handleWhatsAppClick("Halo, saya punya gambar desain sendiri, mau tanya estimasi harga.")}
                        >
                            Kirim Gambar via WA
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Catalog;
