import React, { useState, useEffect } from 'react';
import { ExternalLink, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb } from '../components/Breadcrumb';

const AUTH_STORAGE_KEY = 'more_links_auth_expiry';
const AUTH_DURATION = 60 * 24 * 60 * 60 * 1000; // 60 days in milliseconds

export function Links() {
  const [passcode, setPasscode] = useState('');
  const [showPasscodeInput, setShowPasscodeInput] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing authentication when "Access More Links" is clicked
    if (showPasscodeInput) {
      const authExpiry = localStorage.getItem(AUTH_STORAGE_KEY);
      if (authExpiry) {
        const expiryDate = new Date(authExpiry);
        if (expiryDate > new Date()) {
          navigate('/more-links');
          return;
        } else {
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      }
    }
  }, [showPasscodeInput, navigate]);

  // Simple hash function (for demonstration purposes)
  const hash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  };

  // Hardcoded hash of "6789"
  const correctHash = hash("6789");

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hash(passcode) === correctHash) {
      // Set authentication expiry
      const expiryDate = new Date(Date.now() + AUTH_DURATION);
      localStorage.setItem(AUTH_STORAGE_KEY, expiryDate.toISOString());
      navigate('/more-links');
    } else {
      alert('Incorrect passcode');
      setPasscode('');
    }
  };

  const aiTools = [
    {
      name: "Google Gemini AI Studio",
      description: "Free video generation platform with up to 1 million tokens. Generate high-quality videos of 5-8 seconds duration.",
      url: "https://aistudio.google.com/generate-video",
      tags: ["Video Generation", "Free", "AI Studio"]
    },
    {
      name: "RunwayML",
      description: "Professional AI video and image generation platform. $15/month subscription.",
      url: "https://runwayml.com",
      tags: ["Video Generation", "Image Generation"]
    }
  ];

  const webTools = [
    {
      name: "SEO Tag Inspector",
      description: "Analyzes websites and provides comprehensive reports on SEO improvements.",
      url: "https://seo-tag-inspector.replit.app",
      tags: ["SEO", "Website Analysis", "Optimization"]
    }
  ];

  const clothingLinks = [
    {
      name: "ASICS GEL-CUMULUS 27",
      description: "High-performance running shoes with GEL cushioning technology for maximum comfort.",
      url: "https://www.asics.com/gb/en-gb/gel-cumulus-27/p/1011B960-001.html?size=11.5&width=Standard",
      tags: ["Running", "Shoes", "Athletic Wear"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Wiki', path: '/wiki' },
          { label: 'Links', path: '/links' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Useful Links</h1>

      {/* AI Tools Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">AI Tools</h2>
        <div className="grid gap-6">
          {aiTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors border border-warm-200"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium text-warm-900">{tool.name}</h3>
                    <ExternalLink className="text-warm-600" size={16} />
                  </div>
                  <p className="text-warm-600">{tool.description}</p>
                  <div className="flex gap-2 mt-2">
                    {tool.tags.map((tag, tagIndex) => (
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

      {/* Web Tools Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">Website Optimization Tools</h2>
        <div className="grid gap-6">
          {webTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors border border-warm-200"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium text-warm-900">{tool.name}</h3>
                    <ExternalLink className="text-warm-600" size={16} />
                  </div>
                  <p className="text-warm-600">{tool.description}</p>
                  <div className="flex gap-2 mt-2">
                    {tool.tags.map((tag, tagIndex) => (
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

      {/* Clothing Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">Clothing & Footwear</h2>
        <div className="grid gap-6">
          {clothingLinks.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors border border-warm-200"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-medium text-warm-900">{item.name}</h3>
                    <ExternalLink className="text-warm-600" size={16} />
                  </div>
                  <p className="text-warm-600">{item.description}</p>
                  <div className="flex gap-2 mt-2">
                    {item.tags.map((tag, tagIndex) => (
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

      {/* More Links Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-warm-800">More Links</h2>
          <button
            onClick={() => setShowPasscodeInput(!showPasscodeInput)}
            className="flex items-center gap-2 text-warm-600 hover:text-warm-900 transition-colors"
          >
            <Lock size={20} />
            <span>Access More Links</span>
          </button>
        </div>

        {showPasscodeInput && (
          <form onSubmit={handlePasscodeSubmit} className="space-y-4">
            <div>
              <label htmlFor="passcode" className="block text-sm font-medium text-warm-700 mb-1">
                Enter Passcode
              </label>
              <input
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3 py-2 border border-warm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500"
                placeholder="Enter passcode to access more links"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-warm-600 text-white rounded-md hover:bg-warm-700 transition-colors"
            >
              Submit
            </button>
          </form>
        )}
      </section>
    </div>
  );
}