# 🎟️ Lottery Ticket Generator

A simple and interactive **Lottery Ticket Generator** built with React.

The project demonstrates how to break a React application into reusable components and generate lottery tickets dynamically. It also uses a warm, earthy visual style with a **cream, terracotta, sage, and beige** color palette.

## ✨ Features

* 🎟️ Generate a new lottery ticket
* 🔢 Display lottery numbers in a clean horizontal layout
* 🎨 Warm, minimalist UI
* 🌿 Earthy color palette
* 🧩 Reusable React components
* 🖱️ Interactive button and number hover effects
* 🎉 Display a congratulations message

## 🛠️ Technologies Used

* **React**
* **JavaScript**
* **CSS**
* **Vite** (if using the Vite React setup)

## 📁 Project Structure

```text
src/
├── App.jsx
├── App.css
├── Lottery.jsx
├── Ticket.jsx
├── Ticket.css
├── TicketNum.jsx
├── TicketNum.css
└── helper.js
```

### Component Structure

```text
App
 └── Lottery
      └── Ticket
           └── TicketNum
```

The application follows a simple component hierarchy:

* **App** — Main application component
* **Lottery** — Handles the lottery logic and ticket generation
* **Ticket** — Displays an individual lottery ticket
* **TicketNum** — Displays each individual lottery number
* **helper.js** — Contains helper functions used by the lottery logic

## 🎨 Design

The interface uses a warm, modern, earthy aesthetic.

### Color Palette

| Color            | Hex       | Usage             |
| ---------------- | --------- | ----------------- |
| Warm Ivory       | `#F4EFE6` | Page background   |
| Deep Olive       | `#2F3A32` | Main text         |
| Muted Terracotta | `#B85C38` | Primary accent    |
| Dark Terracotta  | `#98492D` | Button hover      |
| Sage             | `#71816B` | Secondary text    |
| Soft White       | `#FFFDF8` | Ticket background |
| Warm Beige       | `#E7D8C9` | Number circles    |

The palette is designed to give the application a **premium, minimalist, handmade feel** rather than the typical bright colors used in lottery interfaces.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate into the project

```bash
cd <project-folder>
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

## 🧩 Important Implementation Details

The ticket numbers are wrapped inside a `.numbers` container. This allows the numbers to be displayed horizontally using CSS Flexbox.

```jsx
<div className="numbers">
    {ticket.map((num, index) => (
        <TicketNum key={index} num={num} />
    ))}
</div>
```

The `Ticket.css` file is imported directly into `Ticket.jsx`:

```jsx
import "./Ticket.css";
```

This keeps the styling for the ticket component organized and separate from the rest of the application.

## 🧹 Code Cleanup

Unused imports should be removed to keep the project clean.

For example, if `sum` is no longer used in `Lottery.jsx`:

```jsx
import { genTicket } from "./helper";
```

Similarly, `App.jsx` only needs the components and styles that it actually uses.

## 📸 UI Overview

The application follows this basic layout:

```text
             LOTTERY

       ┌─────────────────────┐
       │     YOUR TICKET     │
       │                     │
       │    ◯    ◯    ◯      │
       │    1    6    6      │
       │                     │
       └─────────────────────┘

          [ Buy New Ticket ]

        Congratulations! 🎉
```

## 📚 What I Learned

This project helped demonstrate several important React concepts:

* Creating reusable components
* Passing data through props
* Rendering lists using `.map()`
* Using `key` props for dynamically rendered elements
* Separating component-specific CSS
* Organizing a React project into multiple files
* Using JavaScript helper functions
* Building an interactive UI with React

## 🔮 Future Improvements

Some possible improvements for the project:

* Add multiple lottery ticket types
* Add configurable number ranges
* Add a winning-number system
* Add ticket history
* Add animations when generating a ticket
* Add a reset button
* Make the design fully responsive
* Add accessibility improvements
* Add unit tests for the lottery logic

## 👤 Author
Kirti
Created as a React practice project while learning component-based UI development.

---

⭐ If you like the project, feel free to give it a star!
