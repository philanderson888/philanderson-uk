import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Link as LinkIcon, BookOpen, Rocket, Laugh, History } from 'lucide-react';

export function Wiki() {
  const wikiSections = [
    {
      title: 'Quick Links',
      icon: LinkIcon,
      items: [
        {
          title: 'Useful Links Collection',
          description: 'A curated collection of useful tools, resources, and references',
          link: '/links'
        }
      ]
    },
    {
      title: 'Knowledge Base',
      icon: BookOpen,
      items: [
        {
          title: 'Space Exploration',
          description: 'Information about space missions, rockets, and exploration history',
          link: '/space'
        },
        {
          title: 'Factual Learning',
          description: 'Collection of terms, definitions, and knowledge across various subjects',
          link: '/factual-learning'
        },
        {
          title: 'Quizlet Learning',
          description: 'Interactive flashcards and quizzes about the UK',
          externalLink: 'https://quizlet.com/gb/1044093167/uk-flash-cards'
        }
      ]
    },
    {
      title: 'History',
      icon: History,
      items: [
        {
          title: 'Historical Events',
          description: 'Analysis and information about significant historical events',
          link: '/history'
        }
      ]
    },
    {
      title: 'Entertainment',
      icon: Laugh,
      items: [
        {
          title: 'Jokes & Humor',
          description: 'A collection of clean jokes and humorous content',
          link: '/jokes'
        }
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-warm-900">Wiki</h1>
      
      <div className="grid gap-8">
        {wikiSections.map((section, index) => (
          <section key={index} className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <section.icon className="text-warm-600" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800">{section.title}</h2>
            </div>
            
            <div className="grid gap-6">
              {section.items.map((item, itemIndex) => (
                item.link ? (
                  <Link
                    key={itemIndex}
                    to={item.link}
                    className="block p-6 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors border border-warm-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-medium text-warm-900">{item.title}</h3>
                          <ExternalLink className="text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                        </div>
                        <p className="text-warm-600">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ) : (
                  <a
                    key={itemIndex}
                    href={item.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors border border-warm-200 group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-medium text-warm-900">{item.title}</h3>
                          <ExternalLink className="text-warm-400 opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                        </div>
                        <p className="text-warm-600">{item.description}</p>
                      </div>
                    </div>
                  </a>
                )
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}