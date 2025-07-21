PORTFOLIO

A visually striking, responsive portfolio built with React and custom CSS, inspired by modern e-commerce and creative web design. This site showcases full-stack project work, dynamic image cards, and modals emphasizing interactivity and clean UX.

Features

Modern UI/UX: Gradient backgrounds, card elevation, rounded design, custom scrollbars, and vibrant accent colors.

Responsive Layout: Looks beautiful and functions smoothly across desktop, tablet, and mobile screens.

Project Gallery: Interactive project cards with preview images—click to reveal modal with project technologies, stack, and summary details.

Reusable Components: Modular React components (Navbar, Projects, ProjectModal) for clarity and scalability.

Easy Content Expansion: Add new projects or content sections by simply updating JSON/object arrays.

Custom Styling: All styles are defined in a single CSS file with extensive use of gradients, color highlights, and hover states.

Asset Management: Images and media are organized in a dedicated public/images/ folder.

Technologies Used

Frontend: React, JavaScript (ES6+), JSX

Styling: Custom CSS (no external frameworks), CSS Flexbox, gradients, and media queries

Asset Handling: Public/static image referencing for reliable performance
<pre>'''
portfolio/
├── public/
│ └── images/
│ ├── blacksheep.jpg # Main site/project image
│ ├── event.jpg # Gen-AI project visual
│ ├── logo.jpg # Branding logo
│ └── pic.jpg # Portrait or additional use
├── src/
│ ├── components/
│ │ ├── Navbar.js # Header and navigation menu
│ │ ├── Projects.js # Project card grid
│ │ └── ProjectModal.js # Modal popup for each project
│ ├── data/
│ │ └── projects.js # Projects' content/config
│ ├── App.js # Main React app entry
│ ├── index.js # App renderer
│ └── body.css # Modern, colorful custom styles
├── package.json # npm + React dependencies
└── README.md # Project documentation (this file)
  '''</pre>



