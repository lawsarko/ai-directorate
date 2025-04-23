import React from 'react';
import Link from 'next/link';

type ToolCardProps = {
  name: string;
  description: string;
  category: string;
  slug: string;
  logoPlaceholder?: boolean;
};

export default function ToolCard({ name, description, category, slug, logoPlaceholder = true }: ToolCardProps) {
  return (
    <Link href={`/tool/${slug}`}>
      <div className="card hover:translate-y-[-4px] transition-all cursor-pointer">
        <div className="flex items-start">
          <div className="w-16 h-16 bg-primary-secondary rounded-md mr-4 flex items-center justify-center">
            {logoPlaceholder && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )}
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-text-secondary mb-2">{description}</p>
            <div className="flex items-center">
              <span className="bg-primary-secondary text-sm px-3 py-1 rounded-full">{category}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
