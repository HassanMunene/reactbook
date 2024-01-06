function Page () {
    return (
        <div>
            <h1>Reasons I love React</h1>
            <ul>
                <li>It is very friendly</li>
                <li>It does not have a very steep learning curve</li>
                <li>It is hot in the market</li>
                <li>It uses javascript</li>
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page />);