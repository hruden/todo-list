Додаток Список Завдань (Todo List)
Простий і інтерактивний додаток Списку Завдань, створений за допомогою React. Цей додаток дозволяє користувачам додавати, редагувати, виконувати та видаляти завдання. Він також має перемикач темної/світлої теми і зберігає завдання у локальному сховищі браузера для збереження між сеансами.

Особливості
Додавання нових завдань
Редагування існуючих завдань
Позначення завдань як виконаних/невиконаних
Видалення завдань
Перемикання між темною і світлою темами
Зберігання завдань у localStorage для збереження
Перегляд виконаних і невиконаних завдань окремо через акордеон
Закриття модального вікна по натисканню клавіші Escape або при натисканні за межами вікна
Інструкції з встановлення та налаштування
Вимоги
Node.js (версія >= 12)
npm або yarn (бажано npm)
Встановлення
Клонування репозиторію:

bash
Копировать код
git clone https://github.com/your-username/todo-list.git
Перейдіть до директорії проекту:

bash
Копировать код
cd todo-list
Встановіть залежності:

bash
Копировать код
npm install
Запуск додатку
Щоб запустити додаток локально:

bash
Копировать код
npm start
Це запустить додаток на http://localhost:3000.

Збірка для продакшн
Щоб зібрати додаток для продакшн:

bash
Копировать код
npm run build
Оптимізована збірка буде розміщена у папці build/.

Структура файлів
bash
Копировать код
src/
│
├── components/
│   ├── Todo.js            # Компонент окремого завдання
│   ├── TodoForm.js        # Компонент форми для додавання/редагування завдань
│   ├── TodoList.js        # Головний компонент, що керує списком завдань
│   └── Modal.js           # Модальний компонент, який можна повторно використовувати
│
├── App.js                 # Головний компонент додатку
├── index.js               # Точка входу для React
├── App.css                # Глобальні стилі
└── modal.css              # Специфічні стилі для модального вікна
Налаштування
Темна/Світла Тема
Додаток пропонує простий спосіб перемикання між темною та світлою темами за допомогою кнопки. Ви можете додатково налаштувати теми, змінивши відповідні CSS класи.

Збереження у localStorage
Завдання автоматично зберігаються в localStorage і відновлюються після перезавантаження сторінки, що дозволяє зберігати ваші завдання між сеансами браузера.

Модальне вікно
Компонент Modal можна використовувати для будь-яких типів спливаючих вікон у додатку. Він закривається при натисканні за межами вікна або при натисканні клавіші Escape.

Знімки екрану
Світла Тема

Темна Тема

Використані Технології
React: JavaScript-бібліотека для створення користувацьких інтерфейсів.
CSS: Стилі для додатку, включаючи власні темні та світлі теми.
localStorage: Зберігання даних завдань у браузері для збереження між сеансами.
nanoid: Для генерації унікальних ідентифікаторів для завдань.
Співпраця
Якщо ви бажаєте зробити свій внесок у розвиток цього проекту, можете форкнути репозиторій і надіслати pull request. Внески вітаються!

Ліцензія
Цей проект ліцензований за ліцензією MIT - див. файл LICENSE для деталей.

Контакти
Якщо у вас є питання або пропозиції, не соромтесь звертатися до мене за адресою Додаток Список Завдань (Todo List)
Простий і інтерактивний додаток Списку Завдань, створений за допомогою React. Цей додаток дозволяє користувачам додавати, редагувати, виконувати та видаляти завдання. Він також має перемикач темної/світлої теми і зберігає завдання у локальному сховищі браузера для збереження між сеансами.

Особливості
Додавання нових завдань
Редагування існуючих завдань
Позначення завдань як виконаних/невиконаних
Видалення завдань
Перемикання між темною і світлою темами
Зберігання завдань у localStorage для збереження
Перегляд виконаних і невиконаних завдань окремо через акордеон
Закриття модального вікна по натисканню клавіші Escape або при натисканні за межами вікна
Інструкції з встановлення та налаштування
Вимоги
Node.js (версія >= 12)
npm або yarn (бажано npm)
Встановлення
Клонування репозиторію:

bash
Копировать код
git clone https://github.com/your-username/todo-list.git
Перейдіть до директорії проекту:

bash
Копировать код
cd todo-list
Встановіть залежності:

bash
Копировать код
npm install
Запуск додатку
Щоб запустити додаток локально:

bash
Копировать код
npm start
Це запустить додаток на http://localhost:3000.

Збірка для продакшн
Щоб зібрати додаток для продакшн:

bash
Копировать код
npm run build
Оптимізована збірка буде розміщена у папці build/.

Структура файлів
bash
Копировать код
src/
│
├── components/
│   ├── Todo.jsx            # Компонент окремого завдання
│   ├── TodoForm.jsx        # Компонент форми для додавання/редагування завдань
│   ├── TodoList.jsx        # Головний компонент, що керує списком завдань
│   └── Modal.jsx           # Модальний компонент, який можна повторно використовувати
│
├── App.jsx                 # Головний компонент додатку
├── index.js               # Точка входу для React
├── App.css                # Глобальні стилі
└── modal.css              # Специфічні стилі для модального вікна
Налаштування
Темна/Світла Тема
Додаток пропонує простий спосіб перемикання між темною та світлою темами за допомогою кнопки. Ви можете додатково налаштувати теми, змінивши відповідні CSS класи.

Збереження у localStorage
Завдання автоматично зберігаються в localStorage і відновлюються після перезавантаження сторінки, що дозволяє зберігати ваші завдання між сеансами браузера.

Модальне вікно
Компонент Modal можна використовувати для будь-яких типів спливаючих вікон у додатку. Він закривається при натисканні за межами вікна або при натисканні клавіші Escape.

Знімки екрану
Світла Тема

Темна Тема

Використані Технології
React: JavaScript-бібліотека для створення користувацьких інтерфейсів.
CSS: Стилі для додатку, включаючи власні темні та світлі теми.
localStorage: Зберігання даних завдань у браузері для збереження між сеансами.
nanoid: Для генерації унікальних ідентифікаторів для завдань.
Співпраця
Якщо ви бажаєте зробити свій внесок у розвиток цього проекту, можете форкнути репозиторій і надіслати pull request. Внески вітаються!

Ліцензія
Цей проект ліцензований за ліцензією MIT - див. файл LICENSE для деталей.

Контакти
Якщо у вас є питання або пропозиції, не соромтесь звертатися до мене за адресою hrigoriev.ihor@gmail.com.

Todo List Application
A simple and interactive Todo List application built with React. This application allows users to add, edit, complete, and delete tasks. It also features a dark/light theme toggle and stores tasks in the browser's localStorage to persist between sessions.

Features
Add new todos
Edit existing todos
Mark todos as completed/uncompleted
Remove todos
Toggle between dark and light themes
Store todos in localStorage for persistence
View completed and pending todos separately with an accordion view
Close the modal by pressing the Escape key or clicking outside of it
Installation and Setup Instructions
Prerequisites
Node.js (version >= 12)
npm or yarn (preferably npm)
Installation
Clone the repository:

bash
Копировать код
git clone https://github.com/your-username/todo-list.git
Navigate to the project directory:

bash
Копировать код
cd todo-list
Install dependencies:

bash
Копировать код
npm install
Running the Application
To run the application locally:

bash
Копировать код
npm start
This will start the application on http://localhost:3000.

Building for Production
To build the application for production:

bash
Копировать код
npm run build
The optimized build will be output to the build/ folder.

File Structure
bash
Копировать код
src/
│
├── components/
│   ├── Todo.js            # Individual todo item component
│   ├── TodoForm.js        # Form component for adding/editing todos
│   ├── TodoList.js        # Main component that handles the todo list logic
│   └── Modal.js           # Reusable modal component
│
├── App.js                 # Main app component
├── index.js               # Entry point for React
├── App.css                # Global styles
└── modal.css              # Modal-specific styles
Customization
Dark/Light Mode
The application provides a simple way to switch between dark and light themes using a button. You can further customize the themes by editing the relevant CSS classes.

Persistence with localStorage
Todos are automatically saved to localStorage and restored when the page is reloaded, allowing you to keep your tasks across browser sessions.

Modal
The Modal component can be used for any type of popup in the application. It closes when the user clicks outside the modal or presses the Escape key.

Screenshots
Light Mode

Dark Mode

Technologies Used
React: A JavaScript library for building user interfaces.
CSS: Styling for the application, including custom dark and light modes.
localStorage: Browser storage to persist todo data between page refreshes.
nanoid: To generate unique IDs for todos.
Contributing
Feel free to fork this repository and submit pull requests if you'd like to contribute. Contributions are welcome!

License
This project is licensed under the MIT License - see the LICENSE file for details.

Contact
If you have any questions or suggestions, feel free to reach out to me at hrigoriev.ihor@gmail.com.