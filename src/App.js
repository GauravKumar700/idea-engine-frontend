import {
  Routes,
  Route,
  useNavigationType,
  NavigationType,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom"
import './App.css';
import HomePage from "./components/HomePage";
// import BetadayzerovercelappByHtm from "./pages/BetadayzerovercelappByHtm";
import DivlayOutAuthPage from "./components/DivlayOutAuthPage";
import { useEffect } from "react";
import Login from "./components/Login"
import Welcome_page from "./Mycomponents/Welcome_page"
import QnA_page from "./Mycomponents/QnA_page"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/" element={<BetadayzerovercelappByHtm />} /> */}
        <Route path="/signUp" element={<DivlayOutAuthPage />} />
        {/* sign up and login page to be rendered here 
      baaki landing page n all homepage wale component se render hore hai.
      */}
        <Route path="/login" element={<Login />} />
        <Route path="/welcome-page" element={<Welcome_page />} />
        <Route path="/qna-page" element={<QnA_page />} />
      </Routes>
    </Router>
  );
}

export default App;
