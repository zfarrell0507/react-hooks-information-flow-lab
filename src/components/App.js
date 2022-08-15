import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [childDark, setChildDark] = useState(false)

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
    setChildDark((childDark) => !childDark)

  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={handleDarkModeClick} childDark={childDark} />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
