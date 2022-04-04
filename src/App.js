import "./App.css";

function App() {
  return (
    <>
      <div className="containerForm">
        <form>
          <div className="inputWithLabel">
            <label htmlFor="name">name</label>
            <input type="text" id="name" />
          </div>
          <div className="inputWithLabel">
            <label htmlFor="mail">Email</label>
            <input type="email" id="mail" />
          </div>
          <button type="submit" id="send">
            ENVOYER
          </button>
        </form>
        <button id="resetBtn">RESET</button>
      </div>

      {/* {!result ? (
        <span></span>
      ) : (
        <span className="resultcontainer">{result}</span>
      )} */}
    </>
  );
}

export default App;
