import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage.jsx";
import Index from "./pages/Index.jsx";
import FormPage from "./pages/FormPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import DuplicateIndex from "./pages/DuplicateIndex.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/duplicate-home" element={<DuplicateIndex />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
