# 🌦️ React Weather Dashboard

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

A modern, responsive weather application built with **React**, **TypeScript**, and **Tailwind CSS**. This application provides real-time weather updates and a 3-day forecast with a beautiful glassmorphism User Interface. It features full internationalization support (English/Arabic) with automatic RTL/LTR layout adjustments.

## ✨ Key Features

- **Real-time Weather Data**: Fetches current temperature, humidity, wind speed, and conditions via WeatherAPI.
- **Multi-Language Support (i18n)**: Seamlessly toggles between **English** and **Arabic**, including full layout direction switching (LTR/RTL).
- **Responsive Glassmorphism UI**: A visually stunning interface using backdrop filters and semi-transparent layers, optimized for both desktop and mobile devices.
- **3-Day Forecast**: Displays upcoming weather conditions in a scrollable list.
- **Type Safety**: Built with strict TypeScript interfaces for robust code quality.
- **Component-Based Architecture**: Modularized codebase using separation of concerns for maintainability.

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) |
| **State Management** | React Hooks (`useState`, `useEffect`, `useMemo`) |
| **Internationalization** | `react-i18next` |
| **Icons** | `react-icons` |
| **API** | [WeatherAPI.com](https://www.weatherapi.com/) |

## 📂 Architecture

The project follows a modular structure to ensure scalability and ease of maintenance:

```text
src/
├── components/          # Reusable UI components
│   ├── sections/        # Major view sections (CurrentWeather, ForecastList)
│   ├── CardCom.tsx      # Generic card wrapper
│   └── ForecastCom.tsx  # Individual forecast item
├── hooks/               # Custom hooks
│   └── useWeather.ts    # Data fetching and logic abstraction
├── utils/               # Utilities & Configuration
│   └── i18n.ts          # Localization setup
├── types.ts             # TypeScript interfaces/definitions
├── assets/              # Static assets (images)
├── App.tsx              # Main application layout
└── main.tsx             # Entry point
```

## 🚀 Installation & Setup

Follow these steps to run the project locally.

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/mohamedo-ohany/react-weather-dashboard.git
cd react-weather-dashboard
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
This project requires an API key from WeatherAPI.com.
1. Create a `.env` file in the root directory.
2. Add your API key as shown below:

```env
VITE_API_KEY=your_actual_api_key_here
```

### 4. Run the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📡 API Integration

The application uses the `forecast.json` endpoint from WeatherAPI.

| Endpoint | Method | Description | Parameters |
|----------|--------|-------------|------------|
| `/forecast.json` | `GET` | Fetches current weather & forecast | `key`, `q` (city), `days`, `lang` |

## 🔮 Future Roadmap

Based on the current architecture, here are the planned improvements:

1.  **Dynamic City Search**: Currently hardcoded to Cairo. Implementation of a search bar to allow users to query any city worldwide.
2.  **Geolocation Support**: define a feature to automatically detect the user's location on startup and fetch relevant weather data.
3.  **Comprehensive Error Handling UI**: Create a dedicated error boundary or modal component to gracefully handle API failures or network issues beyond simple text messages.

## 📄 License

This project is licensed under the MIT License.
