import React from 'react';
import { ExternalLink, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MoreLinks() {
  const propertyInvesting = [
    {
      name: "Frank Flegg - Sophisticated Property Investor",
      description: "Expert property investment guidance through podcasts and educational content",
      url: "https://www.google.com/search?q=sophisticated+property+investor+frank+flegg",
      tags: ["Property Investment", "Education", "Podcast"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-warm-900">More Links</h1>

      {/* Property Investing Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Home className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Property Investing</h2>
        </div>
        <div className="grid gap-6">
          {propertyInvesting.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors border border-warm-200"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xl font-medium text-warm-900">{resource.name}</h4>
                    <ExternalLink className="text-warm-600" size={16} />
                  </div>
                  <p className="text-warm-600">{resource.description}</p>
                  <div className="flex gap-2 mt-2">
                    {resource.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-warm-100 text-warm-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Personal Bookmarks Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">Personal Bookmarks</h2>
        <p className="text-warm-600">Your personal collection of bookmarks will appear here.</p>
      </section>
    </div>
  );
}