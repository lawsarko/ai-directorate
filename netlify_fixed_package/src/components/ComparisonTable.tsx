import React from 'react';

type ComparisonTableProps = {
  tools: {
    id: string;
    name: string;
    features: Record<string, boolean | string>;
    pricing?: string;
    rating?: number;
  }[];
  featureCategories: {
    name: string;
    features: string[];
  }[];
};

export default function ComparisonTable({ tools, featureCategories }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary-secondary">
            <th className="p-4 text-left border-b border-primary-card">Features</th>
            {tools.map((tool) => (
              <th key={tool.id} className="p-4 text-center border-b border-primary-card min-w-[200px]">
                {tool.name}
                {tool.rating && (
                  <div className="flex items-center justify-center mt-1">
                    <span className="text-accent-primary mr-1">★</span>
                    <span>{tool.rating.toFixed(1)}</span>
                  </div>
                )}
                {tool.pricing && (
                  <div className="text-sm text-text-secondary mt-1">{tool.pricing}</div>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {featureCategories.map((category) => (
            <React.Fragment key={category.name}>
              <tr className="bg-primary-secondary">
                <td colSpan={tools.length + 1} className="p-3 font-medium">
                  {category.name}
                </td>
              </tr>
              {category.features.map((feature) => (
                <tr key={feature} className="border-b border-primary-card hover:bg-primary-secondary/50">
                  <td className="p-4">{feature}</td>
                  {tools.map((tool) => (
                    <td key={`${tool.id}-${feature}`} className="p-4 text-center">
                      {typeof tool.features[feature] === 'boolean' ? (
                        tool.features[feature] ? (
                          <span className="text-accent-secondary text-xl">✓</span>
                        ) : (
                          <span className="text-status-error text-xl">✕</span>
                        )
                      ) : (
                        <span>{tool.features[feature]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
