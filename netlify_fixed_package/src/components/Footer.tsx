import Link from 'next/link';

type FooterProps = {
  className?: string;
};

export default function Footer({ className = '' }: FooterProps) {
  return (
    <footer className={`bg-primary-secondary py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/privacy-policy" className="text-text-secondary hover:text-text-primary mr-6">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-text-secondary hover:text-text-primary">
              Terms of Service
            </Link>
          </div>
          <div className="text-text-secondary">
            © 2025 AIDirectorate
          </div>
        </div>
      </div>
    </footer>
  );
}
