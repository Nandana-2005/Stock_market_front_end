import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Landing-Page/home.jsx";
import Signup from "./assets/Landing-Page/sign-up.jsx";
import Login from "./assets/Landing-Page/login.jsx";
import News from "./assets/News/news.jsx";
import Dashboard from "./assets/Dashboard/dashboard.jsx";
import Portfolio from "./assets/Portfolio/portfolio.jsx";
import MutualFund from "./assets/Mutual-Fund/mutual-fund.jsx";
import Stocks from "./assets/stocks/stocks.jsx";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/news" element={<News />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/mutual-fund" element={<MutualFund />} />
            </Routes>
        </Router>
    );
}

export default App;