import type { Lesson } from "./lessons.types";

export const lessons: Lesson[] = [
  {
    id: "html-basics",
    title: "HTML: основи",
    description: "Структура документа, теги та семантика.",
    level: "beginner",
    tags: ["html", "frontend"],
    content: `
<h2>Вступ</h2>
<p>
HTML — це мова розмітки, яка описує структуру веб-сторінки. Вона не «програмує» поведінку,
а визначає, які елементи є на сторінці: заголовки, абзаци, списки, посилання, зображення тощо.
</p>
<p>
У цьому уроці ви зрозумієте, з яких частин складається HTML-документ, які теги є базовими,
та чому семантика важлива для доступності й SEO.
</p>

<h2>1) Структура HTML-документа</h2>
<p>Кожен документ має базовий каркас:</p>
<pre><code>&lt;!doctype html&gt;
&lt;html lang="uk"&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8" /&gt;
    &lt;title&gt;Моя сторінка&lt;/title&gt;
  &lt;/head&gt;

  &lt;body&gt;
    &lt;h1&gt;Привіт!&lt;/h1&gt;
    &lt;p&gt;Це перший абзац.&lt;/p&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
<ul>
  <li><code>&lt;html&gt;</code> — кореневий елемент документа.</li>
  <li><code>&lt;head&gt;</code> — метадані: назва, кодування, підключення стилів/скриптів.</li>
  <li><code>&lt;body&gt;</code> — видимий контент сторінки.</li>
</ul>

<h2>2) Базові теги контенту</h2>
<ul>
  <li><code>&lt;h1&gt;…&lt;/h1&gt;</code> — головний заголовок сторінки (зазвичай один).</li>
  <li><code>&lt;p&gt;…&lt;/p&gt;</code> — абзац тексту.</li>
  <li><code>&lt;ul&gt;&lt;li&gt;…</code> — маркований список.</li>
  <li><code>&lt;a href="..."&gt;</code> — посилання.</li>
</ul>

<h2>3) Посилання та атрибути</h2>
<p>
Посилання створюються тегом <code>&lt;a&gt;</code>, а адресу задають атрибутом <code>href</code>.
</p>
<pre><code>&lt;a href="https://example.com"&gt;Відкрити сайт&lt;/a&gt;
</code></pre>

<h2>4) Семантична розмітка</h2>
<p>
Семантичні теги описують зміст блоків, а не лише їх вигляд. Це покращує:
</p>
<ul>
  <li>доступність (screen readers краще розуміють структуру),</li>
  <li>SEO (пошукові системи краще інтерпретують сторінку),</li>
  <li>підтримуваність коду.</li>
</ul>

<p>Найпопулярніші семантичні теги:</p>
<ul>
  <li><code>&lt;header&gt;</code> — шапка сторінки/блоку</li>
  <li><code>&lt;main&gt;</code> — основний контент</li>
  <li><code>&lt;footer&gt;</code> — підвал</li>
  <li><code>&lt;nav&gt;</code> — навігація</li>
  <li><code>&lt;section&gt;</code> — тематичний розділ</li>
</ul>

<h2>Підсумок</h2>
<ul>
  <li>HTML задає структуру документа.</li>
  <li>Документ має <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code> і <code>&lt;body&gt;</code>.</li>
  <li>Семантичні теги роблять сторінку зрозумілішою для людей і пошукових систем.</li>
</ul>
`.trim(),
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
    content: `
<h2>Вступ</h2>
<p>
CSS відповідає за зовнішній вигляд сторінки: кольори, шрифти, відступи та розташування елементів.
Якщо HTML — це «скелет», то CSS — це «зовнішність» і «макет».
</p>
<p>
У цьому уроці ви розберете селектори, блочну модель (box model) та основу Flexbox для вирівнювання.
</p>

<h2>1) Як підключається CSS</h2>
<p>Найчастіше CSS підключають у <code>&lt;head&gt;</code>:</p>
<pre><code>&lt;link rel="stylesheet" href="styles.css" /&gt;
</code></pre>

<h2>2) Селектори: як знайти елемент</h2>
<ul>
  <li><b>За тегом:</b> <code>p { ... }</code></li>
  <li><b>За класом:</b> <code>.card { ... }</code></li>
  <li><b>За id:</b> <code>#main { ... }</code></li>
</ul>

<h2>3) Box model (блочна модель)</h2>
<p>
Кожен елемент на сторінці має «коробку», яка складається з:
</p>
<ul>
  <li><code>content</code> — вміст</li>
  <li><code>padding</code> — внутрішній відступ</li>
  <li><code>border</code> — рамка</li>
  <li><code>margin</code> — зовнішній відступ</li>
</ul>
<pre><code>.box {
  margin: 16px;
  padding: 12px;
  border: 1px solid #ccc;
}
</code></pre>

<h2>4) Flexbox: швидке вирівнювання</h2>
<p>
Flexbox допомагає зручно вирівнювати елементи по горизонталі або вертикалі.
Щоб увімкнути Flexbox, задайте контейнеру:
</p>
<pre><code>.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</code></pre>

<ul>
  <li><code>justify-content</code> — розподіл по головній осі</li>
  <li><code>align-items</code> — вирівнювання по поперечній осі</li>
  <li><code>gap</code> — відстань між елементами</li>
</ul>

<h2>Підсумок</h2>
<ul>
  <li>CSS задає стилі та макет сторінки.</li>
  <li>Box model пояснює відступи й рамки навколо елементів.</li>
  <li>Flexbox — швидкий спосіб вирівнювання та розташування елементів.</li>
</ul>
`.trim(),
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
    content: `
<h2>Вступ</h2>
<p>
React — це бібліотека JavaScript для створення користувацьких інтерфейсів. Вона будує UI з компонентів —
невеликих незалежних частин, які легко перевикористовувати та комбінувати.
</p>
<p>
У цьому уроці розберемо базу: що таке компоненти, як передавати дані через <code>props</code>,
і як керувати станом через <code>state</code>.
</p>

<h2>1) Компоненти</h2>
<p>
Компонент у React — це функція (або клас), яка повертає JSX. JSX схожий на HTML, але це синтаксис для опису UI.
</p>
<pre><code>function Hello() {
  return &lt;h1&gt;Привіт, React!&lt;/h1&gt;;
}
</code></pre>
<ul>
  <li>Компоненти можна вкладати один в один.</li>
  <li>Компоненти допомагають підтримувати структуру проєкту та перевикористовувати UI.</li>
</ul>

<h2>2) Props — дані “ззовні”</h2>
<p>
<code>props</code> — це вхідні дані компонента. Їх передає батьківський компонент.
Props вважаються “тільки для читання” — змінювати їх у дочірньому компоненті не потрібно.
</p>
<pre><code>function Card({ title }) {
  return &lt;div&gt;{title}&lt;/div&gt;;
}

// Використання:
&lt;Card title="React: вступ" /&gt;
</code></pre>
<ul>
  <li>Props допомагають робити компоненти гнучкими.</li>
  <li>Один компонент можна використовувати багато разів із різними даними.</li>
</ul>

<h2>3) State — дані “всередині”</h2>
<p>
<code>state</code> — це внутрішній стан компонента, який може змінюватися з часом (наприклад: лічильник, форма, вибір).
У функціональних компонентах стан зберігають через хук <code>useState</code>.
</p>
<pre><code>import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
      Натиснули: {count}
    &lt;/button&gt;
  );
}
</code></pre>

<h2>4) Що відбувається при зміні state?</h2>
<p>
Коли ви викликаєте <code>setState</code> (наприклад <code>setCount</code>), React запускає повторний рендер компонента.
Це потрібно, щоб UI відобразив нові дані.
</p>
<ul>
  <li>Змінився state → React перерендерює компонент → UI оновлюється.</li>
  <li>Ререндер зазвичай недорогий, але важливо не створювати зайвих ререндерів без потреби.</li>
</ul>

<h2>Підсумок</h2>
<ul>
  <li>React будує інтерфейс з компонентів.</li>
  <li>Props — для передачі даних у компонент.</li>
  <li>State — для зберігання даних, що змінюються з часом.</li>
  <li>Зміна state викликає повторний рендер і оновлення UI.</li>
</ul>
`.trim(),
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
    content: `
<h2>Вступ</h2>
<p>
TypeScript — це надбудова над JavaScript, яка додає статичну типізацію. Типи допомагають ловити помилки
ще під час розробки та роблять код зрозумілішим.
</p>
<p>
У цьому уроці розберемо базові типи, типізацію функцій і як описувати структуру об’єктів через
<code>interface</code> та <code>type</code>.
</p>

<h2>1) Базові типи</h2>
<ul>
  <li><code>string</code> — рядок</li>
  <li><code>number</code> — число</li>
  <li><code>boolean</code> — true/false</li>
  <li><code>null</code>, <code>undefined</code> — спеціальні значення</li>
</ul>
<pre><code>let name: string = "GoLearn";
let lessonsCount: number = 10;
let isDone: boolean = false;
</code></pre>

<h2>2) Типізація функцій</h2>
<p>
У TypeScript можна типізувати аргументи функції та її результат. Це зменшує шанс помилок
і покращує автодоповнення.
</p>
<pre><code>function sum(a: number, b: number): number {
  return a + b;
}
</code></pre>

<h2>3) Опис об’єктів через interface/type</h2>
<p>
Щоб описати структуру об’єктів, використовують <code>interface</code> або <code>type</code>.
</p>
<pre><code>interface Lesson {
  id: string;
  title: string;
  level: "beginner" | "intermediate" | "advanced";
}

const l: Lesson = {
  id: "html-basics",
  title: "HTML: основи",
  level: "beginner",
};
</code></pre>

<h2>4) Чому типізація корисна</h2>
<ul>
  <li>Помилки видно ще до запуску програми.</li>
  <li>Код легше читати: видно, які дані очікуються.</li>
  <li>Редактор дає кращі підказки й автодоповнення.</li>
</ul>

<h2>5) TypeScript і браузер</h2>
<p>
Браузер виконує лише JavaScript. Тому перед запуском TypeScript код компілюється (транспілюється) у JS.
</p>

<h2>Підсумок</h2>
<ul>
  <li>TypeScript = JavaScript + типи.</li>
  <li>Типи зменшують кількість помилок і покращують підтримуваність коду.</li>
  <li>Для опису об’єктів використовують interface/type.</li>
  <li>TS перед запуском компілюється в JavaScript.</li>
</ul>
`.trim(),
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
   {
    id: "js-basics",
    title: "JavaScript: основи",
    description: "Змінні, типи даних, умови та цикли.",
    level: "beginner",
    tags: ["javascript", "frontend"],
    content: `
<h2>Вступ</h2>
<p>
JavaScript — мова програмування, яка додає інтерактивність веб-сторінкам. Саме JS керує логікою:
обробляє події, змінює DOM, працює з даними, робить запити на сервер.
</p>
<p>
У цьому уроці розберемо: змінні, типи даних, умови та цикли — основу, без якої складно рухатися далі.
</p>

<h2>1) Змінні: let і const</h2>
<p>
У сучасному JavaScript найчастіше використовують <code>const</code> і <code>let</code>.
</p>
<ul>
  <li><code>const</code> — значення не перевизначається (рекомендовано за замовчуванням).</li>
  <li><code>let</code> — значення може змінюватися.</li>
</ul>
<pre><code>const siteName = "GoLearn";
let score = 0;

score = score + 1;
</code></pre>

<h2>2) Базові типи даних</h2>
<ul>
  <li><code>number</code> — числа (в JS немає окремо int/float)</li>
  <li><code>string</code> — рядки</li>
  <li><code>boolean</code> — true/false</li>
  <li><code>undefined</code> — значення не задано</li>
  <li><code>null</code> — “порожнє” значення</li>
</ul>
<pre><code>const n = 42;           // number
const s = "hello";      // string
const ok = true;        // boolean
</code></pre>

<h2>3) Умови</h2>
<p>
Умовні конструкції дозволяють виконувати різні гілки коду залежно від значення.
</p>
<pre><code>const age = 18;

if (age &gt;= 18) {
  console.log("Доступ дозволено");
} else {
  console.log("Доступ заборонено");
}
</code></pre>

<h2>4) Порівняння: == vs ===</h2>
<p>
У JavaScript рекомендовано використовувати <code>===</code> (суворе порівняння), бо воно порівнює і тип, і значення.
</p>
<ul>
  <li><code>==</code> може робити неочікувані перетворення типів</li>
  <li><code>===</code> — більш передбачуваний варіант</li>
</ul>

<h2>5) Цикли</h2>
<p>
Цикли потрібні, коли дію треба повторити багато разів.
</p>
<pre><code>for (let i = 0; i &lt; 3; i++) {
  console.log("Крок", i);
}
</code></pre>

<p>
Для перебору масивів часто зручно використовувати <code>for...of</code>:
</p>
<pre><code>const tags = ["html", "css", "js"];

for (const t of tags) {
  console.log(t);
}
</code></pre>

<h2>Підсумок</h2>
<ul>
  <li>Використовуйте <code>const</code> за замовчуванням, <code>let</code> — коли потрібно змінювати значення.</li>
  <li>Суворе порівняння <code>===</code> зменшує кількість помилок.</li>
  <li>Умови й цикли — базові інструменти для керування логікою.</li>
</ul>
`.trim(),
    quiz: [
      {
        id: "js-q1",
        text: "Яке ключове слово краще використовувати для змінної, яку не плануєте перевизначати?",
        options: ["var", "let", "const", "static"],
        correctIndex: 2,
        explanation:
          "const підходить для значень, які не потрібно перевизначати. Це робить код безпечнішим і зрозумілішим.",
      },
      {
        id: "js-q2",
        text: "Який тип даних поверне typeof для значення 42?",
        options: ["number", "int", "float", "numeric"],
        correctIndex: 0,
        explanation:
          "У JavaScript числа зберігаються як тип number (немає окремих int/float).",
      },
      {
        id: "js-q3",
        text: "Який оператор використовується для суворого порівняння (типи теж мають збігатися)?",
        options: ["==", "===", "=", "!="],
        correctIndex: 1,
        explanation:
          "=== порівнює і значення, і типи. Це зменшує кількість неочікуваних перетворень.",
      },
      {
        id: "js-q4",
        text: "Який цикл найкраще підходить для перебору масиву за елементами?",
        options: ["for...in", "for...of", "while(true)", "do...until"],
        correctIndex: 1,
        explanation:
          "for...of перебирає значення елементів і зазвичай зручніший для масивів.",
      },
      {
        id: "js-q5",
        text: "Що поверне console.log(Boolean(''))?",
        options: ["true", "false", "undefined", "null"],
        correctIndex: 1,
        explanation:
          "Порожній рядок — це falsy-значення, тому Boolean('') поверне false.",
      },
    ],
  },

  {
    id: "js-dom",
    title: "JavaScript: DOM і події",
    description: "Пошук елементів, зміна DOM, обробники подій.",
    level: "intermediate",
    tags: ["javascript", "dom", "frontend"],
    content: `
<h2>Вступ</h2>
<p>
DOM (Document Object Model) — це “дерево” елементів вашої сторінки. JavaScript може знаходити потрібні вузли,
читати їхній вміст, змінювати текст, класи, стилі, додавати нові елементи та реагувати на дії користувача.
</p>
<p>
У цьому уроці ви навчитеся: знаходити елементи, змінювати DOM і підписуватися на події (<code>click</code>, <code>input</code>).
</p>

<h2>1) Пошук елементів</h2>
<p>
Найпопулярніший спосіб пошуку — <code>querySelector</code> (перший збіг) та <code>querySelectorAll</code> (усі збіги).
Вони приймають CSS-селектор.
</p>
<pre><code>const title = document.querySelector("h1");
const buttons = document.querySelectorAll("button");
</code></pre>
<ul>
  <li><code>querySelector()</code> повертає один елемент або <code>null</code>.</li>
  <li><code>querySelectorAll()</code> повертає колекцію (NodeList), яку можна перебирати.</li>
</ul>

<h2>2) Зміна тексту та HTML</h2>
<p>
Для зміни тексту без HTML-розмітки використовуйте <code>textContent</code>.
</p>
<pre><code>const el = document.querySelector(".status");
el.textContent = "Готово!";
</code></pre>

<p>
<code>innerHTML</code> вставляє HTML-розмітку, але з ним треба бути обережним (ризики XSS, якщо вставляєте дані користувача).
</p>
<pre><code>el.innerHTML = "&lt;strong&gt;Готово!&lt;/strong&gt;";
</code></pre>

<h2>3) Класи: classList</h2>
<p>
Для роботи з класами найзручніше використовувати <code>classList</code>.
</p>
<pre><code>const card = document.querySelector(".card");
card.classList.add("is-active");
card.classList.remove("is-active");
card.classList.toggle("is-active");
</code></pre>

<h2>4) Створення та додавання елементів</h2>
<p>
Ви можете створювати нові елементи через <code>document.createElement</code> і додавати їх у DOM через <code>append</code>.
</p>
<pre><code>const li = document.createElement("li");
li.textContent = "Новий пункт";

const list = document.querySelector("ul");
list.append(li);
</code></pre>

<h2>5) Події: addEventListener</h2>
<p>
Події дозволяють реагувати на дії користувача: натискання, введення, наведення тощо.
</p>
<pre><code>const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Натиснули кнопку");
});
</code></pre>

<h3>Подія input</h3>
<p>
Подія <code>input</code> спрацьовує під час введення (миттєво), тому підходить для живого пошуку, валідації, підказок.
</p>
<pre><code>const field = document.querySelector("input");

field.addEventListener("input", (e) => {
  console.log(e.target.value);
});
</code></pre>

<h2>Підсумок</h2>
<ul>
  <li>DOM — дерево елементів сторінки, з яким можна працювати через JS.</li>
  <li><code>querySelector</code> знаходить елемент за CSS-селектором.</li>
  <li><code>textContent</code> — безпечна зміна тексту, <code>innerHTML</code> — обережно.</li>
  <li><code>classList</code> спрощує роботу з CSS-класами.</li>
  <li><code>addEventListener</code> підписує на події (<code>click</code>, <code>input</code> тощо).</li>
</ul>
`.trim(),
    quiz: [
      {
        id: "dom-q1",
        text: "Який метод повертає перший елемент, що відповідає CSS-селектору?",
        options: ["getElement()", "querySelector()", "selectOne()", "find()"],
        correctIndex: 1,
        explanation:
          "querySelector() повертає перший знайдений елемент за CSS-селектором.",
      },
      {
        id: "dom-q2",
        text: "Як правильно підписатися на клік по елементу button?",
        options: [
          "button.onClick = handler",
          "button.addEventListener('click', handler)",
          "button.addHandler('click', handler)",
          "button.listen('click', handler)",
        ],
        correctIndex: 1,
        explanation:
          "addEventListener('click', ...) — стандартний спосіб підписки на події.",
      },
      {
        id: "dom-q3",
        text: "Яка властивість змінює текстовий вміст елемента без HTML-розмітки?",
        options: ["innerHTML", "textContent", "outerHTML", "nodeHTML"],
        correctIndex: 1,
        explanation:
          "textContent встановлює/отримує текст без інтерпретації HTML.",
      },
      {
        id: "dom-q4",
        text: "Як додати CSS-клас елементу?",
        options: ["el.class = 'x'", "el.classList.add('x')", "el.addClass('x')", "el.styles.add('x')"],
        correctIndex: 1,
        explanation:
          "classList.add() — безпечний та зручний API для роботи з класами.",
      },
      {
        id: "dom-q5",
        text: "Яка подія спрацьовує при зміні значення в input під час введення?",
        options: ["change", "input", "submit", "keyup"],
        correctIndex: 1,
        explanation:
          "input спрацьовує під час введення (миттєво), тоді як change часто спрацьовує після втрати фокусу.",
      },
    ],
  },

  {
    id: "css-grid",
    title: "CSS Grid: сітки",
    description: "Контейнери grid, колонки/рядки, gap, області.",
    level: "intermediate",
    tags: ["css", "grid", "frontend"],
    content: `
<h2>Вступ</h2>
<p>
CSS Grid — це система для побудови двовимірних макетів (рядки + колонки). На відміну від Flexbox,
який найчастіше вирішує задачі в одному напрямку, Grid ідеально підходить для сторінок, сіток карток,
дашбордів, складних лейаутів.
</p>
<p>
У цьому уроці: як увімкнути Grid, задати колонки/рядки, керувати відступами та використовувати області.
</p>

<h2>1) Увімкнення Grid</h2>
<p>
Щоб зробити елемент grid-контейнером, задайте <code>display: grid</code>.
</p>
<pre><code>.grid {
  display: grid;
}
</code></pre>

<h2>2) Колонки та рядки</h2>
<p>
Основні властивості: <code>grid-template-columns</code> і <code>grid-template-rows</code>.
</p>
<pre><code>.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr; /* 3 колонки */
  grid-template-rows: auto;           /* рядки автоматично */
}
</code></pre>

<h3>Одиниця fr</h3>
<p>
<code>fr</code> — частка вільного простору. Вона дуже зручна для адаптивних макетів.
</p>
<pre><code>grid-template-columns: 240px 1fr; /* сайдбар + контент */
</code></pre>

<h2>3) Відступи між елементами</h2>
<p>
Використовуйте <code>gap</code> для відстані між колонками й рядками.
</p>
<pre><code>.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
</code></pre>

<h2>4) Вирівнювання</h2>
<p>
Grid має окремі властивості для вирівнювання елементів і контенту:
</p>
<ul>
  <li><code>justify-items</code> / <code>align-items</code> — вирівнювання елементів у клітинках</li>
  <li><code>justify-content</code> / <code>align-content</code> — вирівнювання всієї сітки в контейнері</li>
</ul>

<h2>5) Області (grid-template-areas)</h2>
<p>
Області дозволяють описати макет “словами”, що робить його читабельним.
</p>
<pre><code>.layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-areas:
    "sidebar main";
}

.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
</code></pre>

<h2>Підсумок</h2>
<ul>
  <li><code>display: grid</code> вмикає Grid.</li>
  <li><code>grid-template-columns</code>/<code>rows</code> задають структуру сітки.</li>
  <li><code>gap</code> керує відступами між елементами.</li>
  <li><code>fr</code> — ключова одиниця для адаптивності.</li>
  <li>Області роблять складні макети простішими для підтримки.</li>
</ul>
`.trim(),
    quiz: [
      {
        id: "grid-q1",
        text: "Яка властивість вмикає Grid-контейнер?",
        options: ["display: flex", "display: grid", "position: grid", "grid: on"],
        correctIndex: 1,
        explanation:
          "display: grid перетворює елемент на grid-контейнер і дозволяє керувати сіткою.",
      },
      {
        id: "grid-q2",
        text: "Яка властивість задає кількість колонок і їхні розміри?",
        options: ["grid-columns", "grid-template-columns", "columns-template", "grid-cols"],
        correctIndex: 1,
        explanation:
          "grid-template-columns описує колонки (наприклад: 1fr 1fr 240px).",
      },
      {
        id: "grid-q3",
        text: "Як задати відстань між елементами у Grid?",
        options: ["space", "margin-gap", "gap", "grid-margin"],
        correctIndex: 2,
        explanation:
          "gap задає відстань між рядками та колонками у Grid (і також працює у Flex).",
      },
      {
        id: "grid-q4",
        text: "Яка одиниця вимірювання найчастіше використовується для “гнучких” колонок?",
        options: ["px", "em", "fr", "%"],
        correctIndex: 2,
        explanation:
          "fr — частка вільного простору, зручна для адаптивних сіток.",
      },
      {
        id: "grid-q5",
        text: "Для чого використовують grid-area (в контексті шаблонів областей)?",
        options: [
          "Для задання кольору області",
          "Для розташування елемента в іменованій області макета",
          "Для створення градієнта",
          "Для задання шрифту",
        ],
        correctIndex: 1,
        explanation:
          "grid-area дозволяє прив’язати елемент до іменованої області, заданої в grid-template-areas.",
      },
    ],
  },

  {
    id: "react-routing",
    title: "React Router: навігація",
    description: "Routes, Link, NavLink, параметри та вкладені маршрути.",
    level: "intermediate",
    tags: ["react", "router"],
    content: `
<h2>Вступ</h2>
<p>
У SPA (Single Page Application) сторінка не перезавантажується повністю при навігації.
React Router забезпечує “клієнтську” маршрутизацію: ви переходите між екранами, а React просто
перемальовує потрібний компонент.
</p>
<p>
У цьому уроці: базові маршрути, <code>Link</code>/<code>NavLink</code>, параметри через <code>useParams</code> та вкладені маршрути з <code>Outlet</code>.
</p>

<h2>1) Routes і Route</h2>
<p>
Маршрути описують відповідність “шлях → компонент”.
</p>
<pre><code>import { Routes, Route } from "react-router-dom";

&lt;Routes&gt;
  &lt;Route path="/" element={&lt;DashboardPage /&gt;} /&gt;
  &lt;Route path="/lessons" element={&lt;LessonsPage /&gt;} /&gt;
&lt;/Routes&gt;
</code></pre>

<h2>2) Link — перехід без перезавантаження</h2>
<p>
Компонент <code>Link</code> змінює URL і показує інший екран без повного reload.
</p>
<pre><code>import { Link } from "react-router-dom";

&lt;Link to="/lessons"&gt;До уроків&lt;/Link&gt;
</code></pre>

<h2>3) NavLink — активний стан</h2>
<p>
<code>NavLink</code> відрізняється тим, що може підсвічувати активний маршрут.
Це зручно для сайдбарів і навбарів.
</p>
<pre><code>import { NavLink } from "react-router-dom";

&lt;NavLink to="/progress"&gt;Прогрес&lt;/NavLink&gt;
</code></pre>

<p>
Також <code>NavLink</code> може приймати функцію для стилів/класів на основі <code>isActive</code>.
</p>

<h2>4) Параметри маршруту: useParams</h2>
<p>
Якщо у вас є маршрут на кшталт <code>/lessons/:id</code>, ви можете взяти <code>id</code> через <code>useParams</code>.
</p>
<pre><code>import { useParams } from "react-router-dom";

function LessonPage() {
  const { id } = useParams();
  return &lt;div&gt;Урок: {id}&lt;/div&gt;;
}
</code></pre>

<h2>5) Вкладені маршрути: Outlet</h2>
<p>
Коли у вас є “спільний каркас” сторінок (наприклад RootLayout із сайдбаром),
вкладені маршрути рендеряться у місці <code>Outlet</code>.
</p>
<pre><code>import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    &lt;div&gt;
      &lt;aside&gt;Sidebar&lt;/aside&gt;
      &lt;main&gt;&lt;Outlet /&gt;&lt;/main&gt;
    &lt;/div&gt;
  );
}
</code></pre>

<h2>6) end — точне співпадіння</h2>
<p>
У <code>NavLink</code> прапорець <code>end</code> означає: “активний лише при точному збігу маршруту”.
Це корисно, щоб шлях <code>/</code> не був активним для всіх сторінок.
</p>

<h2>Підсумок</h2>
<ul>
  <li>React Router керує навігацією в SPA без перезавантаження.</li>
  <li><code>Link</code> — перехід між маршрутами.</li>
  <li><code>NavLink</code> — перехід + активний стан.</li>
  <li><code>useParams</code> — доступ до параметрів URL.</li>
  <li><code>Outlet</code> — рендер вкладених маршрутів у layout.</li>
</ul>
`.trim(),
    quiz: [
      {
        id: "rr-q1",
        text: "Для чого використовується компонент Link у React Router?",
        options: ["Для завантаження файлів", "Для переходу між маршрутами без перезавантаження", "Для стилів", "Для HTTP-запитів"],
        correctIndex: 1,
        explanation:
          "Link змінює маршрут у SPA без перезавантаження сторінки.",
      },
      {
        id: "rr-q2",
        text: "Чим NavLink відрізняється від Link?",
        options: ["Працює тільки з зовнішніми посиланнями", "Може підсвічувати активний маршрут", "Підтримує тільки POST", "Видаляє історію браузера"],
        correctIndex: 1,
        explanation:
          "NavLink дозволяє додавати стилі/класи, коли посилання активне (isActive).",
      },
      {
        id: "rr-q3",
        text: "Який хук використовується, щоб отримати параметр маршруту (наприклад /lessons/:id)?",
        options: ["useRoute()", "useParams()", "usePath()", "useMatchParams()"],
        correctIndex: 1,
        explanation:
          "useParams() повертає об’єкт параметрів маршруту (наприклад { id }).",
      },
      {
        id: "rr-q4",
        text: "Для чого використовують Outlet?",
        options: ["Для стилізації", "Для рендеру вкладених маршрутів", "Для зберігання стану", "Для fetch-запитів"],
        correctIndex: 1,
        explanation:
          "Outlet — місце, де рендериться контент дочірнього маршруту у вкладеній структурі.",
      },
      {
        id: "rr-q5",
        text: "Що означає props end у NavLink/Route-конфігурації?",
        options: ["Завершити додаток", "Точне співпадіння маршруту (без префіксів)", "Вимкнути кеш", "Додати суфікс"],
        correctIndex: 1,
        explanation:
          "end означає, що маршрут має збігатися точно, інакше активним буде також батьківський шлях.",
      },
    ],
  },

  {
    id: "ts-advanced",
    title: "TypeScript: generics та utility types",
    description: "Generics, Partial, Pick, Record, типізація функцій.",
    level: "advanced",
    tags: ["typescript"],
    content: `
<h2>Вступ</h2>
<p>
Поглиблений TypeScript зосереджується не на синтаксисі, а на проєктуванні типів.
Тут ви навчитеся створювати універсальні типи, перевикористовувати структури
та будувати безпечні API за допомогою generics і utility types.
</p>

<h2>1) Generics — універсальні типи</h2>
<p>
Generics дозволяють передавати тип як параметр. Це робить функції та типи гнучкими,
але при цьому зберігає строгість типізації.
</p>

<pre><code>function wrap&lt;T&gt;(value: T): T[] {
  return [value];
}

const a = wrap(5);        // number[]
const b = wrap("hello"); // string[]
</code></pre>

<p>
Тут <code>T</code> — це “тип-параметр”, який визначається під час використання.
</p>

<h2>2) Generics у типах та інтерфейсах</h2>
<pre><code>interface ApiResponse&lt;T&gt; {
  data: T;
  error: string | null;
}

type UserResponse = ApiResponse&lt;User&gt;;
</code></pre>

<p>
Це дозволяє описати єдину структуру відповіді API для будь-яких даних.
</p>

<h2>3) Utility types — готові інструменти</h2>
<p>
TypeScript містить набір utility types для перетворення існуючих типів.
</p>

<h3>Partial</h3>
<pre><code>type UserUpdate = Partial&lt;User&gt;;
</code></pre>
<p>Робить усі поля необов’язковими (корисно для форм редагування).</p>

<h3>Pick</h3>
<pre><code>type UserPreview = Pick&lt;User, "id" | "name"&gt;;
</code></pre>
<p>Створює тип лише з вибраних властивостей.</p>

<h3>Record</h3>
<pre><code>type Roles = Record&lt;"admin" | "user", boolean&gt;;
</code></pre>
<p>Створює тип-словник з фіксованими ключами.</p>

<h2>4) Типізація функцій та API</h2>
<p>
Поєднання generics і utility types дозволяє будувати строго типізовані сервіси,
хуки та API-клієнти.
</p>

<pre><code>async function fetchJson&lt;T&gt;(url: string): Promise&lt;T&gt; {
  const res = await fetch(url);
  return res.json();
}
</code></pre>

<h2>Підсумок</h2>
<ul>
  <li>Generics роблять код універсальним і типобезпечним.</li>
  <li>Utility types дозволяють не дублювати типи.</li>
  <li>Partial, Pick, Record — базові інструменти для архітектури типів.</li>
  <li>Поглиблений TS — це про дизайн типів, а не лише синтаксис.</li>
</ul>
`.trim(),
    quiz: [
      {
        id: "ts2-q1",
        text: "Для чого використовують generics у TypeScript?",
        options: [
          "Для запуску коду швидше",
          "Для створення універсальних типів/функцій із параметром типу",
          "Для стилізації компонентів",
          "Для роботи з DOM",
        ],
        correctIndex: 1,
        explanation:
          "Generics дозволяють описати універсальну логіку, зберігаючи строгі типи (наприклад function wrap<T>(value: T): T[]).",
      },
      {
        id: "ts2-q2",
        text: "Що робить utility type Partial<T>?",
        options: [
          "Робить всі поля обов’язковими",
          "Робить всі поля необов’язковими",
          "Видаляє всі поля",
          "Перетворює тип на string",
        ],
        correctIndex: 1,
        explanation:
          "Partial<T> робить всі властивості T необов’язковими — корисно для часткових оновлень.",
      },
      {
        id: "ts2-q3",
        text: "Який utility type обирає підмножину властивостей з типу?",
        options: ["Pick<T, K>", "Partial<T>", "Omit<T, K>", "ReturnType<T>"],
        correctIndex: 0,
        explanation:
          "Pick<T, K> створює новий тип лише з вибраних ключів K.",
      },
      {
        id: "ts2-q4",
        text: "Що робить Record<K, T>?",
        options: [
          "Створює масив T",
          "Створює об’єкт із ключами K та значеннями T",
          "Створює інтерфейс без полів",
          "Робить тип nullable",
        ],
        correctIndex: 1,
        explanation:
          "Record<K, T> описує об’єкт-словник: ключі типу K, значення типу T.",
      },
      {
        id: "ts2-q5",
        text: "Який тип найкраще підходить для функції, що нічого не повертає?",
        options: ["null", "undefined", "void", "never"],
        correctIndex: 2,
        explanation:
          "void означає, що функція не повертає значення (або повернення ігнорується).",
      },
    ],
  },
  {
  id: "react-performance",
  title: "React: продуктивність та оптимізація",
  description: "React.memo, useMemo/useCallback, стабільність props та профілювання.",
  level: "advanced",
  tags: ["react", "performance", "frontend"],
  content: `
<h2>Вступ</h2>
<p>
React-додатки можуть здаватися «повільними» не тому, що React працює погано, а тому що ми
несвідомо змушуємо компоненти рендеритися частіше, ніж це потрібно.
</p>

<p>
У цьому уроці розберемо, як працює рендер у React, звідки беруться зайві перерендери
та які практичні інструменти існують для оптимізації.
</p>

<h2>1. Як працює рендер у React</h2>
<p>
Кожного разу, коли змінюється <code>state</code> або <code>props</code>, React викликає ваш компонент знову,
щоб отримати новий JSX.
</p>

<ul>
  <li>Компонент перерендерюється при зміні state або props</li>
  <li>Ререндер ≠ перерендер DOM</li>
  <li>React спершу будує нове virtual DOM, а потім мінімально оновлює реальний DOM</li>
</ul>

<p>
Навіть якщо реальний DOM майже не змінюється, велика кількість рендерів і обчислень може
серйозно впливати на продуктивність.
</p>

<h2>2. Типові причини зайвих ререндерів</h2>

<h3>Нові обʼєкти та масиви в props</h3>
<pre><code>
&lt;Child config={{ a: 1 }} /&gt;
</code></pre>

<p>
Кожен рендер створює новий обʼєкт у памʼяті. Для React це вже «зміна», навіть якщо значення ті самі.
</p>

<h3>Нові функції в props</h3>
<pre><code>
&lt;Child onClick={() =&gt; doSomething()} /&gt;
</code></pre>

<p>
Функції — це теж обʼєкти. На кожному рендері створюється нове посилання.
</p>

<h3>Важкі обчислення під час рендера</h3>
<pre><code>
const result = hugeCalculation(data);
</code></pre>

<p>
Якщо такі обчислення виконуються часто — застосунок починає «гальмувати».
</p>

<h2>3. React.memo — контроль перерендерів</h2>
<p>
<code>React.memo</code> дозволяє пропустити ререндер компонента, якщо його props не змінилися
(поверхневе порівняння).
</p>

<pre><code>
const Card = React.memo(function Card({ title }) {
  return &lt;div&gt;{title}&lt;/div&gt;;
});
</code></pre>

<ul>
  <li>Працює лише якщо props стабільні</li>
  <li>Новий обʼєкт або функція = memo не допоможе</li>
  <li>Має власну вартість порівняння</li>
</ul>

<h2>4. useMemo — мемоізація значень</h2>
<p>
<code>useMemo</code> використовується для дорогих обчислень або стабілізації значень.
</p>

<pre><code>
const filtered = useMemo(() =&gt; {
  return items.filter(i =&gt; i.active);
}, [items]);
</code></pre>

<p>
Використовуйте, коли обчислення реально важкі. Для простих операцій useMemo часто зайвий.
</p>

<h2>5. useCallback — мемоізація функцій</h2>
<p>
<code>useCallback</code> повертає стабільне посилання на функцію між рендерами.
</p>

<pre><code>
const onSelect = useCallback((id) =&gt; {
  setSelected(id);
}, []);
</code></pre>

<ul>
  <li>Корисно для memo-компонентів</li>
  <li>Корисно в залежностях useEffect та useMemo</li>
</ul>

<h2>6. Referential equality — ключ до оптимізації</h2>
<p>
React працює з посиланнями. Новий обʼєкт, масив або функція — це завжди «зміна».
</p>

<p>
Тому оптимізація часто зводиться не до даних, а до стабілізації посилань.
</p>

<h2>7. Профілювання перед оптимізацією</h2>
<p>
Перед будь-якою оптимізацією потрібно вимірювати.
</p>

<ul>
  <li>Використовуйте React DevTools Profiler</li>
  <li>Перевіряйте, які компоненти ререндеряться найчастіше</li>
  <li>Дивіться на найдорожчі «commit»</li>
</ul>

<h3>Практика</h3>
<ul>
  <li>Увімкніть Profiler</li>
  <li>Зробіть типову дію в додатку</li>
  <li>Проаналізуйте результат</li>
</ul>

<h2>Підсумок</h2>
<ul>
  <li>Спочатку вимірюємо, потім оптимізуємо</li>
  <li>React.memo — для стабільних props</li>
  <li>useMemo — для дорогих обчислень</li>
  <li>useCallback — для стабільних функцій</li>
  <li>Слідкуємо за обʼєктами, масивами та функціями</li>
</ul>
`.trim(),

  quiz: [
    {
      id: "rp-q1",
      text: "Яка головна мета React.memo?",
      options: [
        "Прискорити завантаження сторінки",
        "Запобігти ререндеру компонента, якщо props не змінилися",
        "Зберігати стан між перезавантаженнями",
        "Виконувати асинхронні запити",
      ],
      correctIndex: 1,
      explanation:
        "React.memo робить мемоізацію компонента: якщо props рівні (shallow compare), ререндер пропускається.",
    },
    {
      id: "rp-q2",
      text: "Коли useMemo дає найбільшу користь?",
      options: [
        "Коли потрібно мемоізувати функцію-обробник",
        "Коли є важке (дороге) обчислення, яке не повинно виконуватись на кожен ререндер",
        "Коли потрібно змінити DOM напряму",
        "Коли потрібно керувати маршрутизацією",
      ],
      correctIndex: 1,
      explanation:
        "useMemo доречний для дорогих обчислень або створення стабільних значень, щоб не тригерити зайві ререндери.",
    },
    {
      id: "rp-q3",
      text: "Для чого useCallback зазвичай використовують разом з React.memo?",
      options: [
        "Щоб уникнути створення нової функції на кожен ререндер і не ламати memo-оптимізацію дітей",
        "Щоб зробити функцію асинхронною",
        "Щоб зберігати дані в localStorage",
        "Щоб змінити порядок хуків",
      ],
      correctIndex: 0,
      explanation:
        "Якщо в props передається нова функція щоразу, React.memo в дочірньому компоненті не допоможе. useCallback стабілізує посилання на функцію.",
    },
    {
      id: "rp-q4",
      text: "Чому “створення нового об’єкта props” може ламати оптимізацію?",
      options: [
        "Бо React не підтримує об’єкти",
        "Бо shallow-compare бачить різні посилання навіть при однакових полях",
        "Бо об’єкти не серіалізуються",
        "Бо об’єкти блокують event loop",
      ],
      correctIndex: 1,
      explanation:
        "React.memo виконує поверхневе порівняння. Новий об’єкт = нове посилання, отже props “ніби змінилися”.",
    },
    {
      id: "rp-q5",
      text: "Який інструмент допомагає побачити, які компоненти ререндеряться і скільки це займає часу?",
      options: ["Redux DevTools", "React DevTools Profiler", "Lighthouse тільки", "TypeScript compiler"],
      correctIndex: 1,
      explanation:
        "React DevTools Profiler показує тривалість рендерів, причини оновлень і дерево компонентів під час commit.",
    },
  ],
},
{
  id: "web-security",
  title: "Web: безпека (XSS, CSRF, CORS) та базові практики",
  description: "Ризики браузера, загрози клієнта, політики безпеки та захист даних.",
  level: "advanced",
  tags: ["security", "web", "http"],
  content: `
<h2>Вступ</h2>
<p>
Веб-безпека — це не “хакерська магія”, а контроль довіри: що можна виконувати,
звідки приходять дані і які дії дозволені браузеру.
</p>

<p>
У цьому уроці: XSS, CSRF, CORS, політики браузера та базові практики захисту.
</p>

<h2>1) XSS — Cross-Site Scripting</h2>
<p>
XSS — це виконання шкідливого JavaScript у контексті вашого сайту.
</p>

<ul>
  <li>Небезпечний <code>innerHTML</code></li>
  <li>Вставка користувацьких даних без фільтрації</li>
</ul>

<p><strong>Захист:</strong> ескейпінг, CSP, уникати небезпечного HTML.</p>

<h2>2) CSRF — Cross-Site Request Forgery</h2>
<p>
CSRF змушує браузер жертви відправити запит на сайт, де вона вже авторизована.
</p>

<p><strong>Захист:</strong></p>
<ul>
  <li>CSRF-токени</li>
  <li>SameSite cookies</li>
  <li>перевірка Origin / Referer</li>
</ul>

<h2>3) Same-Origin Policy та CORS</h2>
<p>
Браузер забороняє JS читати відповіді з іншого домену без дозволу сервера.
</p>

<p>
CORS — це механізм, який через HTTP-заголовки дозволяє або забороняє такий доступ.
</p>

<h2>4) Cookies та прапорці</h2>
<ul>
  <li><code>HttpOnly</code> — недоступні з JS</li>
  <li><code>Secure</code> — тільки через HTTPS</li>
  <li><code>SameSite</code> — захист від CSRF</li>
</ul>

<h2>5) CSP — Content Security Policy</h2>
<p>
CSP обмежує джерела скриптів, стилів та ресурсів.
Це один із найсильніших захистів проти XSS.
</p>

<h2>Підсумок</h2>
<ul>
  <li>XSS — виконання шкідливого JS</li>
  <li>CSRF — запити від імені користувача</li>
  <li>CORS — політика доступу браузера до відповідей</li>
  <li>Cookies і CSP — ключові інструменти захисту</li>
</ul>
`.trim(),
  quiz: [
    {
      id: "sec-q1",
      text: "Що таке XSS (Cross-Site Scripting)?",
      options: [
        "Атака, яка змушує сервер підвисати",
        "Вставка шкідливого JavaScript у сторінку, який виконується в браузері користувача",
        "Підміна DNS-записів",
        "Перехоплення HTTPS-трафіку без ключів",
      ],
      correctIndex: 1,
      explanation:
        "XSS — це виконання інжектнутого JS у контексті сайту. Захист: ескейпінг, CSP, уникати небезпечного innerHTML.",
    },
    {
      id: "sec-q2",
      text: "Який загальний сенс CSRF-атаки?",
      options: [
        "Зробити запит від імені користувача, якщо він авторизований, використовуючи його cookies",
        "Вкрасти паролі з бази даних",
        "Зламати шифрування TLS",
        "Отримати доступ до файлової системи сервера",
      ],
      correctIndex: 0,
      explanation:
        "CSRF змушує браузер жертви відправити запит на сайт, де вона залогінена. Захист: CSRF-токени, SameSite cookies, перевірка Origin/Referer.",
    },
    {
      id: "sec-q3",
      text: "Що реально робить CORS?",
      options: [
        "Захищає сервер від хакерів",
        "Дозволяє/забороняє браузеру читати відповіді на крос-доменні запити",
        "Шифрує запити між клієнтом і сервером",
        "Забороняє будь-які запити з інших доменів",
      ],
      correctIndex: 1,
      explanation:
        "CORS — це механізм браузера: сервер через заголовки визначає, чи може браузер віддати JS-коду відповідь при крос-доменному запиті.",
    },
    {
      id: "sec-q4",
      text: "Який прапорець cookie ускладнює доступ до cookie з JavaScript (document.cookie)?",
      options: ["HttpOnly", "SameSite", "Secure", "Domain"],
      correctIndex: 0,
      explanation:
        "HttpOnly забороняє доступ до cookie з JS, зменшуючи ризики крадіжки сесії при XSS.",
    },
    {
      id: "sec-q5",
      text: "Що робить Content Security Policy (CSP) у контексті XSS?",
      options: [
        "Стискає HTML та CSS",
        "Обмежує джерела скриптів/ресурсів і може блокувати inline-скрипти",
        "Автоматично шифрує cookies",
        "Додає CORS-заголовки",
      ],
      correctIndex: 1,
      explanation:
        "CSP задає політику завантаження ресурсів (script-src тощо) і може суттєво зменшити наслідки XSS, блокуючи небажані скрипти.",
    },
  ],
},
];
