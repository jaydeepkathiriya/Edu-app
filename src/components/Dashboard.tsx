import React, { useState } from 'react';
import { BookOpen, LogOut, Upload, FileText, HelpCircle, CreditCard, Play, BarChart3, TrendingUp, Clock, Award, ChevronRight, X, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStandard, setSelectedStandard] = useState('');
  const [showQuizModal, setShowQuizModal] = useState(false);
  const [showFlashcardModal, setShowFlashcardModal] = useState(false);
  const [currentFlashcard, setCurrentFlashcard] = useState(0);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      navigate('/');
    }
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  const subjects = [
    { name: 'Mathematics', color: 'bg-blue-500', progress: 75, videos: 12 },
    { name: 'Science', color: 'bg-green-500', progress: 60, videos: 8 },
    { name: 'Physics', color: 'bg-purple-500', progress: 85, videos: 15 },
    { name: 'Chemistry', color: 'bg-red-500', progress: 45, videos: 6 },
    { name: 'Language', color: 'bg-yellow-500', progress: 90, videos: 20 }
  ];

  const standards = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  const flashcards = {
    'Mathematics': {
      'Grade 9': [
        { concept: 'Quadratic Equations', front: 'What is the standard form of a quadratic equation?', back: 'ax² + bx + c = 0, where a ≠ 0' },
        { concept: 'Quadratic Equations', front: 'What is the quadratic formula?', back: 'x = (-b ± √(b²-4ac)) / 2a' },
        { concept: 'Geometry', front: 'What is the Pythagorean theorem?', back: 'a² + b² = c² (for right triangles)' }
      ]
    },
    'Science': {
      'Grade 9': [
        { concept: 'Cell Biology', front: 'What is the powerhouse of the cell?', back: 'Mitochondria' },
        { concept: 'Photosynthesis', front: 'What is the chemical equation for photosynthesis?', back: '6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂' }
      ]
    }
  };

  const handleQuizLaunch = () => {
    if (selectedSubject && selectedStandard) {
      setShowQuizModal(true);
    }
  };

  const handleFlashcardLaunch = () => {
    if (selectedSubject && selectedStandard) {
      setCurrentFlashcard(0);
      setShowFlashcardModal(true);
    }
  };

  const nextFlashcard = () => {
    const cards = flashcards[selectedSubject]?.[selectedStandard] || [];
    setCurrentFlashcard((prev) => (prev + 1) % cards.length);
  };

  const prevFlashcard = () => {
    const cards = flashcards[selectedSubject]?.[selectedStandard] || [];
    setCurrentFlashcard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AmplifiED
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-600">Welcome, {user.email?.split('@')[0]}</span>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back to AmplifiED!</h1>
          <p className="text-blue-100 text-lg">
            Continue your learning journey with AI-powered study materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Video Upload Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <Upload className="w-5 h-5 mr-2 text-blue-600" />
                  Upload Video Lecture
                </h2>
              </div>
              <div className="p-6">
                <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Drop your video here</h3>
                  <p className="text-gray-600 mb-4">or click to browse files</p>
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                    Choose File
                  </button>
                  <p className="text-sm text-gray-500 mt-2">Supports MP4, AVI, MOV up to 2GB</p>
                </div>
              </div>
            </div>

            {/* Progress Tracking Section */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-green-600" />
                  Learning Progress
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {subjects.map((subject, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 ${subject.color} rounded-full mr-2`}></div>
                          <span className="font-medium text-gray-900">{subject.name}</span>
                        </div>
                        <span className="text-sm text-gray-600">{subject.videos} videos</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                        <div 
                          className={`h-2 ${subject.color} rounded-full transition-all duration-300`}
                          style={{ width: `${subject.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{subject.progress}% Complete</span>
                        <span>{Math.round(subject.progress * subject.videos / 100)} / {subject.videos}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24h</div>
                    <div className="text-sm text-gray-600">Study Time</div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                    <Award className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">85%</div>
                    <div className="text-sm text-gray-600">Avg Score</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quiz Launcher */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-purple-600" />
                  Launch Quiz
                </h2>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select 
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Subject</option>
                    {subjects.map((subject) => (
                      <option key={subject.name} value={subject.name}>{subject.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Standard</label>
                  <select 
                    value={selectedStandard}
                    onChange={(e) => setSelectedStandard(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Standard</option>
                    {standards.map((standard) => (
                      <option key={standard} value={standard}>{standard}</option>
                    ))}
                  </select>
                </div>
                <button 
                  onClick={handleQuizLaunch}
                  disabled={!selectedSubject || !selectedStandard}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start Quiz
                </button>
              </div>
            </div>

            {/* Flashcards */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2 text-orange-600" />
                  Flashcards
                </h2>
              </div>
              <div className="p-6">
                <button 
                  onClick={handleFlashcardLaunch}
                  disabled={!selectedSubject || !selectedStandard}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Study Flashcards
                </button>
                {selectedSubject && selectedStandard && (
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    {flashcards[selectedSubject]?.[selectedStandard]?.length || 0} cards available
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Quiz Modal */}
      {showQuizModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedSubject} Quiz - {selectedStandard}
              </h3>
              <button 
                onClick={() => setShowQuizModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Quiz Ready!</h4>
              <p className="text-gray-600 mb-6">
                This quiz contains 10 questions based on your {selectedSubject} lectures for {selectedStandard}.
              </p>
              <div className="flex gap-4 justify-center">
                <button 
                  onClick={() => setShowQuizModal(false)}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:shadow-lg">
                  Begin Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Flashcard Modal */}
      {showFlashcardModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {selectedSubject} Flashcards - {selectedStandard}
              </h3>
              <button 
                onClick={() => setShowFlashcardModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {flashcards[selectedSubject]?.[selectedStandard] && (
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-6 min-h-[200px] flex flex-col justify-center">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {flashcards[selectedSubject][selectedStandard][currentFlashcard].concept}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 mb-4">
                    {flashcards[selectedSubject][selectedStandard][currentFlashcard].front}
                  </div>
                  <div className="text-gray-700">
                    {flashcards[selectedSubject][selectedStandard][currentFlashcard].back}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    onClick={prevFlashcard}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-gray-600">
                    {currentFlashcard + 1} of {flashcards[selectedSubject][selectedStandard].length}
                  </span>
                  <button 
                    onClick={nextFlashcard}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;