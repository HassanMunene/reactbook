function Header () {
    return (
        <header>
            <nav><img src="img/react-logo.svg" alt="react-logo" height="40px" width="40px" /></nav>
        </header>
    );
}

function MainSection () {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It is very friendly</li>
                <li>It does not have a very steep learning curve</li>
                <li>It is hot in the market</li>
                <li>It uses javascript</li>
            </ol>
        </div>
    );
}
function Footer () {
    return (
        <footer>© 2024 Jaanak development. All rights reserved.</footer>
    )
}
function Page () {
    return (
        <div>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('main-section'));
root.render(<Page />);