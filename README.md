Apple Clone (React + Tailwind)

This is a basic Apple website clone built using React, Tailwind CSS, and React Router.
The goal of this project is to replicate the UI/UX feel of Apple’s website while keeping the implementation simple and suitable for a college group project.

🚀 Features
Clean Apple-like UI
Responsive layout
Navigation bar with routing (Mac, iPhone, iPad)
Product pages with 5 items each
Basic animations (hover + transitions)
Reusable components
Organized asset structure for easy image updates
🛠 Tech Stack
React (Vite)
Tailwind CSS
React Router DOM
JavaScript (ES6+)
📁 Folder Structure
Apple-Clone-WAP/
│
├── public/
├── src/
│   ├── assets/
│   │   ├── iphone/
│   │   ├── ipad/
│   │   ├── mac/
│   │   └── hero.png
│   │
│   ├── App.jsx
│   ├── components.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── package.json
└── vite.config.js

👉 Images are grouped by category so they can be easily replaced later.

⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/your-username/Apple-Clone-WAP.git
cd Apple-Clone-WAP
2. Install dependencies
npm install
3. Run the project
npm run dev
👥 Team Workflow (IMPORTANT)
Before starting work
git pull origin main
Create your own branch
git checkout -b feature-yourname
After making changes
git add .
git commit -m "your message"
git push origin feature-yourname

Then create a Pull Request on GitHub.

⚠️ Rules to Avoid Errors
Always work inside the folder that contains package.json

Do NOT create nested folders like:

Apple-Clone-WAP/Apple-Clone-WAP ❌
Always pull latest changes before starting
Do NOT push directly to main (use branches)
📌 Notes
This is a UI-focused clone, not a full functional e-commerce site
Some links and features are intentionally simplified
Animations are approximated, not exact Apple-level complexity
📷 Future Improvements
Better animations (GSAP / Framer Motion)
Dynamic product data
Search functionality
Dark mode
👨‍💻 Contributors
Your Name (Leader)
Teammate 1
Teammate 2
📄 License

This project is for educational purposes only.
