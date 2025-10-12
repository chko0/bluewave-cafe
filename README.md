# ☕ BlueWave Café — Interactive Web Menu

**BlueWave Café** is a modern, high-performance, and fully themeable web application built with **React**, **Vite**, and **Tailwind CSS**, featuring a **serverless feedback system powered by Cloudflare Workers and Resend API.**

It recreates a real café's digital menu experience — showcasing expertise in responsive UI/UX, global state management, performance optimization, and accessible front-end architecture.

This project serves as both a **technical showcase** and a **portfolio piece** highlighting advanced React development skills.

## ✨ Key Features

| Feature                            | Technologies Used                                                          | Benefit                                                                                                                                                                                       |
| :--------------------------------- | :------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Dynamic Theming**                | **React Context API**, `colors.js`, `ThemeSwitcher.jsx`                    | Allows instant theme switching using global state and CSS variable injection.                                                                                                                 |
| **Performance-First Architecture** | **`React.lazy()`**, `Suspense`, Vite `manualChunks`, image `fetchPriority` | Route-based code splitting and optimized build setup enable lightning-fast initial loads.                                                                                                     |
| **Elegant UI/UX Design**           | **`framer-motion`**, Tailwind CSS, dynamic favicon                         | Provides a polished, accessible interface with subtle motion effects and real-time theme reflection in the favicon.                                                                           |
| **Scalable Data Management**       | **`config.json`**, `menuData.js`                                           | All site data (navigation, metadata, and menu items) is externally managed, simplifying updates and long-term scalability.                                                                    |
| **SEO & Routing Optimization**     | **React Router v6**, `PageTitleHandler.jsx`, `react-helmet-async`          | Automatically generates descriptive page titles and meta tags for better SEO and user experience.                                                                                             |
| **Serverless Email System**        | **Cloudflare Worker**, [Resend API](https://resend.com/)                   | Securely handles feedback form submissions without exposing backend credentials. The Worker validates input, calls Resend's REST API, and sends confirmation emails with high deliverability. |

## 🚀 Live Demo

Explore the full experience, including dynamic themes and smooth animations:

🔗 **[https://bluewave-cafe.pages.dev](https://bluewave-cafe.pages.dev)**

## 🛠️ Tech Stack

- **Framework:** [React](https://reactjs.org/) (Hooks, Context, Lazy Loading)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** Custom **React Context** for Theming
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/icons/)
- **Backend:** [Cloudflare Workers](https://developers.cloudflare.com/workers/) + [Resend API](https://resend.com/) for serverless email handling

## ☁️ Backend

The project leverages a **Cloudflare Worker** to manage form submissions securely.  
When a customer submits feedback, the Worker validates input, sends the message to the site owner's inbox via **Resend API**, and returns a success response — all without exposing private API keys or relying on traditional servers.

_(Currently configured to send feedback to a test inbox for demonstration purposes.)_

## 📡 Deployment

BlueWave Café is deployed on **Cloudflare Pages**, with its **Cloudflare Worker** integrated under the same project namespace.

This setup ensures:

- Zero server maintenance
- Edge-based scalability and speed
- Automatic CI/CD via `git push`

# ☕ Inspiration

BlueWave Café was designed as a fictional brand to illustrate how thoughtful UI design, clean code, and technical polish can transform a simple café menu into a complete digital experience.
It's not just about what's on the menu — it's about the craft behind how it's served.

## 💻 Local Setup

To run **BlueWave Café** locally, follow these steps:

### 1. Prerequisites

Install **Node.js** (LTS version) and **npm** or **yarn**.

### 2. Clone the Repository

```bash
git clone https://github.com/chko0/bluewave-cafe.git
cd bluewave-cafe
```

### 3. Install Dependencies

Using npm:

```bash
npm install
```

or yarn:

```bash
yarn install
```

### 4. Start the Development Server

```bash
npm run dev
```

or:

```bash
yarn dev
```

The application will now be running on http://localhost:5173 (or another port if 5173 is occupied).

### 5. Build for Production

To create a production-ready optimized build:

```bash
npm run build
```

or:

```bash
yarn build
```

The production build will be located in the `/dist` folder.

## 📂 Project Structure

The codebase follows a clear, predictable structure for high maintainability:

```bash
src/
├── components/ # Reusable UI components (Navbar, Footer, Badge, Loading)
├── context/    # Global state logic (ThemeContext.jsx)
├── data/       # Content data (menuData.js)
├── pages/      # Route-specific components (MenuPage, AboutPage, NotFoundPage)
├── theme/      # Theme definitions (colors.js)
├── utils/      # Utility functions (setFavicon, utils.js)
├── App.jsx     # Main routing and global layout
└── main.jsx    # Entry point (initializes ThemeProvider)
```

## ⚡ Performance

Tested using **Google PageSpeed Insights** — achieving near-perfect scores:

- **Performance:** 99 / 100
- **Accessibility:** 100 / 100
- **Best Practices:** 100 / 100
- **SEO:** 100 / 100

## 🚧 Future Improvements

- Add a CMS or admin dashboard for dynamic menu editing
- Multi-language support (Arabic & English)
- Payment and order integration
- PWA support for offline browsing

## 📜 License

© 2025 chko0. All rights reserved.  
This project is for demonstration and portfolio purposes. Redistribution or commercial use without permission is prohibited.

---

**Crafted with ❤️ and caffeine.**
