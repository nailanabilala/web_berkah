import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

/**
 * Navbar component that provides the main navigation for the application.
 *
 * It includes a logo, navigation links, and a call-to-action button for consultation.
 * The navbar changes appearance on scroll and includes a mobile menu.
 *
 * @component
 * @returns {JSX.Element} The rendered Navbar component.
 */
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        /**
         * Handles scroll events to toggle the scrolled state.
         */
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappNumber = "6285888185382";

    /**
     * Opens a WhatsApp chat with a pre-filled message.
     *
     * @param {string} message - The message to pre-fill in the WhatsApp chat.
     */
    const handleWhatsAppClick = (message) => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-bold text-lg">B</div>
                    <span className="font-bold text-xl tracking-tight">Berkah Furnitur</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="/#galeri" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Galeri Real</a>
                    <a href="/katalog" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Katalog</a>
                    <a href="/#cara-pesan" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">Cara Pesan & Ongkir</a>
                </div>

                <div className="hidden md:flex">
                    <Button onClick={() => handleWhatsAppClick("Halo, saya ingin konsultasi custom furniture.")} className="gap-2">
                        <MessageCircle size={16} />
                        Konsultasi Gratis
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-b border-zinc-200 p-4 flex flex-col gap-4 md:hidden shadow-lg">
                    <a href="/#galeri" className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Galeri Real</a>
                    <a href="/katalog" className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Katalog</a>
                    <a href="/#cara-pesan" className="text-sm font-medium py-2" onClick={() => setIsMobileMenuOpen(false)}>Cara Pesan</a>
                    <Button className="w-full" onClick={() => handleWhatsAppClick("Halo, saya ingin konsultasi.")}>Konsultasi WA</Button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
