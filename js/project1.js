
const mainSection = (
    <div>
        <img src="img/react-logo.svg" alt="react-logo" height="40px" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of enterprise app including mobile apps</li>
        </ul>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('main-section'));
root.render(mainSection);