import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    const value = inputValue.trim();
    if (!value) return;
    setItems([...items, value]);        // add new item
    setInputValue("");                  // clear input
  };

  const handleRemove = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove)); // remove item
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="app">
      <div className="card">
        <div className="input-row">
          <input
            type="text"
            placeholder="Add Your Task"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        <ul className="list">
          {items.map((item, index) => (
            <li key={index} className="list-item">
              <span>{item}</span>
              <button
                className="remove-btn"
                onClick={() => handleRemove(index)}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;