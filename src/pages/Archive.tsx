import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ExternalLink, Github, CheckCircle2, ArrowRight } from 'lucide-react';
import { archivedItems } from '../data/portfolio';

function ArchiveCard({ item }: { item: typeof archivedItems[0] }) {
  return (
    <Link 
      to={`/archive/${item.id}`}
      className="block bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md border border-warm-200"
    >
      {item.primaryImage && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={item.primaryImage}
            alt={item.title}
            className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold text-warm-900 mb-2">
        {item.title}
      </h3>
      <p className="text-warm-600 mb-4">
        {item.shortDescription || item.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-warm-100 text-warm-700 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
        {item.tags.length > 3 && (
          <span className="px-3 py-1 bg-warm-100 text-warm-700 rounded-full text-sm">
            +{item.tags.length - 3} more
          </span>
        )}
      </div>
      <div className="flex items-center text-warm-600 hover:text-warm-900">
        <span>View Details</span>
        <ArrowRight size={16} className="ml-2" />
      </div>
    </Link>
  );
}

function ArchiveDetail() {
  const { id } = useParams();
  const item = archivedItems.find(item => item.id === id);

  if (!item) {
    return <div>Project not found</div>;
  }

  return (
    <div className="space-y-8">
      <Link 
        to="/archive"
        className="inline-flex items-center text-warm-600 hover:text-warm-900"
      >
        ← Back to Archive
      </Link>
      
      <div className="bg-white rounded-lg shadow-sm p-8 border border-warm-200">
        <h1 className="text-3xl font-bold text-warm-900 mb-6">{item.title}</h1>
        
        <p className="text-warm-600 text-lg mb-8">{item.description}</p>

        {item.imageUrls && (
          <div className="mb-12 grid grid-cols-1 gap-12">
            {item.imageUrls.map((url, index) => (
              <div key={index} className="mx-4 sm:mx-8">
                <img
                  src={url}
                  alt={`${item.title} screenshot ${index + 1}`}
                  className="rounded-lg shadow-md border border-warm-200 w-full transition-all duration-300 hover:shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {item.features && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-warm-900 mb-4">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {item.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-warm-600">
                  <CheckCircle2 size={16} className="text-warm-500 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.technicalDetails && (
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-warm-900 mb-4">Technical Details</h2>
            
            {item.technicalDetails.architecture && (
              <div>
                <h3 className="text-xl font-medium text-warm-800 mb-3">Architecture</h3>
                <ul className="list-disc list-inside space-y-2 text-warm-600">
                  {item.technicalDetails.architecture.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.technicalDetails.technologies && (
              <div>
                <h3 className="text-xl font-medium text-warm-800 mb-3">Technologies Used</h3>
                <ul className="list-disc list-inside space-y-2 text-warm-600">
                  {item.technicalDetails.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.technicalDetails.challenges && (
              <div>
                <h3 className="text-xl font-medium text-warm-800 mb-3">Challenges</h3>
                <ul className="list-disc list-inside space-y-2 text-warm-600">
                  {item.technicalDetails.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.technicalDetails.solutions && (
              <div>
                <h3 className="text-xl font-medium text-warm-800 mb-3">Solutions</h3>
                <ul className="list-disc list-inside space-y-2 text-warm-600">
                  {item.technicalDetails.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-4 mt-8">
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-warm-600 hover:text-warm-900 transition-colors"
            >
              <Github size={20} />
              <span>View Source</span>
            </a>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-warm-600 hover:text-warm-900 transition-colors"
            >
              <ExternalLink size={20} />
              <span>Visit Project</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function Archive() {
  const { id } = useParams();
  
  if (id) {
    return <ArchiveDetail />;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-warm-900">Archive</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {archivedItems.map((item) => (
          <ArchiveCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}