import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListComponent from "./components/ListComponent";
import Welcome from "./components/Welcome";
import AuthPage from "./pages/AuthPage";
import AuthResult from "./pages/AuthResult";
import AxiosTest from "./pages/AxiosTest";
import MainPage from "./pages/MainPage";
import NewsApiPage from "./pages/NewsApiPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<ListComponent />}></Route>
      </Routes>
      <Routes>
        <Route path="/axiosTest" element={<AxiosTest />}></Route>
      </Routes>
      <Routes>
        <Route path="/news" element={<NewsApiPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<AuthPage />}></Route>
      </Routes>
      <Routes>
        <Route path="/authResult" element={<AuthResult />}></Route>
      </Routes>
      <Routes>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
