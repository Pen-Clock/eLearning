export interface Quiz {
  title: string;
  questions: {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export interface Module {
  id: number;
  title: string;
  videoUrl: string;
  textContent: string;
  quiz: Quiz;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  duration: string;
  level: string;
  progress: number;
  modules: Module[];
}