import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // state variable for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  // className based on dark mode state
  const appClass = isDarkMode ? "App dark" : "App light";

  // event handler to toggle dark mode
  function handleDarkModeClick() {
    setIsDarkMode((isDark) => !isDark);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
