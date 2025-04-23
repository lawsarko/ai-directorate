import React from 'react';
import Link from 'next/link';

type CategoryCardProps = {
  name: string;
  slug: string;
  icon: React.ReactNode;
};

export default function CategoryCard({ name, slug, icon }: CategoryCardProps) {
  return (
    <Link href={`/category/${slug}`}>
      <div className="card text-center py-8 hover:translate-y-[-4px] transition-all cursor-pointer">
        <div className="category-icon mx-auto">
          {icon}
        </div>
        <h3 className="font-medium">{name}</h3>
      </div>
    </Link>
  );
}
