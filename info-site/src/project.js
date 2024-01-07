import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainSection from "./Main-section";

function App () {
    return (
        <div className="page-container">
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<App />);