import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Search, Eye, EyeOff, BookOpen } from 'lucide-react';
import { knowledgeBase } from '../data/knowledge';
import { Breadcrumb } from '../components/Breadcrumb';
import { Quiz } from '../components/Quiz';

export function FactualLearning() {
  const [expandedFacts, setExpandedFacts] = useState<string[]>([]);
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [studyMode, setStudyMode] = useState(true);
  const [revealedTerms, setRevealedTerms] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showQuizSettings, setShowQuizSettings] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [expandedDetails, setExpandedDetails] = useState<string[]>([]);
  const [showTopicsSection, setShowTopicsSection] = useState(false);
  const [userName, setUserName] = useState(() => localStorage.getItem('quizUserName') || '');
  const [sameSubjectOnly, setSameSubjectOnly] = useState(() => {
    const stored = localStorage.getItem('sameSubjectOnly');
    return stored ? stored === 'true' : false;
  });

  // Calculate total terms
  const totalTerms = knowledgeBase.reduce((sum, subject) => sum + subject.facts.length, 0);

  // Get subject counts
  const subjectCounts = knowledgeBase.reduce((acc, subject) => {
    acc[subject.id] = subject.facts.length;
    return acc;
  }, {} as Record<string, number>);

  // Get all unique topics across all subjects
  const allTopics = Array.from(new Set(
    knowledgeBase.flatMap(subject => 
      subject.facts.map(fact => fact.topic).filter((topic): topic is string => !!topic)
    )
  )).sort();

  const toggleFact = (factId: string) => {
    setExpandedFacts(prev => 
      prev.includes(factId) 
        ? prev.filter(id => id !== factId)
        : [...prev, factId]
    );
  };

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev =>
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const toggleTerm = (factId: string) => {
    setRevealedTerms(prev =>
      prev.includes(factId)
        ? prev.filter(id => id !== factId)
        : [...prev, factId]
    );
  };

  const toggleDetails = (factId: string) => {
    setExpandedDetails(prev =>
      prev.includes(factId)
        ? prev.filter(id => id !== factId)
        : [...prev, factId]
    );
  };

  const toggleSubjectSelection = (subjectId: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subjectId)
        ? prev.filter(id => id !== subjectId)
        : [...prev, subjectId]
    );
  };

  const toggleTopicSelection = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic)
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const handleShowQuizSettings = () => {
    console.log('Quiz Settings button clicked');
    setShowQuizSettings(true);
    console.log('Quiz Settings modal opened');
    console.log('Currently selected subjects:', selectedSubjects);
  };

  const handleStartQuiz = () => {
    console.log('Start Quiz button clicked');
    console.log('Selected subjects:', selectedSubjects);
    
    if (selectedSubjects.length === 0) {
      console.log('No subjects selected - showing alert');
      alert('Please select at least one subject');
      return;
    }

    console.log('Starting quiz - transitioning to quiz view');
    localStorage.setItem('sameSubjectOnly', sameSubjectOnly.toString());
    localStorage.setItem('quizUserName', userName);
    setShowQuizSettings(false);
    setShowQuiz(true);
  };

  const filteredKnowledge = knowledgeBase.map(subject => ({
    ...subject,
    facts: subject.facts.filter(fact => 
      fact.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fact.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (fact.topic && fact.topic.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  })).filter(subject => subject.facts.length > 0);

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Wiki', path: '/wiki' },
          { label: 'Factual Learning', path: '/factual-learning' }
        ]}
      />

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-warm-900">Factual Learning</h1>
            <p className="text-warm-600 italic">
              A collection of {totalTerms} terms across various subjects
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleShowQuizSettings}
              className="flex items-center gap-2 px-4 py-2 bg-warm-600 text-white rounded-lg hover:bg-warm-700 transition-colors"
            >
              <BookOpen size={20} />
              <span>Quiz Settings</span>
            </button>
            <button
              onClick={() => {
                setStudyMode(!studyMode);
                setRevealedTerms([]);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-warm-100 text-warm-700 rounded-lg hover:bg-warm-200 transition-colors"
            >
              {studyMode ? (
                <>
                  <Eye size={20} />
                  <span>Show All</span>
                </>
              ) : (
                <>
                  <EyeOff size={20} />
                  <span>Study Mode</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-warm-400" size={20} />
          <input
            type="text"
            placeholder="Search terms, definitions, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-warm-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-500"
          />
        </div>

        {/* Quiz Settings Modal */}
        {showQuizSettings && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold text-warm-900">Quiz Settings</h2>
                  <button
                    onClick={() => setShowQuizSettings(false)}
                    className="text-warm-600 hover:text-warm-900 transition-colors"
                  >
                    Close
                  </button>
                </div>

                {/* Name Input */}
                <div>
                  <label htmlFor="userName" className="block text-sm font-medium text-warm-700 mb-2">
                    Your Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 border border-warm-200 rounded-md focus:outline-none focus:ring-2 focus:ring-warm-500"
                  />
                </div>

                {/* Subject Selection */}
                <div>
                  <h3 className="text-lg font-medium text-warm-700 mb-2">Select Subjects</h3>
                  <div className="flex flex-wrap gap-2">
                    {knowledgeBase.map(subject => (
                      <button
                        key={subject.id}
                        onClick={() => toggleSubjectSelection(subject.id)}
                        className={`px-3 py-1 rounded-full border transition-colors ${
                          selectedSubjects.includes(subject.id)
                            ? 'bg-warm-600 text-white border-warm-600'
                            : 'bg-white text-warm-600 border-warm-200 hover:bg-warm-50'
                        }`}
                      >
                        {subject.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Topic Selection */}
                <div>
                  <button
                    onClick={() => setShowTopicsSection(!showTopicsSection)}
                    className="flex items-center justify-between w-full text-left text-lg font-medium text-warm-700 mb-2 hover:text-warm-900 transition-colors"
                  >
                    <span>Select Topics (Optional)</span>
                    {showTopicsSection ? (
                      <ChevronUp size={20} className="text-warm-600" />
                    ) : (
                      <ChevronDown size={20} className="text-warm-600" />
                    )}
                  </button>
                  {showTopicsSection && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {allTopics.map(topic => (
                        <button
                          key={topic}
                          onClick={() => toggleTopicSelection(topic)}
                          className={`px-3 py-1 rounded-full border transition-colors ${
                            selectedTopics.includes(topic)
                              ? 'bg-warm-600 text-white border-warm-600'
                              : 'bg-white text-warm-600 border-warm-200 hover:bg-warm-50'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Same Subject Only Toggle */}
                <div>
                  <h3 className="text-lg font-medium text-warm-700 mb-2">Answer Options</h3>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={sameSubjectOnly}
                      onChange={(e) => setSameSubjectOnly(e.target.checked)}
                      className="w-4 h-4 text-warm-600 border-warm-300 rounded focus:ring-warm-500"
                    />
                    <span className="text-warm-700">Use answers from same subject only</span>
                  </label>
                  <p className="text-warm-500 text-sm mt-1">
                    When enabled, incorrect answers will only be taken from the same subject as the question
                  </p>
                </div>

                <button
                  onClick={handleStartQuiz}
                  className="w-full flex items-center justify-center gap-2 bg-warm-600 text-white px-6 py-3 rounded-lg hover:bg-warm-700 transition-colors"
                >
                  <BookOpen size={20} />
                  <span>Start Quiz</span>
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-8">
          {filteredKnowledge.map(subject => {
            const IconComponent = subject.icon ? ChevronDown : ChevronDown;
            const isExpanded = expandedSubjects.includes(subject.id);
            
            return (
              <section 
                key={subject.id} 
                className={`bg-white rounded-lg shadow-sm transition-all duration-300 ${isExpanded ? 'p-8' : 'p-6'}`}
              >
                <div 
                  className="flex items-center justify-between cursor-pointer group"
                  onClick={() => toggleSubject(subject.id)}
                >
                  <div className="flex items-center gap-3">
                    <IconComponent className="text-warm-600 group-hover:text-warm-800 transition-colors" size={24} />
                    <div>
                      <h2 className="text-2xl font-semibold text-warm-800 group-hover:text-warm-900 transition-colors">
                        {subject.name}
                      </h2>
                      <p className="text-sm text-warm-500">
                        {subjectCounts[subject.id]} terms
                      </p>
                    </div>
                  </div>
                  <ChevronDown 
                    className={`text-warm-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    size={20} 
                  />
                </div>

                {isExpanded && (
                  <>
                    <p className="text-warm-600 mt-4 mb-6">{subject.description}</p>
                    <div className="space-y-4">
                      {subject.facts.map(fact => (
                        <div
                          key={fact.id}
                          className="bg-warm-50 rounded-lg p-6 border border-warm-200"
                        >
                          {fact.topic && (
                            <div className="text-sm text-warm-500 mb-2">{fact.topic}</div>
                          )}
                          <div className="space-y-4">
                            <div 
                              className={`flex items-center justify-between ${studyMode ? 'cursor-pointer' : ''}`}
                              onClick={() => studyMode && toggleTerm(fact.id)}
                            >
                              <h3 className="text-lg font-medium text-warm-800">
                                {fact.term}
                              </h3>
                              {studyMode && (
                                <ChevronDown 
                                  className={`text-warm-400 transition-transform duration-300 ${revealedTerms.includes(fact.id) ? 'rotate-180' : ''}`}
                                  size={20}
                                />
                              )}
                            </div>

                            {(!studyMode || revealedTerms.includes(fact.id)) && (
                              <>
                                <p className="text-warm-600">{fact.definition}</p>
                                
                                {fact.moreInfo && (
                                  <div>
                                    <button
                                      onClick={() => toggleDetails(fact.id)}
                                      className="flex items-center gap-2 text-warm-500 hover:text-warm-700 transition-colors"
                                    >
                                      {expandedDetails.includes(fact.id) ? (
                                        <>
                                          <ChevronUp size={20} />
                                          <span>Show less</span>
                                        </>
                                      ) : (
                                        <>
                                          <ChevronDown size={20} />
                                          <span>Learn more</span>
                                        </>
                                      )}
                                    </button>

                                    {expandedDetails.includes(fact.id) && (
                                      <div className="mt-4 space-y-4">
                                        <p className="text-warm-600">{fact.moreInfo.text}</p>
                                        
                                        {fact.moreInfo.images && (
                                          <div className="grid gap-4">
                                            {fact.moreInfo.images.map((image, index) => (
                                              <img
                                                key={index}
                                                src={image}
                                                alt={`Illustration for ${fact.term}`}
                                                className="rounded-lg w-full h-48 object-cover"
                                              />
                                            ))}
                                          </div>
                                        )}

                                        {fact.moreInfo.links && (
                                          <div className="flex flex-wrap gap-4">
                                            {fact.moreInfo.links.map((link, index) => (
                                              <a
                                                key={index}
                                                href={link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 text-warm-600 hover:text-warm-900 transition-colors"
                                              >
                                                <ExternalLink size={16} />
                                                <span>Learn more</span>
                                              </a>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    )}
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </section>
            );
          })}
        </div>
      </div>

      {showQuiz && (
        <Quiz
          subjects={knowledgeBase}
          selectedSubjects={selectedSubjects}
          selectedTopics={selectedTopics}
          onClose={() => setShowQuiz(false)}
          userName={userName}
        />
      )}
    </div>
  );
}