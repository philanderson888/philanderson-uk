import React from 'react';
import { Github, Instagram, Linkedin, Calendar, Music, Heart, Dumbbell, Church, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-warm-900 mb-6">About Me</h1>
        <p className="text-warm-600 text-lg mb-8">
          Just love to build software!!!
        </p>

        {/* Professional Experience */}
        <div className="space-y-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="text-warm-600" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800">Lead Engineer</h2>
            </div>
            <p className="text-warm-600 pl-8">
              With 15-20 years of experience in software development, hardware deployment, and technical support,
              I currently serve as a Lead Technical Engineer at a major British television station. My role involves
              building great software, leading teams, and fostering strong camaraderie to achieve exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-warm-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-warm-800 mb-3">Broad Depth of Skills</h3>
              <p className="text-warm-600">
                Extensive expertise across multiple industries, from computer hardware and software to operating systems,
                with proven experience in building and deploying production code in high-pressure environments.
              </p>
            </div>
            <div className="bg-warm-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-warm-800 mb-3">Freelancer</h3>
              <p className="text-warm-600">
                Available for both freelance and permanent positions, comfortable with long and short contract work,
                including teaching opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Personal Life */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-warm-800 mb-6">Personal Life</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Users className="text-warm-600" size={20} />
                <span className="text-warm-700">Married with 6 children</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-warm-600" size={20} />
                <span className="text-warm-700">Based in London, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="text-warm-600" size={20} />
                <span className="text-warm-700">Senior Roku Software Engineer</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-warm-800 mb-3">Interests</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Dumbbell className="text-warm-600" size={20} />
                  <span className="text-warm-700">Daily workouts</span>
                </div>
                <div className="flex items-center gap-2">
                  <Church className="text-warm-600" size={20} />
                  <span className="text-warm-700">Christianity & Technical church ministry</span>
                </div>
                <div className="flex items-center gap-2">
                  <Music className="text-warm-600" size={20} />
                  <span className="text-warm-700">Music (Piano, Bass Guitar, Singing)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Charity Work Link */}
          <Link 
            to="/charity-work" 
            className="block bg-warm-50 rounded-lg p-6 mt-8 hover:bg-warm-100 transition-colors"
          >
            <h3 className="text-xl font-semibold text-warm-800 mb-3">Charity Work</h3>
            <p className="text-warm-600 mb-4">
              Explore my involvement in various charitable initiatives, both locally and internationally.
            </p>
            <div className="text-warm-600 hover:text-warm-800">
              Learn more about my charity work →
            </div>
          </Link>
        </div>

        {/* Social Links */}
        <div className="mt-12 pt-8 border-t border-warm-200">
          <h3 className="text-xl font-semibold text-warm-800 mb-4">Connect With Me</h3>
          <div className="flex gap-6">
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
            <a
              href="https://calendly.com/philanderson888/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-600 hover:text-warm-900 transition-colors"
            >
              <Calendar size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}