import type { Question } from "../quiz/quiz.types";
export type LessonLevel = "beginner" | "intermediate" | "advanced";

export type Lesson = {
  id: string;
  title: string;
  description: string;
  level: LessonLevel;
  tags: string[];
  content: string;

  quiz: Question[];
};
