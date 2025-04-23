import { useState } from 'react';
import Link from 'next/link';

type NavbarProps = {
  transparent?: boolean;
};

export default function Navbar({ transparent = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`w-full ${transparent ? 'absolute top-0 left-0 z-10' : 'bg-primary-background'}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-text-primary">
          AIDIRECTORATE
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/categories" className="text-text-primary hover:text-accent-primary transition-colors">
            Categories
          </Link>
          <Link href="/about" className="text-text-primary hover:text-accent-primary transition-colors">
            About
          </Link>
          <Link href="/blog" className="text-text-primary hover:text-accent-primary transition-colors">
            Blog
          </Link>
          <Link href="/submit" className="btn-primary">
            Submit
          </Link>
        </nav>
        
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-secondary py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              href="/categories" 
              className="text-text-primary hover:text-accent-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              href="/about" 
              className="text-text-primary hover:text-accent-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="text-text-primary hover:text-accent-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/submit" 
              className="btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Submit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
