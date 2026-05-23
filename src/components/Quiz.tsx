import React, { useState, useEffect } from 'react';
import { KnowledgeSubject, FactualPair } from '../types/knowledge';
import { CheckCircle2, XCircle } from 'lucide-react';

interface QuizProps {
  subjects: KnowledgeSubject[];
  selectedSubjects: string[];
  selectedTopics: string[];
  onClose: () => void;
  userName: string;
}

interface QuestionPool {
  [subjectId: string]: string[]; // Maps subject ID to array of fact IDs
}

export function Quiz({ subjects, selectedSubjects, selectedTopics, onClose, userName }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState<{
    fact: FactualPair;
    options: string[];
    correctAnswer: string;
  } | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [questionPool, setQuestionPool] = useState<QuestionPool>({});
  const [totalQuestions, setTotalQuestions] = useState<number>(0);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [availableQuestions, setAvailableQuestions] = useState<FactualPair[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number>(0);
  const [showCompletionModal, setShowCompletionModal] = useState<boolean>(false);
  const [sameSubjectOnly] = useState(() => {
    const stored = localStorage.getItem('sameSubjectOnly');
    return stored ? stored === 'true' : false;
  });

  useEffect(() => {
    const newPool = createInitialPool();
    setQuestionPool(newPool);
    const questions = getInitialQuestions(newPool);
    setAvailableQuestions(questions);
    setTotalQuestions(questions.length);
    loadNextQuestion(questions);
  }, []);

  const getInitialQuestions = (pool: QuestionPool): FactualPair[] => {
    const questions: FactualPair[] = [];
    subjects.forEach(subject => {
      if (selectedSubjects.includes(subject.id) && pool[subject.id]) {
        const subjectQuestions = subject.facts.filter(fact => 
          pool[subject.id].includes(fact.id) &&
          (selectedTopics.length === 0 || selectedTopics.includes(fact.topic || ''))
        );
        questions.push(...subjectQuestions);
      }
    });
    return questions;
  };

  const createInitialPool = () => {
    const pool: QuestionPool = {};
    subjects.forEach(subject => {
      if (selectedSubjects.includes(subject.id)) {
        const filteredFacts = subject.facts.filter(fact => 
          selectedTopics.length === 0 || selectedTopics.includes(fact.topic || '')
        );
        pool[subject.id] = filteredFacts.map(fact => fact.id);
      }
    });
    return pool;
  };

  const resetPool = () => {
    const newPool = createInitialPool();
    setQuestionPool(newPool);
    const questions = getInitialQuestions(newPool);
    setAvailableQuestions(questions);
    setCurrentQuestionNumber(1);
    localStorage.setItem('quizQuestionPool', JSON.stringify(newPool));
    return questions;
  };

  const getRandomFact = (questions: FactualPair[]) => {
    if (questions.length === 0) {
      const newQuestions = resetPool();
      return selectFactFromQuestions(newQuestions);
    }
    return selectFactFromQuestions(questions);
  };

  const selectFactFromQuestions = (questions: FactualPair[]) => {
    if (questions.length === 0) return null;

    const randomIndex = Math.floor(Math.random() * questions.length);
    const correctFact = questions[randomIndex];

    const updatedQuestions = [...questions];
    updatedQuestions.splice(randomIndex, 1);
    setAvailableQuestions(updatedQuestions);

    const otherFacts = sameSubjectOnly
      ? subjects.find(s => s.facts.includes(correctFact))?.facts.filter(f => f.id !== correctFact.id) || []
      : subjects.flatMap(s => s.facts).filter(f => f.id !== correctFact.id);

    const options = [...otherFacts
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map(f => f.definition), correctFact.definition]
      .sort(() => Math.random() - 0.5);

    return {
      fact: correctFact,
      options,
      correctAnswer: correctFact.definition
    };
  };

  const loadNextQuestion = (questions: FactualPair[] = availableQuestions) => {
    const question = getRandomFact(questions);
    if (question) {
      setCurrentQuestion(question);
      setShowResult(false);
      setIsCorrect(false);
      setShowExplanation(false);
    }
  };

  const getScoreFeedback = (score: number, total: number) => {
    const percentage = (score / total) * 100;
    if (percentage <= 50) {
      return "Keep studying! With practice, you'll improve your knowledge.";
    } else if (percentage <= 69.99) {
      return "Well done! That's a great score!";
    } else if (percentage <= 79.999) {
      return "Wow - grade A student - well done!";
    } else {
      return "Einstein would be proud - what an incredible score!";
    }
  };

  const handleAnswer = (answer: string) => {
    if (!currentQuestion) return;
    
    const correct = answer === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    setShowResult(true);
    setShowExplanation(true);

    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }

    if (currentQuestionNumber === totalQuestions) {
      setTimeout(() => {
        setShowCompletionModal(true);
      }, 2000);
    } else {
      setTimeout(() => {
        setCurrentQuestionNumber(prev => prev + 1);
        loadNextQuestion();
      }, correct ? 2000 : 6000);
    }
  };

  const handleCloseQuiz = () => {
    setShowCompletionModal(false);
    setCorrectAnswers(0);
    setCurrentQuestionNumber(1);
    onClose();
  };

  if (!currentQuestion) return null;

  if (showCompletionModal) {
    return (
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
        <div className="bg-white w-full max-w-lg rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-warm-900 mb-4">
            {userName ? `Congratulations, ${userName}!` : 'Quiz Complete!'}
          </h2>
          <p className="text-warm-600 text-lg mb-6">
            Your score: {correctAnswers} out of {totalQuestions} ({((correctAnswers / totalQuestions) * 100).toFixed(1)}%)
          </p>
          <p className="text-warm-600 mb-8">
            {getScoreFeedback(correctAnswers, totalQuestions)}
          </p>
          <button
            onClick={handleCloseQuiz}
            className="px-6 py-3 bg-warm-600 text-white rounded-lg hover:bg-warm-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-0 z-50">
      <div className="bg-white w-full h-full max-h-screen overflow-y-auto p-8 md:p-12">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-warm-900">Quiz Time!</h2>
            <div className="flex items-center gap-4">
              <span className="text-warm-600">
                Question {currentQuestionNumber} of {totalQuestions}
              </span>
              <button
                onClick={onClose}
                className="text-warm-600 hover:text-warm-900 transition-colors"
              >
                Close
              </button>
            </div>
          </div>

          <div className="bg-warm-50 rounded-lg p-8 border border-warm-200">
            <h3 className="text-2xl font-medium text-warm-800 mb-6">
              {currentQuestion.fact.term}
            </h3>

            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  disabled={showResult}
                  className={`w-full text-left p-6 rounded-lg border transition-colors ${
                    showResult
                      ? option === currentQuestion.correctAnswer
                        ? 'bg-green-50 border-green-200'
                        : 'bg-warm-50 border-warm-200'
                      : 'bg-white border-warm-200 hover:bg-warm-50'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {showResult && (
              <div className={`mt-6 flex items-center gap-2 ${
                isCorrect ? 'text-green-600' : 'text-red-600'
              }`}>
                {isCorrect ? (
                  <>
                    <CheckCircle2 size={24} />
                    <span className="text-lg">Correct!</span>
                  </>
                ) : (
                  <>
                    <XCircle size={24} />
                    <span className="text-lg">Try again!</span>
                  </>
                )}
              </div>
            )}

            {showExplanation && currentQuestion.fact.moreInfo && (
              <div className="mt-6 p-6 bg-warm-100 rounded-lg">
                <p className="text-warm-700 text-lg">{currentQuestion.fact.moreInfo.text}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}