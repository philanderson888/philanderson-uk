import React, { useState, useEffect, useRef } from 'react';
import { Lock, Users, BookOpen, HelpingHand as PrayingHands, Book, Eye, Clock, DollarSign, History } from 'lucide-react';
import { Link } from 'react-router-dom';

const AUTH_STORAGE_KEY = 'personal_auth_expiry';
const AUTH_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds

export function Personal() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const passcodeInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const authExpiry = localStorage.getItem(AUTH_STORAGE_KEY);
    if (authExpiry) {
      const expiryDate = new Date(authExpiry);
      if (expiryDate > new Date()) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }

    if (passcodeInputRef.current) {
      passcodeInputRef.current.focus();
    }
  }, []);

  const hash = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  };

  const correctHash = hash("6789");

  const handlePasscodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hash(passcode) === correctHash) {
      const expiryDate = new Date(Date.now() + AUTH_DURATION);
      localStorage.setItem(AUTH_STORAGE_KEY, expiryDate.toISOString());
      setIsAuthenticated(true);
    } else {
      alert('Incorrect passcode');
      setPasscode('');
      if (passcodeInputRef.current) {
        passcodeInputRef.current.focus();
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center justify-center mb-6">
            <Lock className="text-warm-600\" size={32} />
          </div>
          <h1 className="text-2xl font-bold text-warm-900 text-center mb-6">
            Secure Access Required
          </h1>
          <form onSubmit={handlePasscodeSubmit} className="space-y-4">
            <div>
              <label htmlFor="passcode" className="block text-sm font-medium text-warm-700 mb-1">
                Enter Passcode
              </label>
              <input
                ref={passcodeInputRef}
                type="password"
                id="passcode"
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="w-full px-3 py-2 border border-warm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500"
                placeholder="Enter passcode to access personal section"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-warm-600 text-white rounded-md hover:bg-warm-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-warm-900">Personal Thoughts, Knowledge and Ideas</h1>

      {/* Vision Section */}
      <section className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
        <Link 
          to="/vision"
          className="block group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Eye className="text-indigo-600 group-hover:text-indigo-700 transition-colors" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-700 transition-colors">Vision Of My Life</h2>
            </div>
          </div>
          <div className="bg-indigo-50/50 rounded-lg p-6 border border-indigo-100 group-hover:bg-indigo-50 transition-colors">
            <p className="text-warm-600">
              My personal vision, goals, and aspirations for spiritual growth and impact.
            </p>
          </div>
        </Link>
      </section>

      {/* Routines Section */}
      <section className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
        <Link 
          to="/routines"
          className="block group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Clock className="text-emerald-600 group-hover:text-emerald-700 transition-colors" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-700 transition-colors">Daily, Weekly and Monthly Routines</h2>
            </div>
          </div>
          <div className="bg-emerald-50/50 rounded-lg p-6 border border-emerald-100 group-hover:bg-emerald-50 transition-colors">
            <p className="text-warm-600">
              Structured routines and habits for spiritual growth, personal development, and family life.
            </p>
          </div>
        </Link>
      </section>

      {/* Personal Planning Section */}
      <section className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
        <Link 
          to="/personal-planning"
          className="block group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <BookOpen className="text-amber-600 group-hover:text-amber-700 transition-colors" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-700 transition-colors">Personal Planning</h2>
            </div>
          </div>
          <div className="bg-amber-50/50 rounded-lg p-6 border border-amber-100 group-hover:bg-amber-50 transition-colors">
            <p className="text-warm-600">
              Personal planning, thoughts, and ideas for future projects and development.
            </p>
          </div>
        </Link>
      </section>

      {/* Family History Section */}
      <section className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
        <Link 
          to="/family-history"
          className="block group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <History className="text-purple-600 group-hover:text-purple-700 transition-colors" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-700 transition-colors">Family History</h2>
            </div>
          </div>
          <div className="bg-purple-50/50 rounded-lg p-6 border border-purple-100 group-hover:bg-purple-50 transition-colors">
            <p className="text-warm-600">
              Recording and preserving our family's history and heritage.
            </p>
          </div>
        </Link>
      </section>

      {/* Prayers Section */}
      <section className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
        <Link 
          to="/prayers"
          className="block group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <PrayingHands className="text-rose-600 group-hover:text-rose-700 transition-colors" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-700 transition-colors">Prayers</h2>
            </div>
          </div>
          <div className="bg-rose-50/50 rounded-lg p-6 border border-rose-100 group-hover:bg-rose-50 transition-colors">
            <p className="text-warm-600">
              Prayer points and spiritual guidance for various aspects of life.
            </p>
          </div>
        </Link>
      </section>

      {/* Scriptures Section */}
      <section className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
        <Link 
          to="/scriptures"
          className="block group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Book className="text-sky-600 group-hover:text-sky-700 transition-colors" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-700 transition-colors">Scriptures</h2>
            </div>
          </div>
          <div className="bg-sky-50/50 rounded-lg p-6 border border-sky-100 group-hover:bg-sky-50 transition-colors">
            <p className="text-warm-600">
              Personal paraphrases and interpretations of meaningful scripture passages.
            </p>
          </div>
        </Link>
      </section>

      {/* Money Section */}
      <section className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
        <Link 
          to="/money"
          className="block group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <DollarSign className="text-green-600 group-hover:text-green-700 transition-colors" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-700 transition-colors">Money</h2>
            </div>
          </div>
          <div className="bg-green-50/50 rounded-lg p-6 border border-green-100 group-hover:bg-green-50 transition-colors">
            <p className="text-warm-600">
              Financial management, subscriptions, and monetary planning.
            </p>
          </div>
        </Link>
      </section>

      {/* Heroes Section */}
      <section className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-8">
        <Link 
          to="/heroes"
          className="block group"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Users className="text-purple-600 group-hover:text-purple-700 transition-colors" size={24} />
              <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-700 transition-colors">Heroes</h2>
            </div>
          </div>
          <div className="bg-purple-50/50 rounded-lg p-6 border border-purple-100 group-hover:bg-purple-50 transition-colors">
            <p className="text-warm-600">
              Explore inspiring figures from science and faith who have shaped our world.
            </p>
          </div>
        </Link>
      </section>
    </div>
  );
}