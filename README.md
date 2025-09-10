# React + Vite

A modern, responsive web application that mimics the functionality of Google's Gemini AI, built with React.js and powered by the Google Generative AI API. This project provides a user-friendly interface for interacting with AI-powered text generation.

![Gemini Clone Preview](https://img.shields.io/badge/status-active-success) ![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react) ![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF?logo=vite)

## ✨ Features

- **AI-Powered Chat Interface**: Interact with Google's Gemini Pro model
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI/UX**: Clean and intuitive user interface
- **Quick Prompts**: Predefined prompts to get you started
- **Real-time Responses**: Streamed responses from the AI model
- **Context-Aware**: Maintains conversation context for better interactions

## 🚀 Tech Stack

- **Frontend**: React.js 18.3.1
- **Build Tool**: Vite 5.3.4
- **Styling**: CSS3
- **AI Integration**: Google Generative AI SDK
- **State Management**: React Context API

## 🛠️ Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v8 or higher) or yarn
- Google API Key for Gemini AI

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/gemini-clone-react.git
   cd gemini-clone-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your Google API key:
   ```env
   VITE_GOOGLE_API_KEY=your_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open in browser**
   The application will be available at `http://localhost:5173`

## 📂 Project Structure

```
src/
├── assets/           # Static assets (images, icons)
├── components/       # Reusable UI components
│   ├── main/        # Main chat interface
│   └── Sidebar/     # Navigation sidebar
├── config/          # Configuration files
├── context/         # React context providers
├── App.jsx          # Main application component
└── main.jsx         # Application entry point
```

## 🔧 Configuration

Edit the `src/config/gemini.js` file to customize the AI model behavior:

```javascript
const generationConfig = {
    temperature: 0.9,      // Controls randomness (0 to 1)
    topP: 1,              // Nucleus sampling parameter
    maxOutputTokens: 2048, // Maximum length of the response
    responseMimeType: "text/plain",
};
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [Google AI](https://ai.google/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

