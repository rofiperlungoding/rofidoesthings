# 🚀 Rofi Does Things | Professional Portfolio

![Project Status](https://img.shields.io/badge/status-active-success.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

> **A high-performance, aesthetically crafted personal portfolio focusing on User Experience, Minimalist Design, and Engineering Excellence.**

![Application Preview](./public/preview.png)
*(Please save a screenshot of your website as `public/preview.png` to display it here)*

## 📖 Executive Summary

**Rofi Does Things** is a modern personal portfolio web application designed to showcase technical expertise in **Computer Engineering, IoT, Cybersecurity**, and **Creative Technology**. Built with a focus on performance and accessibility, it leverages the latest frontend ecosystem to deliver a seamless, native-app-like experience on the web.

The project features a **Bento-grid inspired layout**, **Glassmorphism UI**, and **Split-Vertical Navigation**, representing a fusion of engineering precision and creative design.

---

## ✨ Key Features

- **🎨 Modern Design System**: Implements a highly customized CSS variable-based design system featuring glassmorphism, rounded aesthetics, and soft shadows.
- **🧭 Split-Vertical Navigation**: A unique, non-intrusive navigation pattern that separates branding (left) from navigation actions (right), optimized for both desktop and mobile.
- **📱 Fully Responsive**: Adaptive layouts that transition smoothly from large desktop screens to mobile devices using CSS Grid and Flexbox.
- **⚡ High Performance**: Powered by **Vite**, ensuring instant HMR (Hot Module Replacement) and optimized production builds.
- **🎭 Dynamic Interactions**: Subtle micro-interactions, hover effects, and smooth transitions using standard CSS3 standards.
- **📄 Interactive Resume**: Integrated PDF viewer with fallback support for seamless resume document access.

---

## 🛠️ Technology Stack

### Core Framework
- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed programming language that builds on JavaScript.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling.

### Styling & Assets
- **CSS3 Variables**: For dynamic theming and consistent design tokens.
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent open-source icons.
- **[Google Fonts](https://fonts.google.com/)**: Uses `Inter` and `Plus Jakarta Sans` for typography.

### Routing & navigation
- **[React Router DOM](https://reactrouter.com/)**: Declarative routing for React web applications.

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn**

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/rofiperlungoding/rofidoesthings.git
    cd rofidoesthings
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open the application**
    Access the app at `http://localhost:5173`.

---

## 📂 Project Architecture

The project follows a scalable and modular folder structure:

```bash
src/
├── components/          # Reusable UI components (Hero, Navbar, etc.)
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── PortfolioSection.tsx
│   └── ...
├── App.tsx              # Main Application Component & Routing
├── main.tsx             # Application Entry Point
├── index.css            # Global Styles & Design Tokens
└── vite-env.d.ts       # Type definitions
public/
├── Resume_Rofi.pdf      # Static assets
└── profile-rofi.png
```

---

## 🔧 Customization

### Design Tokens
Global styles are managed in `src/index.css`. You can customize the look and feel by modifying the CSS variables in the `:root` scope:

```css
:root {
  --bg-app: #F5F7FA;
  --accent-blue: #3B82F6;
  --radius-lg: 32px;
  /* ... */
}
```

---

## 📦 Deployment

This project is optimized for deployment on platforms like **Vercel**, **Netlify**, or **GitHub Pages**.

To build for production:

```bash
npm run build
```

The output will be generated in the `dist/` directory, ready to be served.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to urge changes or submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Contact

**Rofi Darmawan** - [**@rofiperlungoding**](https://github.com/rofiperlungoding)

Project Link: [https://github.com/rofiperlungoding/rofidoesthings](https://github.com/rofiperlungoding/rofidoesthings)
