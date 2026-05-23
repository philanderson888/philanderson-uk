import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-warm-900 mb-4">
          Phil Anderson
        </h1>
        <p className="text-xl text-warm-600 max-w-2xl mx-auto">
          Software Engineer & Technology Enthusiast
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://github.com/philanderson888"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-600 hover:text-warm-900 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="https://instagram.com/philanderson888"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-600 hover:text-warm-900 transition-colors"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/phil-anderson-60648a11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-600 hover:text-warm-900 transition-colors"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto">
        <Link to="/about" className="block group">
          <h2 className="text-2xl font-semibold text-warm-900 mb-4 group-hover:text-warm-700 transition-colors">
            About Me
          </h2>
          <div className="space-y-4 text-warm-600 group-hover:text-warm-700 transition-colors">
            <p>
              I'm a passionate software engineer with a deep enthusiasm for modern web development
              and technology. My journey in software development has been driven by a constant
              desire to learn and create meaningful solutions that make a difference.
            </p>
            <p>
              Beyond coding, I'm actively involved in my local church community and various
              charitable initiatives. I believe in using technology as a force for positive
              change, combining technical expertise with a commitment to helping others.
            </p>
          </div>
        </Link>
      </section>

      {/* Featured Work Preview */}
      <section>
        <h2 className="text-2xl font-semibold text-warm-900 mb-4">
          Featured Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link 
            to="/portfolio" 
            className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md"
          >
            <h3 className="text-lg font-medium text-warm-900 mb-2">
              Web Development
            </h3>
            <p className="text-warm-600">
              Creating modern, responsive web applications using React, TypeScript, and other cutting-edge technologies.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}