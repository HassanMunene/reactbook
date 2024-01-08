import './App.css';

function App() {
  const name = null;
  return (
    <div className="App">
      <h1>Hello {2 + 2}!</h1>

      {name ? (
        <>
          <h1>Hello {name}</h1>
        </>
      ): (
        <>
          <h1>testing name</h1>
          <p>There is no name here</p>
        </>
      )}
    </div>
  );
}
export default App;
