import React, { useState } from 'react';
import { Lightbulb, Heart, ExternalLink, Zap, Film, ChevronDown, ChevronUp } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';
import { scienceHeroes, faithHeroes, mythologyHeroes, movieHeroes } from '../data/heroes';

export function Heroes() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const totalHeroes = scienceHeroes.length + faithHeroes.length + mythologyHeroes.length + movieHeroes.length;

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Personal', path: '/personal' },
          { label: 'Heroes', path: '/heroes' }
        ]}
      />

      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-warm-900">Heroes</h1>
        <p className="text-warm-600 text-lg">
          A collection of {totalHeroes} inspiring figures across science, faith, mythology, and entertainment
        </p>
      </div>

      {/* Heroes of Science Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <button
          onClick={() => toggleSection('science')}
          className="w-full flex items-center justify-between gap-3 mb-6 text-left"
        >
          <div className="flex items-center gap-3">
            <Lightbulb className="text-warm-600" size={24} />
            <div>
              <h2 className="text-2xl font-semibold text-warm-800">Heroes of Science</h2>
              <p className="text-sm text-warm-500">{scienceHeroes.length} pioneers</p>
            </div>
          </div>
          {expandedSections.includes('science') ? (
            <ChevronUp className="text-warm-600" size={24} />
          ) : (
            <ChevronDown className="text-warm-600" size={24} />
          )}
        </button>
        {expandedSections.includes('science') && (
          <div className="grid gap-6">
            {scienceHeroes.map((hero, index) => (
              <a
                key={index}
                href={hero.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-warm-50 rounded-lg p-6 border border-warm-200 transition-all duration-300 hover:bg-warm-100 hover:shadow-md group"
              >
                <div className="flex items-start gap-4">
                  {hero.image && (
                    <img
                      src={hero.image}
                      alt={hero.imageAlt}
                      className="w-20 h-20 rounded-full object-cover border-2 border-warm-200"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-warm-800">{hero.name}</h3>
                        <ExternalLink size={16} className="text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-warm-500 text-sm">{hero.years}</span>
                    </div>
                    <p className="text-warm-600">{hero.contribution}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Heroes of Faith Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <button
          onClick={() => toggleSection('faith')}
          className="w-full flex items-center justify-between gap-3 mb-6 text-left"
        >
          <div className="flex items-center gap-3">
            <Heart className="text-warm-600" size={24} />
            <div>
              <h2 className="text-2xl font-semibold text-warm-800">Heroes of Faith</h2>
              <p className="text-sm text-warm-500">{faithHeroes.length} spiritual leaders</p>
            </div>
          </div>
          {expandedSections.includes('faith') ? (
            <ChevronUp className="text-warm-600" size={24} />
          ) : (
            <ChevronDown className="text-warm-600" size={24} />
          )}
        </button>
        {expandedSections.includes('faith') && (
          <div className="grid gap-6">
            {faithHeroes.map((hero, index) => (
              <a
                key={index}
                href={hero.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-warm-50 rounded-lg p-6 border border-warm-200 transition-all duration-300 hover:bg-warm-100 hover:shadow-md group"
              >
                <div className="flex items-start gap-4">
                  {hero.image && (
                    <img
                      src={hero.image}
                      alt={hero.imageAlt}
                      className="w-20 h-20 rounded-full object-cover border-2 border-warm-200"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-warm-800">{hero.name}</h3>
                        <ExternalLink size={16} className="text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-warm-500 text-sm">{hero.years}</span>
                    </div>
                    <p className="text-warm-600">{hero.contribution}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Heroes of Mythology Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <button
          onClick={() => toggleSection('mythology')}
          className="w-full flex items-center justify-between gap-3 mb-6 text-left"
        >
          <div className="flex items-center gap-3">
            <Zap className="text-warm-600" size={24} />
            <div>
              <h2 className="text-2xl font-semibold text-warm-800">Heroes of Mythology</h2>
              <p className="text-sm text-warm-500">{mythologyHeroes.length} legendary figures</p>
            </div>
          </div>
          {expandedSections.includes('mythology') ? (
            <ChevronUp className="text-warm-600" size={24} />
          ) : (
            <ChevronDown className="text-warm-600" size={24} />
          )}
        </button>
        {expandedSections.includes('mythology') && (
          <div className="grid gap-6">
            {mythologyHeroes.map((hero, index) => (
              <a
                key={index}
                href={hero.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-warm-50 rounded-lg p-6 border border-warm-200 transition-all duration-300 hover:bg-warm-100 hover:shadow-md group"
              >
                <div className="flex items-start gap-4">
                  {hero.image && (
                    <img
                      src={hero.image}
                      alt={hero.imageAlt}
                      className="w-20 h-20 rounded-full object-cover border-2 border-warm-200"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-warm-800">{hero.name}</h3>
                        <ExternalLink size={16} className="text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-warm-500 text-sm">{hero.years}</span>
                    </div>
                    <p className="text-warm-600">{hero.contribution}</p>
                    {hero.symbols && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {hero.symbols.map((symbol, symbolIndex) => (
                          <span
                            key={symbolIndex}
                            className="px-3 py-1 bg-warm-100 text-warm-700 rounded-full text-sm"
                          >
                            {symbol}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Heroes of Modern Day Movies Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <button
          onClick={() => toggleSection('movies')}
          className="w-full flex items-center justify-between gap-3 mb-6 text-left"
        >
          <div className="flex items-center gap-3">
            <Film className="text-warm-600" size={24} />
            <div>
              <h2 className="text-2xl font-semibold text-warm-800">Heroes of Modern Day Movies</h2>
              <p className="text-sm text-warm-500">{movieHeroes.length} iconic characters</p>
            </div>
          </div>
          {expandedSections.includes('movies') ? (
            <ChevronUp className="text-warm-600" size={24} />
          ) : (
            <ChevronDown className="text-warm-600" size={24} />
          )}
        </button>
        {expandedSections.includes('movies') && (
          <div className="grid gap-6">
            {movieHeroes.map((hero, index) => (
              <a
                key={index}
                href={hero.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-warm-50 rounded-lg p-6 border border-warm-200 transition-all duration-300 hover:bg-warm-100 hover:shadow-md group"
              >
                <div className="flex items-start gap-4">
                  {hero.image && (
                    <img
                      src={hero.image}
                      alt={hero.imageAlt}
                      className="w-20 h-20 rounded-full object-cover border-2 border-warm-200"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-warm-800">{hero.name}</h3>
                        <ExternalLink size={16} className="text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-warm-500 text-sm">{hero.years}</span>
                    </div>
                    <p className="text-warm-600">{hero.contribution}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}