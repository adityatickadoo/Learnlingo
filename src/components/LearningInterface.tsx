import React, { useState, useEffect } from 'react';
import { ArrowLeft, Phone, PhoneOff, Mic, MicOff, Volume2, Settings, MessageSquare, BarChart3, Award, Clock } from 'lucide-react';
import { Language, Tutor } from '../types';

interface LearningInterfaceProps {
  language: Language;
  tutor: Tutor;
  onBack: () => void;
}

const LearningInterface: React.FC<LearningInterfaceProps> = ({ language, tutor, onBack }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [connectionTime, setConnectionTime] = useState(0);
  const [sessionStats, setSessionStats] = useState({
    wordsLearned: 0,
    conversationTime: 0,
    pronunciationScore: 0
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isConnected) {
      interval = setInterval(() => {
        setConnectionTime(prev => prev + 1);
        // Simulate learning progress
        if (connectionTime % 10 === 0) {
          setSessionStats(prev => ({
            wordsLearned: prev.wordsLearned + Math.floor(Math.random() * 3),
            conversationTime: prev.conversationTime + 1,
            pronunciationScore: Math.min(100, prev.pronunciationScore + Math.floor(Math.random() * 5))
          }));
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isConnected, connectionTime]);

  const handleConnect = async () => {
    setIsConnecting(true);
    
    // Here you would integrate with ElevenLabs API
    try {
      console.log(`Connecting to ${tutor.name} with ElevenLabs voice ID: ${tutor.elevenLabsVoiceId}`);
      
      // Simulate connection delay with progress feedback
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
        console.log(`Successfully connected to ${tutor.name}`);
      }, 3000);
    } catch (error) {
      console.error('Failed to connect to ElevenLabs:', error);
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setConnectionTime(0);
    setSessionStats({ wordsLearned: 0, conversationTime: 0, pronunciationScore: 0 });
    console.log('Session ended');
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
    console.log(`Microphone ${!isMuted ? 'muted' : 'unmuted'}`);
  };

  const handleSettings = () => {
    console.log('Opening settings');
    // Could open settings modal
  };

  const handleViewProgress = () => {
    console.log('Viewing detailed progress');
    // Could open progress dashboard
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
      {/* Header */}
      <div className="backdrop-blur-md bg-white/10 border-b border-white/20 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-6 h-6 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Tutors
          </button>
          
          <div className="flex items-center space-x-4">
            <span className="text-2xl">{language.flag}</span>
            <div className="text-white">
              <h1 className="text-xl font-bold">{language.name} with {tutor.name}</h1>
              {isConnected && (
                <div className="flex items-center text-white/70 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {formatTime(connectionTime)}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {isConnected && (
              <button 
                onClick={handleViewProgress}
                className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-all duration-300 group"
                title="View progress"
              >
                <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            )}
            <button 
              onClick={handleSettings}
              className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl text-white hover:bg-white/20 transition-all duration-300 group"
              title="Settings"
            >
              <Settings className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Interface */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center">
          {/* Tutor Avatar */}
          <div className="relative mb-8">
            <div className={`w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl transition-all duration-500 ${
              isConnected 
                ? 'ring-4 ring-green-400 ring-opacity-50 animate-pulse' 
                : isConnecting 
                ? 'ring-4 ring-yellow-400 ring-opacity-50 animate-pulse' 
                : 'ring-2 ring-white/20'
            }`}>
              <img
                src={tutor.avatar}
                alt={tutor.name}
                className="w-full h-full object-cover"
              />
              {isConnected && (
                <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent"></div>
              )}
            </div>
            
            {/* Status Indicator */}
            <div className="absolute bottom-4 right-16 w-8 h-8 rounded-full border-4 border-white shadow-lg">
              {isConnected ? (
                <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
              ) : isConnecting ? (
                <div className="w-full h-full bg-yellow-400 rounded-full animate-pulse"></div>
              ) : (
                <div className="w-full h-full bg-gray-400 rounded-full"></div>
              )}
            </div>

            {/* Voice Activity Indicator */}
            {isConnected && !isMuted && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-8 bg-gradient-to-t from-emerald-400 to-cyan-400 rounded-full animate-pulse"
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        height: `${Math.random() * 32 + 16}px`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Connection Status */}
          <div className="mb-8">
            {isConnecting ? (
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20">
                <div className="animate-spin w-8 h-8 border-3 border-pink-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <h2 className="text-2xl font-bold text-white mb-2">Connecting to {tutor.name}...</h2>
                <p className="text-white/70">Setting up your personalized learning session with ElevenLabs AI voice</p>
                <p className="text-white/50 text-sm mt-2">Voice ID: {tutor.elevenLabsVoiceId}</p>
                <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                </div>
              </div>
            ) : isConnected ? (
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-2">Connected with {tutor.name}</h2>
                <p className="text-white/70">Ready to practice your {language.name}!</p>
                <p className="text-white/50 text-sm mt-2">Using ElevenLabs voice synthesis</p>
                
                {/* Live Session Stats */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-400">{sessionStats.wordsLearned}</div>
                    <div className="text-xs text-white/60">Words Learned</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">{sessionStats.conversationTime}m</div>
                    <div className="text-xs text-white/60">Speaking Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{sessionStats.pronunciationScore}%</div>
                    <div className="text-xs text-white/60">Pronunciation</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-2">Ready to Connect</h2>
                <p className="text-white/70">Click the button below to start your session with {tutor.name}</p>
                <p className="text-white/50 text-sm mt-2">Powered by ElevenLabs AI voice technology</p>
              </div>
            )}
          </div>

          {/* Control Buttons */}
          <div className="flex justify-center space-x-6 mb-8">
            {!isConnected && !isConnecting && (
              <button
                onClick={handleConnect}
                className="group flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110"
                title="Start conversation"
              >
                <Phone className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            )}

            {isConnected && (
              <>
                <button
                  onClick={handleMuteToggle}
                  className={`group flex items-center justify-center w-16 h-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 ${
                    isMuted 
                      ? 'bg-red-500 hover:bg-red-400' 
                      : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                  }`}
                  title={isMuted ? 'Unmute microphone' : 'Mute microphone'}
                >
                  {isMuted ? (
                    <MicOff className="w-6 h-6" />
                  ) : (
                    <Mic className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  )}
                </button>

                <button 
                  onClick={() => console.log('Volume control clicked')}
                  className="group flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full text-white shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  title="Volume control"
                >
                  <Volume2 className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </button>

                <button
                  onClick={() => console.log('Send message clicked')}
                  className="group flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full text-white shadow-xl hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  title="Send message"
                >
                  <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                </button>

                <button
                  onClick={handleDisconnect}
                  className="group flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-pink-600 text-white rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-110"
                  title="End conversation"
                >
                  <PhoneOff className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
                </button>
              </>
            )}
          </div>

          {/* Enhanced Tutor Info Panel */}
          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="text-4xl mr-3">{tutor.gender === 'Male' ? '👨‍🏫' : '👩‍🏫'}</div>
              <div>
                <h3 className="text-xl font-bold text-white">{tutor.name}</h3>
                <p className="text-white/70">{tutor.personality}</p>
              </div>
              <button
                onClick={() => console.log(`View ${tutor.name}'s full profile`)}
                className="ml-auto p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300"
                title="View full profile"
              >
                <Award className="w-5 h-5 text-white" />
              </button>
            </div>
            <p className="text-white/80 mb-4">{tutor.description}</p>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {tutor.specialties.map((specialty, index) => (
                <button
                  key={index}
                  onClick={() => console.log(`Learn more about ${specialty}`)}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/80 border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
                >
                  {specialty}
                </button>
              ))}
            </div>
            <div className="text-white/50 text-xs">
              ElevenLabs Voice ID: {tutor.elevenLabsVoiceId}
            </div>
            
            {/* Quick Actions */}
            {isConnected && (
              <div className="mt-4 pt-4 border-t border-white/20">
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => console.log('Request pronunciation help')}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    🗣️ Pronunciation Help
                  </button>
                  <button
                    onClick={() => console.log('Ask for grammar explanation')}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    📚 Grammar Help
                  </button>
                  <button
                    onClick={() => console.log('Request cultural context')}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                  >
                    🌍 Cultural Context
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningInterface;