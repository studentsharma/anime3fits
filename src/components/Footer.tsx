import React from 'react';
import { Instagram, Youtube, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Interface for policy links for type safety
interface PolicyLink {
    href: string;
    label: string;
}

// Interface for social media links for type safety
interface SocialLink {
    href: string;
    icon: React.ElementType;
    label: string;
}

// Footer Component
 const Footer = (): JSX.Element => {
    // Data for policy links
    const policyLinks: PolicyLink[] = [
        { href: '/privacy', label: 'PRIVACY' },
        { href: '/shipping', label: 'SHIPPING' },
        { href: '/refund', label: 'REFUND' },
        { href: '/terms', label: 'TERMS OF SERVICE' },
    ];

    // Data for social media links, using lucide-react icons
    const socialLinks: SocialLink[] = [
        { href: 'https://www.instagram.com/anim3fits/', icon: Instagram, label: 'Instagram' },
        { href: 'https://www.youtube.com/@Anim3Fits', icon: Youtube, label: 'YouTube' },
        { href: '#', icon: Twitter, label: 'Twitter' },
        // Using MessageCircle for WhatsApp as a visual equivalent
        { href: '#', icon: MessageCircle, label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left">
                    
                    {/* Policy Links */}
                    {/* On mobile, links are in a column. On medium screens and up, they are in a row. */}
                    <div className="footer-contents mb-8 md:mb-0">
                        <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                            {policyLinks.map((link) => (
                                <li key={link.label}>
                                    <Link to={link.href} className="hover:text-white transition-colors duration-300 text-sm font-medium">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    {/* Icons are in a row, with spacing. */}
                    <div className="flex items-center space-x-6">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;
                            return (
                                <a key={social.label} href={social.href} aria-label={social.label} className="hover:text-white transition-colors duration-300">
                                    <Icon size={24} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Footer Bottom */}
                {/* Copyright notice centered at the bottom */}
                <div id="footerbottom" className="mt-10 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm">&copy; 2025 All Rights Reserved by Anime3fits</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
