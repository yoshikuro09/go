import type { Lesson } from "./lessons.types";

export const lessons: Lesson[] = [
  {
    id: "html-basics",
    title: "HTML: основи",
    description: "Структура документа, теги та семантика.",
    level: "beginner",
    tags: ["html", "frontend"],
    content:
      "HTML — це мова розмітки. У цьому уроці: базові теги, структура сторінки (html/head/body) та семантичні елементи (header/main/footer).",
    quiz: [
      {
        id: "html-q1",
        text: "Що таке HTML?",
        options: ["Мова програмування", "Мова розмітки", "База даних", "Операційна система"],
        correctIndex: 1,
        explanation: "HTML — мова розмітки, що описує структуру веб-сторінки.",
      },
      {
        id: "html-q2",
        text: "Який тег є кореневим елементом HTML-документа?",
        options: ["<body>", "<head>", "<html>", "<main>"],
        correctIndex: 2,
        explanation: "Тег <html> містить увесь документ та є кореневим елементом.",
      },
      {
        id: "html-q3",
        text: "Де правильно розміщувати тег <title>?",
        options: ["У <body>", "У <header>", "У <main>", "У <head>"],
        correctIndex: 3,
        explanation: "Тег <title> задає назву вкладки браузера та має бути в секції <head>.",
      },
      {
        id: "html-q4",
        text: "Який тег використовується для створення гіперпосилання?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctIndex: 1,
        explanation: "Тег <a> створює посилання; адресу задають через атрибут href.",
      },
      {
        id: "html-q5",
        text: "Що означає семантична розмітка?",
        options: [
          "Використання лише div",
          "Оформлення сторінки стилями",
          "Використання тегів за змістом (<header>, <main>, <footer>)",
          "Підключення JavaScript",
        ],
        correctIndex: 2,
        explanation:
          "Семантичні теги описують зміст блоків і покращують доступність та SEO.",
      },
    ],
  },

  {
    id: "css-basics",
    title: "CSS: основи",
    description: "Селектори, блочна модель, Flexbox.",
    level: "beginner",
    tags: ["css", "frontend"],
    content:
      "CSS відповідає за зовнішній вигляд. У цьому уроці: селектори, box model (margin/padding/border) та основи Flexbox для вирівнювання.",
    quiz: [
      {
        id: "css-q1",
        text: "Для чого використовується CSS?",
        options: ["Для логіки", "Для структури", "Для оформлення та стилів", "Для баз даних"],
        correctIndex: 2,
        explanation: "CSS задає стилі: кольори, відступи, шрифти та розміщення елементів.",
      },
      {
        id: "css-q2",
        text: "Що входить до блочної моделі (box model)?",
        options: [
          "Тільки width і height",
          "margin, border, padding, content",
          "font, color, background",
          "grid, flex, float",
        ],
        correctIndex: 1,
        explanation:
          "Box model складається з контенту, внутрішніх відступів (padding), рамки (border) та зовнішніх відступів (margin).",
      },
      {
        id: "css-q3",
        text: "Яка властивість робить контейнер flex-контейнером?",
        options: ["position: flex", "display: grid", "display: flex", "flex: 1"],
        correctIndex: 2,
        explanation: "Властивість display: flex вмикає flex-контейнер для його дочірніх елементів.",
      },
      {
        id: "css-q4",
        text: "Яка властивість керує вирівнюванням уздовж головної осі у Flexbox?",
        options: ["align-items", "justify-content", "text-align", "place-items"],
        correctIndex: 1,
        explanation: "justify-content розподіляє елементи вздовж головної осі (row/column).",
      },
      {
        id: "css-q5",
        text: "Як задати колір тексту в CSS?",
        options: ["font-color", "text-color", "color", "foreground"],
        correctIndex: 2,
        explanation: "Властивість color задає колір тексту елемента.",
      },
    ],
  },

  {
    id: "react-intro",
    title: "React: вступ",
    description: "Компоненти, props та state.",
    level: "intermediate",
    tags: ["react"],
    content:
      "React — бібліотека для UI. У цьому уроці: компоненти, props для передачі даних і state для інтерактивності.",
    quiz: [
      {
        id: "react-q1",
        text: "Що таке React?",
        options: [
          "Фреймворк для серверів",
          "Бібліотека для створення користувацьких інтерфейсів",
          "Мова програмування",
          "CMS-система",
        ],
        correctIndex: 1,
        explanation: "React — бібліотека JavaScript для побудови інтерфейсів на основі компонентів.",
      },
      {
        id: "react-q2",
        text: "З чого складається інтерфейс у React?",
        options: ["Класів", "Модулів", "Компонентів", "Контролерів"],
        correctIndex: 2,
        explanation: "React-додатки будуються з компонентів, які можна перевикористовувати.",
      },
      {
        id: "react-q3",
        text: "Для чого використовуються props?",
        options: [
          "Для зберігання стану",
          "Для передачі даних у компонент",
          "Для роботи з DOM",
          "Для маршрутизації",
        ],
        correctIndex: 1,
        explanation: "Props — це вхідні дані компонента, які передаються з батьківського компонента.",
      },
      {
        id: "react-q4",
        text: "Для чого використовується useState?",
        options: [
          "Для маршрутизації",
          "Для роботи з сервером",
          "Для зберігання та зміни стану компонента",
          "Для стилізації",
        ],
        correctIndex: 2,
        explanation: "useState дозволяє зберігати стан у функціональних компонентах і оновлювати його.",
      },
      {
        id: "react-q5",
        text: "Що відбувається при зміні state?",
        options: ["Нічого", "Перезавантаження сторінки", "Повторний рендер компонента", "Видалення DOM"],
        correctIndex: 2,
        explanation: "Коли state змінюється, React повторно рендерить компонент, щоб оновити UI.",
      },
    ],
  },

  {
    id: "ts-basics",
    title: "TypeScript: база",
    description: "Типи, інтерфейси, функції.",
    level: "intermediate",
    tags: ["typescript"],
    content:
      "TypeScript додає типізацію. У цьому уроці: базові типи, типізація функцій, interface/type та корисні практики.",
    quiz: [
      {
        id: "ts-q1",
        text: "Що таке TypeScript?",
        options: [
          "Нова мова замість JavaScript",
          "Надбудова над JavaScript із типізацією",
          "Фреймворк",
          "База даних",
        ],
        correctIndex: 1,
        explanation: "TypeScript — це JavaScript + статична типізація та додаткові можливості.",
      },
      {
        id: "ts-q2",
        text: "Навіщо потрібна типізація?",
        options: [
          "Щоб прискорити браузер",
          "Для краси коду",
          "Щоб зменшити помилки та покращити автодоповнення",
          "Для роботи з сервером",
        ],
        correctIndex: 2,
        explanation: "Типи допомагають ловити помилки ще під час розробки та дають кращий IntelliSense.",
      },
      {
        id: "ts-q3",
        text: "Який тип використовується для рядка?",
        options: ["String", "str", "string", "text"],
        correctIndex: 2,
        explanation: "У TypeScript примітивний тип рядка — це string (з маленької літери).",
      },
      {
        id: "ts-q4",
        text: "Як описати об’єкт із типами полів?",
        options: ["object {}", "map {}", "type / interface", "class only"],
        correctIndex: 2,
        explanation: "Для опису структури об’єктів використовують interface або type.",
      },
      {
        id: "ts-q5",
        text: "Що робить TypeScript перед запуском у браузері?",
        options: ["Оптимізує код", "Компілює в JavaScript", "Запускає сервер", "Мініфікує HTML"],
        correctIndex: 1,
        explanation: "Браузер виконує JavaScript, тому TypeScript компілюється (транспілюється) у JS.",
      },
    ],
  },
];
