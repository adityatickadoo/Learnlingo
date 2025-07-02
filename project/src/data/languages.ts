import { Language, Tutor } from '../types';

export const languages: Language[] = [
  // English - First language
  { id: 'english-beginner', name: 'English', flag: '🇺🇸', tutorCount: 15, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'english-intermediate', name: 'English', flag: '🇺🇸', tutorCount: 12, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // Spanish
  { id: 'spanish-beginner', name: 'Spanish', flag: '🇪🇸', tutorCount: 14, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'spanish-intermediate', name: 'Spanish', flag: '🇪🇸', tutorCount: 10, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // French
  { id: 'french-beginner', name: 'French', flag: '🇫🇷', tutorCount: 12, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'french-intermediate', name: 'French', flag: '🇫🇷', tutorCount: 9, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // German
  { id: 'german-beginner', name: 'German', flag: '🇩🇪', tutorCount: 10, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'german-intermediate', name: 'German', flag: '🇩🇪', tutorCount: 8, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // Italian
  { id: 'italian-beginner', name: 'Italian', flag: '🇮🇹', tutorCount: 11, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'italian-intermediate', name: 'Italian', flag: '🇮🇹', tutorCount: 8, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // Japanese
  { id: 'japanese-beginner', name: 'Japanese', flag: '🇯🇵', tutorCount: 9, difficulty: 'Beginner', level: 'N5-N4' },
  { id: 'japanese-intermediate', name: 'Japanese', flag: '🇯🇵', tutorCount: 6, difficulty: 'Intermediate', level: 'N3-N2' },
  
  // Mandarin
  { id: 'mandarin-beginner', name: 'Mandarin', flag: '🇨🇳', tutorCount: 13, difficulty: 'Beginner', level: 'HSK 1-2' },
  { id: 'mandarin-intermediate', name: 'Mandarin', flag: '🇨🇳', tutorCount: 9, difficulty: 'Intermediate', level: 'HSK 3-4' },
  
  // Portuguese
  { id: 'portuguese-beginner', name: 'Portuguese', flag: '🇧🇷', tutorCount: 8, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'portuguese-intermediate', name: 'Portuguese', flag: '🇧🇷', tutorCount: 6, difficulty: 'Intermediate', level: 'B1-B2' },
  
  // Arabic
  { id: 'arabic-beginner', name: 'Arabic', flag: '🇸🇦', tutorCount: 7, difficulty: 'Beginner', level: 'A1-A2' },
  { id: 'arabic-intermediate', name: 'Arabic', flag: '🇸🇦', tutorCount: 5, difficulty: 'Intermediate', level: 'B1-B2' }
];

export const tutorsByLanguage: Record<string, Tutor[]> = {
  'english-beginner': [
    {
      id: 'sarah-english-beginner',
      name: 'Sarah',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Warm and supportive, perfect for building confidence in English basics',
      specialties: ['Pronunciation', 'Grammar Basics', 'Everyday Conversation'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'sarah-voice-id' // Replace with actual ElevenLabs voice ID
    },
    {
      id: 'mike-english-beginner',
      name: 'Mike',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Makes learning English enjoyable with interactive conversations',
      specialties: ['Speaking Practice', 'Vocabulary Building', 'Cultural Context'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'mike-voice-id'
    },
    {
      id: 'emma-english-beginner',
      name: 'Emma',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Clear and methodical approach to English fundamentals',
      specialties: ['Grammar', 'Writing Skills', 'Academic English'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'emma-voice-id'
    },
    {
      id: 'david-english-beginner',
      name: 'David',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Gentle guidance with clear explanations for beginners',
      specialties: ['Basic Conversation', 'Pronunciation', 'Confidence Building'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'david-voice-id'
    }
  ],
  'english-intermediate': [
    {
      id: 'jessica-english-intermediate',
      name: 'Jessica',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Focused on advancing your English to the next level',
      specialties: ['Business English', 'Academic Writing', 'Advanced Grammar'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'jessica-voice-id'
    },
    {
      id: 'james-english-intermediate',
      name: 'James',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging discussions to improve fluency and confidence',
      specialties: ['Debate & Discussion', 'Idioms', 'Professional Communication'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'james-voice-id'
    }
  ],
  'spanish-beginner': [
    {
      id: 'maria-spanish-beginner',
      name: 'María',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Warm and supportive, perfect for building confidence in Spanish',
      specialties: ['Pronunciation', 'Basic Grammar', 'Travel Spanish'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'maria-voice-id'
    },
    {
      id: 'carlos-spanish-beginner',
      name: 'Carlos',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Energetic and engaging, makes learning Spanish enjoyable',
      specialties: ['Everyday Spanish', 'Latin Culture', 'Pronunciation'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'carlos-voice-id'
    },
    {
      id: 'lucia-spanish-beginner',
      name: 'Lucía',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Clear methodology for learning Spanish fundamentals',
      specialties: ['Grammar Basics', 'Vocabulary', 'Writing Skills'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'lucia-voice-id'
    },
    {
      id: 'diego-spanish-beginner',
      name: 'Diego',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Supportive approach to Spanish learning with cultural insights',
      specialties: ['Cultural Context', 'Basic Conversation', 'Confidence Building'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'diego-voice-id'
    }
  ],
  'spanish-intermediate': [
    {
      id: 'sofia-spanish-intermediate',
      name: 'Sofía',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Disciplined approach with excellent results for intermediate Spanish',
      specialties: ['Advanced Grammar', 'Business Spanish', 'Academic Writing'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'sofia-voice-id'
    },
    {
      id: 'alejandro-spanish-intermediate',
      name: 'Alejandro',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging conversations to master intermediate Spanish',
      specialties: ['Literature', 'Professional Spanish', 'Regional Dialects'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'alejandro-voice-id'
    }
  ],
  'french-beginner': [
    {
      id: 'claire-french-beginner',
      name: 'Claire',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Gentle guidance with authentic Parisian accent',
      specialties: ['Pronunciation', 'Cultural Context', 'Travel French'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'claire-voice-id'
    },
    {
      id: 'pierre-french-beginner',
      name: 'Pierre',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Brings French culture to life through conversation',
      specialties: ['Everyday French', 'Cultural Context', 'Basic Grammar'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'pierre-voice-id'
    },
    {
      id: 'amelie-french-beginner',
      name: 'Amélie',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Systematic approach to French language fundamentals',
      specialties: ['Grammar', 'Writing Skills', 'Formal French'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'amelie-voice-id'
    },
    {
      id: 'henri-french-beginner',
      name: 'Henri',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Supportive learning environment for French beginners',
      specialties: ['Pronunciation', 'Confidence Building', 'Basic Conversation'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'henri-voice-id'
    }
  ],
  'french-intermediate': [
    {
      id: 'isabelle-french-intermediate',
      name: 'Isabelle',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Perfect French with literary and cultural depth',
      specialties: ['Literature', 'Advanced Grammar', 'Business French'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'isabelle-voice-id'
    },
    {
      id: 'antoine-french-intermediate',
      name: 'Antoine',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging discussions in French culture and language',
      specialties: ['Philosophy', 'Cultural Studies', 'Professional French'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'antoine-voice-id'
    }
  ],
  'german-beginner': [
    {
      id: 'greta-german-beginner',
      name: 'Greta',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Supportive approach to German language learning',
      specialties: ['Grammar Basics', 'Pronunciation', 'Everyday German'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'greta-voice-id'
    },
    {
      id: 'hans-german-beginner',
      name: 'Hans',
      gender: 'Male',
      personality: 'Structured & Professional',
      description: 'Methodical approach to German fundamentals',
      specialties: ['Grammar', 'Business German', 'Technical Vocabulary'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'hans-voice-id'
    },
    {
      id: 'anna-german-beginner',
      name: 'Anna',
      gender: 'Female',
      personality: 'Conversational & Fun',
      description: 'Makes German learning enjoyable and engaging',
      specialties: ['Cultural Context', 'Travel German', 'Conversation'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'anna-voice-id'
    },
    {
      id: 'klaus-german-beginner',
      name: 'Klaus',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Gentle guidance through German language basics',
      specialties: ['Pronunciation', 'Basic Grammar', 'Confidence Building'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'klaus-voice-id'
    }
  ],
  'german-intermediate': [
    {
      id: 'ingrid-german-intermediate',
      name: 'Ingrid',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Advanced German with focus on precision and accuracy',
      specialties: ['Advanced Grammar', 'Business German', 'Academic Writing'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'ingrid-voice-id'
    },
    {
      id: 'wolfgang-german-intermediate',
      name: 'Wolfgang',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging discussions about German culture and language',
      specialties: ['Literature', 'Philosophy', 'Cultural Studies'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'wolfgang-voice-id'
    }
  ],
  'italian-beginner': [
    {
      id: 'giulia-italian-beginner',
      name: 'Giulia',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Warm Italian hospitality in language learning',
      specialties: ['Pronunciation', 'Cultural Context', 'Travel Italian'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'giulia-voice-id'
    },
    {
      id: 'marco-italian-beginner',
      name: 'Marco',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Passionate about sharing Italian language and culture',
      specialties: ['Everyday Italian', 'Food & Culture', 'Basic Grammar'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'marco-voice-id'
    },
    {
      id: 'francesca-italian-beginner',
      name: 'Francesca',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Systematic approach to Italian language fundamentals',
      specialties: ['Grammar', 'Writing Skills', 'Formal Italian'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'francesca-voice-id'
    },
    {
      id: 'alessandro-italian-beginner',
      name: 'Alessandro',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Supportive learning environment for Italian beginners',
      specialties: ['Pronunciation', 'Confidence Building', 'Basic Conversation'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'alessandro-voice-id'
    }
  ],
  'italian-intermediate': [
    {
      id: 'valentina-italian-intermediate',
      name: 'Valentina',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Elegant Italian with cultural sophistication',
      specialties: ['Literature', 'Art & Culture', 'Business Italian'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'valentina-voice-id'
    },
    {
      id: 'lorenzo-italian-intermediate',
      name: 'Lorenzo',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging discussions about Italian culture and language',
      specialties: ['History', 'Regional Dialects', 'Professional Italian'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'lorenzo-voice-id'
    }
  ],
  'japanese-beginner': [
    {
      id: 'yuki-japanese-beginner',
      name: 'Yuki',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Gentle introduction to Japanese language and culture',
      specialties: ['Hiragana/Katakana', 'Basic Grammar', 'Cultural Context'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'yuki-voice-id'
    },
    {
      id: 'hiroshi-japanese-beginner',
      name: 'Hiroshi',
      gender: 'Male',
      personality: 'Structured & Professional',
      description: 'Methodical approach to Japanese fundamentals',
      specialties: ['Grammar', 'Writing Systems', 'Business Japanese'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'hiroshi-voice-id'
    },
    {
      id: 'sakura-japanese-beginner',
      name: 'Sakura',
      gender: 'Female',
      personality: 'Conversational & Fun',
      description: 'Makes Japanese learning enjoyable with cultural insights',
      specialties: ['Everyday Japanese', 'Anime Culture', 'Pronunciation'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'sakura-voice-id'
    },
    {
      id: 'takeshi-japanese-beginner',
      name: 'Takeshi',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Supportive approach to Japanese language learning',
      specialties: ['Basic Conversation', 'Cultural Etiquette', 'Confidence Building'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'takeshi-voice-id'
    }
  ],
  'japanese-intermediate': [
    {
      id: 'akiko-japanese-intermediate',
      name: 'Akiko',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Advanced Japanese with cultural depth',
      specialties: ['Kanji', 'Literature', 'Business Japanese'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'akiko-voice-id'
    },
    {
      id: 'kenji-japanese-intermediate',
      name: 'Kenji',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging discussions about Japanese culture and language',
      specialties: ['History', 'Traditional Culture', 'Professional Japanese'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'kenji-voice-id'
    }
  ],
  'mandarin-beginner': [
    {
      id: 'li-wei-mandarin-beginner',
      name: 'Li Wei',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Gentle introduction to Mandarin with focus on tones',
      specialties: ['Pinyin', 'Tones', 'Basic Characters'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'li-wei-voice-id'
    },
    {
      id: 'zhang-ming-mandarin-beginner',
      name: 'Zhang Ming',
      gender: 'Male',
      personality: 'Structured & Professional',
      description: 'Systematic approach to Mandarin fundamentals',
      specialties: ['Grammar', 'Writing', 'Business Chinese'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'zhang-ming-voice-id'
    },
    {
      id: 'wang-mei-mandarin-beginner',
      name: 'Wang Mei',
      gender: 'Female',
      personality: 'Conversational & Fun',
      description: 'Makes Mandarin learning enjoyable with cultural stories',
      specialties: ['Everyday Chinese', 'Cultural Context', 'Pronunciation'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'wang-mei-voice-id'
    },
    {
      id: 'chen-hao-mandarin-beginner',
      name: 'Chen Hao',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Supportive learning environment for Mandarin beginners',
      specialties: ['Basic Conversation', 'Character Recognition', 'Confidence Building'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'chen-hao-voice-id'
    }
  ],
  'mandarin-intermediate': [
    {
      id: 'liu-yan-mandarin-intermediate',
      name: 'Liu Yan',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Advanced Mandarin with cultural sophistication',
      specialties: ['Literature', 'Classical Chinese', 'Business Chinese'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'liu-yan-voice-id'
    },
    {
      id: 'wu-gang-mandarin-intermediate',
      name: 'Wu Gang',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging discussions about Chinese culture and language',
      specialties: ['History', 'Philosophy', 'Professional Chinese'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'wu-gang-voice-id'
    }
  ],
  'portuguese-beginner': [
    {
      id: 'ana-portuguese-beginner',
      name: 'Ana',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Warm Brazilian approach to Portuguese learning',
      specialties: ['Pronunciation', 'Brazilian Culture', 'Travel Portuguese'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'ana-voice-id'
    },
    {
      id: 'carlos-portuguese-beginner',
      name: 'Carlos',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Energetic approach to Portuguese with cultural insights',
      specialties: ['Everyday Portuguese', 'Music & Culture', 'Basic Grammar'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'carlos-portuguese-voice-id'
    },
    {
      id: 'beatriz-portuguese-beginner',
      name: 'Beatriz',
      gender: 'Female',
      personality: 'Structured & Professional',
      description: 'Systematic approach to Portuguese fundamentals',
      specialties: ['Grammar', 'Writing Skills', 'Formal Portuguese'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'beatriz-voice-id'
    },
    {
      id: 'rafael-portuguese-beginner',
      name: 'Rafael',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Supportive learning environment for Portuguese beginners',
      specialties: ['Pronunciation', 'Confidence Building', 'Basic Conversation'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'rafael-voice-id'
    }
  ],
  'portuguese-intermediate': [
    {
      id: 'camila-portuguese-intermediate',
      name: 'Camila',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Advanced Portuguese with cultural depth',
      specialties: ['Literature', 'Business Portuguese', 'Regional Variations'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'camila-voice-id'
    },
    {
      id: 'bruno-portuguese-intermediate',
      name: 'Bruno',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging discussions about Portuguese-speaking cultures',
      specialties: ['History', 'Cultural Studies', 'Professional Portuguese'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'bruno-voice-id'
    }
  ],
  'arabic-beginner': [
    {
      id: 'fatima-arabic-beginner',
      name: 'Fatima',
      gender: 'Female',
      personality: 'Patient & Encouraging',
      description: 'Gentle introduction to Arabic language and script',
      specialties: ['Arabic Script', 'Pronunciation', 'Cultural Context'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'fatima-voice-id'
    },
    {
      id: 'omar-arabic-beginner',
      name: 'Omar',
      gender: 'Male',
      personality: 'Structured & Professional',
      description: 'Methodical approach to Arabic fundamentals',
      specialties: ['Grammar', 'Writing', 'Classical Arabic'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'omar-voice-id'
    },
    {
      id: 'aisha-arabic-beginner',
      name: 'Aisha',
      gender: 'Female',
      personality: 'Conversational & Fun',
      description: 'Makes Arabic learning enjoyable with cultural stories',
      specialties: ['Everyday Arabic', 'Cultural Context', 'Pronunciation'],
      rating: 4.7,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'aisha-voice-id'
    },
    {
      id: 'hassan-arabic-beginner',
      name: 'Hassan',
      gender: 'Male',
      personality: 'Patient & Encouraging',
      description: 'Supportive learning environment for Arabic beginners',
      specialties: ['Basic Conversation', 'Script Reading', 'Confidence Building'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'hassan-voice-id'
    }
  ],
  'arabic-intermediate': [
    {
      id: 'layla-arabic-intermediate',
      name: 'Layla',
      gender: 'Female',
      personality: 'Sophisticated & Refined',
      description: 'Advanced Arabic with literary and cultural depth',
      specialties: ['Literature', 'Classical Arabic', 'Business Arabic'],
      rating: 4.9,
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'layla-voice-id'
    },
    {
      id: 'khalid-arabic-intermediate',
      name: 'Khalid',
      gender: 'Male',
      personality: 'Conversational & Fun',
      description: 'Engaging discussions about Arabic culture and language',
      specialties: ['History', 'Philosophy', 'Professional Arabic'],
      rating: 4.8,
      avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400',
      elevenLabsVoiceId: 'khalid-voice-id'
    }
  ]
};