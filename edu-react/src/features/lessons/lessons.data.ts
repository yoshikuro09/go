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
    
      quiz: [
  {
    id: "html-q1",
    text: "Что такое HTML?",
    options: ["Язык программирования", "Язык разметки", "База данных", "Операционная система"],
    correctIndex: 1,
    explanation: "HTML — это язык разметки, используемый для создания структуры веб-страницы.",
  },
  {
    id: "html-q2",
    text: "Какой тег является корневым элементом HTML-документа?",
    options: ["<body>", "<head>", "<html>", "<main>"],
    correctIndex: 2,
    explanation: "Тег <html> содержит весь документ.",
  },
  {
    id: "html-q3",
    text: "Где правильно размещать тег <title>?",
    options: ["В <body>", "В <header>", "В <main>", "В <head>"],
    correctIndex: 3,
  },
  {
    id: "html-q4",
    text: "Какой тег используется для создания гиперссылки?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctIndex: 1,
  },
  {
    id: "html-q5",
    text: "Что означает семантическая разметка?",
    options: [
      "Использование только div",
      "Оформление страницы стилями",
      "Использование тегов по смыслу (<header>, <main>, <footer>)",
      "Подключение JavaScript",
    ],
    correctIndex: 2,
  },
  ] 
  },
  {
    id: "css-basics",
    title: "CSS: основы",
    description: "Селекторы, блочная модель, Flexbox.",
    level: "beginner",
    tags: ["css", "frontend"],
    content:
      "CSS отвечает за внешний вид. В этом уроке: селекторы, box-model (margin/padding/border), и основы Flexbox для выравнивания.",
    quiz: [
  {
    id: "css-q1",
    text: "Для чего используется CSS?",
    options: ["Для логики", "Для структуры", "Для оформления и стилей", "Для баз данных"],
    correctIndex: 2,
    explanation: "CSS управляет внешним видом элементов: цветами, отступами, позиционированием.",
  },
  {
    id: "css-q2",
    text: "Что входит в блочную модель (box model)?",
    options: ["Только width и height", "margin, border, padding, content", "font, color, background", "grid, flex, float"],
    correctIndex: 1,
  },
  {
    id: "css-q3",
    text: "Какое свойство делает контейнер flex-контейнером?",
    options: ["position: flex", "display: grid", "display: flex", "flex: 1"],
    correctIndex: 2,
  },
  {
    id: "css-q4",
    text: "Какое свойство управляет выравниванием по главной оси во Flexbox?",
    options: ["align-items", "justify-content", "text-align", "place-items"],
    correctIndex: 1,
  },
  {
    id: "css-q5",
    text: "Как задать цвет текста?",
    options: ["font-color", "text-color", "color", "foreground"],
    correctIndex: 2,
  },
  ]
  },
  {
    id: "react-intro",
    title: "React: введение",
    description: "Компоненты, props и state.",
    level: "intermediate",
    tags: ["react"],
    content:
      "React — библиотека для UI. В этом уроке: компоненты, props для передачи данных и state для интерактивности.",
    quiz: [
  {
    id: "react-q1",
    text: "Что такое React?",
    options: [
      "Фреймворк для серверов",
      "Библиотека для создания пользовательских интерфейсов",
      "Язык программирования",
      "CMS система",
    ],
    correctIndex: 1,
  },
  {
    id: "react-q2",
    text: "Из чего состоит интерфейс в React?",
    options: ["Классов", "Модулей", "Компонентов", "Контроллеров"],
    correctIndex: 2,
    explanation: "React-приложения состоят из компонентов.",
  },
  {
    id: "react-q3",
    text: "Для чего используются props?",
    options: ["Для хранения состояния", "Для передачи данных в компонент", "Для работы с DOM", "Для маршрутизации"],
    correctIndex: 1,
  },
  {
    id: "react-q4",
    text: "Для чего используется useState?",
    options: [
      "Для маршрутизации",
      "Для работы с сервером",
      "Для хранения и изменения состояния компонента",
      "Для стилизации",
    ],
    correctIndex: 2,
  },
  {
    id: "react-q5",
    text: "Что происходит при изменении state?",
    options: ["Ничего", "Перезагрузка страницы", "Повторный рендер компонента", "Удаление DOM"],
    correctIndex: 2,
  },
  ]
  },
  {
    id: "ts-basics",
    title: "TypeScript: база",
    description: "Типы, интерфейсы, функции.",
    level: "intermediate",
    tags: ["typescript"],
    content:
      "TypeScript добавляет типизацию. В этом уроке: примитивные типы, типизация функций, интерфейсы/типы и базовые best practices.",
    quiz: [
  {
    id: "ts-q1",
    text: "Что такое TypeScript?",
    options: [
      "Новый язык вместо JavaScript",
      "Надстройка над JavaScript с типизацией",
      "Фреймворк",
      "База данных",
    ],
    correctIndex: 1,
  },
  {
    id: "ts-q2",
    text: "Зачем нужна типизация?",
    options: [
      "Для ускорения браузера",
      "Для красоты кода",
      "Для уменьшения ошибок и улучшения автодополнения",
      "Для работы с сервером",
    ],
    correctIndex: 2,
  },
  {
    id: "ts-q3",
    text: "Какой тип используется для строки?",
    options: ["String", "str", "string", "text"],
    correctIndex: 2,
  },
  {
    id: "ts-q4",
    text: "Как описать объект с типами полей?",
    options: ["object {}", "map {}", "type / interface", "class only"],
    correctIndex: 2,
  },
  {
    id: "ts-q5",
    text: "Что делает TypeScript перед запуском в браузере?",
    options: ["Оптимизирует код", "Компилирует в JavaScript", "Запускает сервер", "Минифицирует HTML"],
    correctIndex: 1,
  },
]
  },
];
