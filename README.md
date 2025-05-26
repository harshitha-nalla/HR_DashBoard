# Assignment for Flam Frontend Inten

# 💼 HR Performance Dashboard (Flam Internship Assignment)

A modern, responsive HR Performance Dashboard built with *Next.js App Router, **Tailwind CSS, and **Context API*, designed for HR managers to track employee performance, manage bookmarks, and view analytics.

> This project is built entirely using *static data*, without any backend calls, and demonstrates modular architecture, reusable components, performance handling, and an accessible UI.

---

## 🔧 Tech Stack

- *Next.js 14 (App Router)*
- *React (ES6+)*
- *Tailwind CSS*
- *ShadCN UI (Radix primitives)*
- *Context API (State Management)*
- *Chart.js (Analytics)*
- *Framer Motion (Animated Tabs)*

---

## 📁 Folder Structure



app/
├── layout.tsx

├── page.tsx               // Dashboard Homepage

├── bookmarks/             // Bookmarked employees

├── analytics/             // Charts & insights

├── employee/\[id]/         // Dynamic profile pages

components/

├── EmployeeCard.tsx

├── RatingStars.tsx

├── Tabs.tsx

├── Modal.tsx

├── SearchBar.tsx

├── FilterDropdown.tsx

context/

├── BookmarkContext.js

├── ThemeContext.js

hooks/

├── useBookmarks.js

├── useSearchFilter.js

lib/

├── data.js                // Static mock data (20 employees)

├── constants.js

styles/

├── globals.css

`

---

## 🚀 Features Implemented

### ✅ Core

- *Dashboard Homepage* (/)
  - Renders 20 static employees
  - Cards with: Full Name, Email, Age, Department
  - 5-star performance rating bar
  - Buttons: View, Bookmark, Promote
  - Responsive grid layout

- *Search & Filter*
  - Real-time search by name/email/department
  - Multi-select filter for department and performance rating

- *Employee Details Page* (/employee/[id])
  - Shows address, phone, bio, and rating history
  - Tabbed UI:
    - Overview
    - Projects
    - Feedback (with a form)

- *Bookmark Manager* (/bookmarks)
  - Displays all bookmarked employees
  - Remove bookmarks, trigger UI actions like "Promote" or "Assign to Project"

- *Analytics* (/analytics)
  - Department-wise average ratings (Bar Chart)
  - Bookmark trends (Mocked line chart)

---

### ⚙ Technical Highlights

- *Context API* for Bookmark & Theme management
- *Custom Hooks* (useBookmarks, useSearchFilter)
- *ShadCN UI* for buttons, modals, tabs
- *Dark/Light Mode* toggle via context
- *Framer Motion* tab transitions
- *Accessibility:* Keyboard-friendly components
- *No API Calls*: All data is local/static

---

## 🌈 Color Palette

| Role       | Color     |

|------------|-----------|

| Primary    | #6366F1 (Indigo) |

| Secondary  | #10B981 (Emerald) |

| Accent     | #F59E0B (Amber)  |


---

## 🧪 How to Run

1. *Clone the repo*
   
   bash

   git clone https://github.com/harshitha-nalla/HR_DashBoard.git

   cd HR_DashBoard


3. *Install dependencies*

   bash

   npm install
   

5. *Run the development server*

   bash

   npm run dev
   

7. Open http://localhost:3000 in your browser.

---

## ✨ Bonus Features (Optional Extras)

* Dark/Light Mode toggle
* Create New User (modal form with validation)
* Feedback form with text validation
* Framer Motion tab animations
* Pagination or infinite scroll

---

## 📦 Submission

This project is submitted as part of the *Frontend Internship Assignment for Flam*.

