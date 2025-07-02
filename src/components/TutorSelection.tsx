import React, { useState } from 'react';
import { ArrowLeft, Play, Star, Award, MessageCircle, Volume2, Heart, BookOpen, Users } from 'lucide-react';
import { Language, Tutor } from '../types';
import { tutorsByLanguage } from '../data/languages';

interface TutorSelectionProps {
  language: Language;
  onTutorSelect: (tutor: Tutor) => void;
  onBack: () => void;
}

const TutorSelection: React.FC<TutorSelectionProps> = ({ language, onTutorSelect, onBack }) => {
  const [playingPreview, setPlayingPreview] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [selectedPersonality, setSelectedPersonality] = useState<string>('All');
  
  const tutors = tutorsByLanguage[language.id] || [];

  console.log('TutorSelection rendered with:', { language, tutorsCount: tutors.length });

  const personalities = ['All', 'Patient & Encouraging', 'Structured & Professional', 'Conversational & Fun'];
  
  const filteredTutors = selectedPersonality === 'All' 
    ? tutors 
    : tutors.filter(tutor => tutor.personality.includes(selectedPersonality.split(' & ')[0]));

  const handleVoicePreview = (tutorId: string, tutorName: string) => {
    console.log('Playing voice preview for tutor:', tutorId);
    setPlayingPreview(tutorId);
    
    // Simulate voice preview with actual feedback
    setTimeout(() => {
      console.log(`Voice preview completed for ${tutorName}`);
      setPlayingPreview(null);
    }, 3000);
  };

  const handleTutorSelect = (tutor: Tutor) => {
    console.log('Tutor selected:', tutor);
    onTutorSelect(tutor);
  };

  const toggleFavorite = (tutorId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(tutorId)) {
      newFavorites.delete(tutorId);
    } else {
      newFavorites.add(tutorId);
    }
    setFavorites(newFavorites);
    console.log(`Tutor ${tutorId} ${newFavorites.has(tutorId) ? 'added to' : 'removed from'} favorites`);
  };

  const getPersonalityColor = (personality: string) => {
    if (personality.includes('Patient')) return 'from-green-400 to-emerald-500';
    if (personality.includes('Structured')) return 'from-red-400 to-pink-500';
    if (personality.includes('Conversational')) return 'from-blue-400 to-cyan-500';
    return 'from-purple-400 to-indigo-500';
  };

  const handlePersonalityFilter = (personality: string) => {
    setSelectedPersonality(personality);
    console.log(`Filtering by personality: ${personality}`);
  };

  const handleViewProfile = (tutor: Tutor) => {
    console.log(`Viewing full profile for ${tutor.name}`);
    // Could open detailed tutor profile modal
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center mb-12">
          <button
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white transition-colors duration-300 mr-6 group"
          >
            <ArrowLeft className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Languages
          </button>
          <div className="flex items-center">
            <span className="text-4xl mr-4">{language.flag}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {language.name} Tutors
              </h1>
              <p className="text-white/70 text-lg mt-2">
                Choose your perfect learning companion - {language.difficulty} Level ({language.level})
              </p>
            </div>
          </div>
        </div>

        {/* Personality Filter */}
        <div className="mb-8">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Filter by Teaching Style
            </h3>
            <div className="flex flex-wrap gap-3">
              {personalities.map((personality) => (
                <button
                  key={personality}
                  onClick={() => handlePersonalityFilter(personality)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedPersonality === personality
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  {personality}
                </button>
              ))}
            </div>
            <div className="mt-3 text-white/60 text-sm">
              Showing {filteredTutors.length} of {tutors.length} tutors
            </div>
          </div>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredTutors.map((tutor, index) => (
            <div
              key={tutor.id}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative backdrop-blur-md bg-white/10 rounded-3xl overflow-hidden border border-white/20 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 hover:scale-105">
                {/* Avatar */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={tutor.avatar}
                    alt={tutor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Interactive Controls */}
                  <div className="absolute top-4 right-4 flex space-x-2">
                    {/* Voice Preview Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVoicePreview(tutor.id, tutor.name);
                      }}
                      className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-pink-500/50 transition-all duration-300 group/voice"
                      title="Preview voice"
                    >
                      {playingPreview === tutor.id ? (
                        <Volume2 className="w-5 h-5 animate-pulse" />
                      ) : (
                        <Play className="w-5 h-5 ml-1 group-hover/voice:scale-110 transition-transform duration-300" />
                      )}
                    </button>

                    {/* Favorite Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(tutor.id);
                      }}
                      className={`w-12 h-12 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                        favorites.has(tutor.id)
                          ? 'bg-pink-500/80 text-white'
                          : 'bg-black/30 text-white hover:bg-pink-500/50'
                      }`}
                      title="Add to favorites"
                    >
                      <Heart className={`w-5 h-5 ${favorites.has(tutor.id) ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Gender Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                    {tutor.gender}
                  </div>

                  {/* Playing Indicator */}
                  {playingPreview === tutor.id && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-2 text-white text-sm flex items-center">
                        <Volume2 className="w-4 h-4 mr-2 animate-pulse" />
                        Playing voice preview...
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Name and Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{tutor.name}</h3>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log(`Rating details for ${tutor.name}`);
                      }}
                      className="flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                    >
                      <Star className="w-5 h-5 fill-current mr-1" />
                      <span className="text-white font-semibold">{tutor.rating}</span>
                    </button>
                  </div>

                  {/* Personality Badge */}
                  <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getPersonalityColor(tutor.personality)} shadow-lg mb-4`}>
                    <MessageCircle className="w-4 h-4 mr-2" />
                    {tutor.personality}
                  </div>

                  {/* Description */}
                  <p className="text-white/80 mb-4 leading-relaxed">{tutor.description}</p>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="flex items-center text-white/70 mb-2">
                      <Award className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">Specialties</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {tutor.specialties.map((specialty, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            console.log(`Learn more about ${specialty}`);
                          }}
                          className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                        >
                          {specialty}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ElevenLabs Voice ID */}
                  <div className="mb-4 p-2 bg-white/5 rounded-lg">
                    <p className="text-white/50 text-xs">
                      ElevenLabs Voice ID: {tutor.elevenLabsVoiceId}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewProfile(tutor);
                      }}
                      className="flex-1 py-3 px-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center group/profile"
                    >
                      <BookOpen className="w-4 h-4 mr-2 group-hover/profile:rotate-12 transition-transform duration-300" />
                      View Profile
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTutorSelect(tutor);
                      }}
                      className="flex-1 py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/25 transition-all duration-300 hover:scale-105 hover:from-pink-400 hover:to-purple-500 flex items-center justify-center group/select"
                    >
                      <Play className="w-4 h-4 mr-2 group-hover/select:translate-x-1 transition-transform duration-300" />
                      Choose {tutor.name}
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* No Tutors Available */}
        {filteredTutors.length === 0 && tutors.length > 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No tutors match your filter</h3>
            <p className="text-white/70 mb-4">
              Try selecting a different teaching style or clear the filter
            </p>
            <button
              onClick={() => setSelectedPersonality('All')}
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-300"
            >
              Show All Tutors
            </button>
          </div>
        )}

        {tutors.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">👨‍🏫</div>
            <h3 className="text-2xl font-bold text-white mb-2">No Tutors Found</h3>
            <p className="text-white/70">
              No tutors available for {language.name} - {language.difficulty} level (ID: {language.id})
            </p>
            <p className="text-white/50 text-sm mt-2">
              Available language IDs: {Object.keys(tutorsByLanguage).join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorSelection;