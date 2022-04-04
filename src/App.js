import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [result, setresult] = useState("");

  const resetResult = () => {
    setresult("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setresult(`NOM : ${name}  / MAIL : ${mail}`);
    setMail("");
    setName("");
  };

  return (
    <>
      <div className="containerForm">
        <form onSubmit={handleSubmit}>
          <div className="inputWithLabel">
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="inputWithLabel">
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              id="mail"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <button type="submit" id="send">
            ENVOYER
          </button>
        </form>
        <button onClick={resetResult} id="resetBtn">
          RESET
        </button>
      </div>

      {!result ? (
        <span></span>
      ) : (
        <span className="resultcontainer">{result}</span>
      )}
    </>
  );
}

export default App;
