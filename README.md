# Web Components Using React

![React](https://img.shields.io/badge/React-18-blue?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-4-purple?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

This project demonstrates how to integrate **Web Components** with **React**, enabling the creation of reusable custom elements that can be utilized across various web applications.

## 🚀 Overview

Web Components allow developers to define custom, reusable HTML elements with encapsulated functionality and styling. By integrating Web Components with React, you can leverage React's component-based architecture while ensuring your components are **framework-agnostic** and reusable in non-React environments.

## ✨ Features

- 📌 **React Integration**: Utilizes libraries like [`react-to-web-component`](https://github.com/bitovi/react-to-web-component) to convert React components into custom elements.
- 🎨 **Reusable Components**: Encapsulates component logic and styles, ensuring consistency across applications.
- 🏗 **Framework Agnostic**: Once converted to Web Components, these elements can be used in any web application, regardless of the underlying framework.
- ⚡ **Vite-Powered**: Uses Vite for fast development and optimized builds.
- 🎭 **Scalable and Maintainable**: Built with modern React best practices.

## 🏗 File Structure

The project follows a **structured** React application layout:

```
Web-Components-Using-React/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── MyComponent.jsx
│   │   ├── AnotherComponent.jsx
│   │   └── WebComponentWrapper.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles/
│   │   └── main.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

### 📂 Key Directories & Files

- **`public/`** - Contains static assets and `index.html`.
- **`src/`** - Holds the main source code:
  - **`components/`** - Contains React components and wrappers.
  - **`styles/`** - Includes CSS styles.
- **`.gitignore`** - Specifies files and directories to be ignored by Git.
- **`package.json`** - Manages project dependencies and scripts.
- **`vite.config.js`** - Configuration file for **Vite**.
- **`README.md`** - Project documentation.

## 🛠 Installation & Setup

To get started with this project, follow these steps:

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Manav2311/Web-Components-Using-React.git
cd Web-Components-Using-React
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Start the Development Server

```sh
npm run dev
```

This will launch the application using Vite's development server.

## 🔧 Converting React Components to Web Components

To integrate **Web Components** with React, you can use the [`react-to-web-component`](https://github.com/bitovi/react-to-web-component) library.

### Example:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import reactToWebComponent from 'react-to-web-component';

const MyComponent = () => {
  return <div>Hello, Web Component!</div>;
};

customElements.define('my-component', reactToWebComponent(MyComponent, React, ReactDOM));
```

### Usage in HTML:

```html
<my-component></my-component>
```

This allows you to use the **React component** in **any HTML file** or framework that supports Web Components.

## 📚 Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Web Components Overview](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [Vite Documentation](https://vitejs.dev/guide/)

## 🤝 Contributing

Contributions are welcome! If you’d like to contribute, please **fork the repository**, create a new branch, and submit a pull request.

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---
