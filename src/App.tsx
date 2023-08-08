import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import HomePage from "./components/HomePage/HomePage";
import Page1 from "./components/Page1/Page1";
import Page2 from "./components/Page2/Page2";
import Page3 from "./components/Page3/Page3";
import Page4 from "./components/Page4/Page4";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full bg-[#0c1029] text-white">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />}>
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="page4" element={<Page4 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
