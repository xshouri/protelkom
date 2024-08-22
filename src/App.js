import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Serwis from "./pages/serwis";
import Skup from "./pages/skup";
import Akcesoria from "./pages/akcesoria";
import Kontakt from "./pages/kontakt";
 
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/serwis" element={<Serwis />} />
                <Route
                    path="/skup"
                    element={<Skup />}
                />
                <Route path="/akcesoria" element={<Akcesoria />} />
                <Route
                    path="/kontakt"
                    element={<Kontakt />}
                />
            </Routes>
            <Footer />
        </Router>
    );
}
 
export default App;