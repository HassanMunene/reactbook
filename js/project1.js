function Header () {
    return (
        <header className="nav-container">
            <nav className="navbar">
                <img src="img/react-logo.svg" alt="react-logo" className="nav-logo"/>
                <ul className="nav-items">
                    <li className="item">Pricing</li>
                    <li className="item">About</li>
                    <li className="item">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

function MainSection () {
    return (
        <div className="main-content">
            <div className="container">
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>It is very friendly</li>
                    <li>It does not have a very steep learning curve</li>
                    <li>It is hot in the market</li>
                    <li>It uses javascript</li>
                </ol>
            </div>
        </div>
    );
}
function Footer () {
    return (
        <footer className="footer">© 2024 Jaanak development. All rights reserved.</footer>
    )
}
function Page () {
    return (
        <div className="page-container">
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('page'));
root.render(<Page />);