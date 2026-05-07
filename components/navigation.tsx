'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b border-border/50 transition-all duration-300">
      <div className="max-width-container px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
              <img src="/icon-logo.png" alt="Luxe Perfumes Logo" className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110" />
            <span className="text-sm font-semibold tracking-widest text-primary opacity-0 md:opacity-100 transition-opacity duration-300">
              PUZZLE PERFUME 
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {[
              { href: '/', label: 'Home' },
              { href: '/shop', label: 'Shop' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-primary group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-primary hover:text-accent transition-colors hidden sm:block p-2 hover:bg-muted rounded-lg transition-all duration-300">
              <Search size={20} />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary hover:bg-muted rounded-lg transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="pb-4 border-t border-border pt-4 space-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/shop', label: 'Shop' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-primary hover:text-accent hover:bg-muted px-3 py-2 rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
