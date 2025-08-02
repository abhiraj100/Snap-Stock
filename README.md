# 📸 Snap-Stock

Snap-Stock is a modern React-based stock image gallery that fetches high-quality photos from the [Pexels API](https://www.pexels.com/api/) using `axios`. The app allows users to browse trending images, search for specific visuals, and save favorites with a simple click.

---

## 🔥 Features

- 🔍 **Search Functionality** – Easily search images by keywords.
- 🖼️ **80 Images Displayed** – Loads and displays 80 beautiful images from Pexels on the homepage.
- ❤️ **Save Images** – Click any image to save it to your personal favorites.
- 📁 **Saved Section** – View saved images via the "Saved" menu in the header.
- 🍞 **Toast Notifications** – Real-time user feedback using `react-toastify`.
- 🧭 **Header Menu** – Explore images through clickable menu categories.

---

## 🚀 Tech Stack

- **React** (Frontend)
- **Axios** (API calls)
- **React Toastify** (Notification system)
- **Pexels API** (Image provider)
- **Tailwind CSS / CSS Modules** *(if used for styling)*

---

## 📁 Folder Structure

src/
├── components/
│   ├── HeaderBar.jsx        # Top navigation with menus & saved tab
│   ├── ImageGrid.jsx        # Component for rendering the image grid
│   └── SavedImages.jsx      # Displays saved images
├── pages/
│   └── HomePage.jsx         # Main landing page with images
├── services/
│   └── pexelsApi.js         # Axios logic to call Pexels API
├── App.js                   # Main app component with routes
├── index.js                 # Entry point
└── styles/                  # Optional custom CSS/Tailwind


---

## 📦 Installation

```bash
git clone https://github.com/yourusername/snap-stock.git
cd snap-stock
npm install
