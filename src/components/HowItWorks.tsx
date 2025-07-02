import React, { useState } from 'react';
import { Languages, Users, Play, ArrowRight, BookOpen, MessageSquare, Award, CheckCircle } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      icon: Languages,
      title: 'Choose Your Language & Level',
      description: 'Select from 9 popular languages and pick your perfect difficulty level - from beginner to intermediate.',
      color: 'from-emerald-500 to-teal-500',
      details: ['Beginner (A1-A2)', 'Intermediate (B1-B2)', 'Expert AI Tutors'],
      action: 'Browse Languages'
    },
    {
      number: '02',
      icon: Users,
      title: 'Select Your Perfect AI Tutor',
      description: 'Choose a tutor personality that matches your learning style from our diverse collection of AI tutors.',
      color: 'from-cyan-500 to-blue-500',
      details: ['Patient & Encouraging', 'Structured & Professional', 'Conversational & Fun'],
      action: 'Meet Tutors'
    },
    {
      number: '03',
      icon: Play,
      title: 'Start Learning & Practicing',
      description: 'Begin your personalized language journey with real-time conversations, feedback, and progress tracking.',
      color: 'from-blue-500 to-indigo-500',
      details: ['Real-time conversations', 'Instant feedback', 'Progress tracking'],
      action: 'Start Learning'
    }
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(activeStep === index ? null : index);
  };

  const handleStepAction = (stepTitle: string, action: string) => {
    console.log(`${action} clicked for step: ${stepTitle}`);
    // Could trigger navigation to specific step
  };

  const handleStartNow = () => {
    console.log('Start Learning Now clicked');
    // Could trigger app start
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How It
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Get started with your language learning journey in just three simple steps and begin speaking confidently
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 transform -translate-y-1/2 rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isActive = activeStep === index;
              
              return (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 0.3}s` }}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Step Card */}
                  <div className={`relative backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:scale-105 text-center ${isActive ? 'ring-2 ring-cyan-400/50 bg-white/20' : ''}`}>
                    {/* Step Number */}
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-6 mt-8">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                        <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-white/70 leading-relaxed mb-6">{step.description}</p>

                    {/* Details */}
                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, detailIndex) => (
                        <div
                          key={detailIndex}
                          className="flex items-center justify-center text-white/60 text-sm"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3`}></div>
                          {detail}
                        </div>
                      ))}
                    </div>

                    {/* Expandable Active Content */}
                    {isActive && (
                      <div className="space-y-3 mb-6 animate-pulse">
                        <div className="text-cyan-300 text-sm font-medium">✨ What you'll get:</div>
                        <div className="grid grid-cols-1 gap-2">
                          {['Personalized experience', 'Expert guidance', 'Immediate results'].map((benefit, i) => (
                            <div key={i} className="flex items-center justify-center text-cyan-200 text-xs">
                              <CheckCircle className="w-3 h-3 mr-2" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStepAction(step.title, step.action);
                      }}
                      className={`w-full py-3 px-4 bg-gradient-to-r ${step.color} text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group/btn`}
                    >
                      <Play className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      {step.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  </div>

                  {/* Arrow (Hidden on mobile) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 shadow-lg hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="w-4 h-4 text-white/70" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Success Stories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Success Stories</h3>
            <p className="text-white/70">See what our learners achieve with LearnLingo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: '3x', description: 'Faster than traditional methods', icon: Award, action: 'See Proof' },
              { metric: '98%', description: 'Student satisfaction rate', icon: MessageSquare, action: 'Read Reviews' },
              { metric: '6 weeks', description: 'Average to conversational level', icon: BookOpen, action: 'View Timeline' }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <button
                  key={index}
                  onClick={() => console.log(`${stat.action} clicked`)}
                  className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-xl text-center group hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-white/15"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-white/80 mb-3">{stat.description}</p>
                  <div className="text-cyan-300 text-sm font-medium group-hover:text-cyan-200 transition-colors duration-300">
                    {stat.action} →
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-20">
          <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-white/20 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Begin Your Journey?</h3>
            <p className="text-white/80 mb-6">Join thousands of learners who are already mastering new languages with LearnLingo's AI tutors</p>
            <button 
              onClick={handleStartNow}
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Play className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Start Learning Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;