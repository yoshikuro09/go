import type { Lesson } from "./lessons.types";

export const lessons: Lesson[] = [
  {
    id: "html-basics",
    title: "HTML: основы",
    description: "Структура документа, теги и семантика.",
    level: "beginner",
    tags: ["html", "frontend"],
    content:
      "HTML — это язык разметки. В этом уроке: базовые теги, структура страницы (html/head/body) и семантика (header/main/footer).",
  },
  {
    id: "css-basics",
    title: "CSS: основы",
    description: "Селекторы, блочная модель, Flexbox.",
    level: "beginner",
    tags: ["css", "frontend"],
    content:
      "CSS отвечает за внешний вид. В этом уроке: селекторы, box-model (margin/padding/border), и основы Flexbox для выравнивания.",
  },
  {
    id: "react-intro",
    title: "React: введение",
    description: "Компоненты, props и state.",
    level: "intermediate",
    tags: ["react"],
    content:
      "React — библиотека для UI. В этом уроке: компоненты, props для передачи данных и state для интерактивности.",
  },
  {
    id: "ts-basics",
    title: "TypeScript: база",
    description: "Типы, интерфейсы, функции.",
    level: "intermediate",
    tags: ["typescript"],
    content:
      "TypeScript добавляет типизацию. В этом уроке: примитивные типы, типизация функций, интерфейсы/типы и базовые best practices.",
  },
];
