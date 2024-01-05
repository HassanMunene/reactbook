console.log('The page is loading');

const navbar = (
    <nav>
        <h1>Jaanak wholesalers</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
    </nav>
);

console.log(navbar);
ReactDOM.render(
    navbar,
    document.getElementById('navbar')
);