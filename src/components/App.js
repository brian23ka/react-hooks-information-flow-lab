import React, { useState } from 'react';
import Header from './Header';
import ShoppingList from './ShoppingList';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={isDarkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={handleDarkModeClick} isDarkMode={isDarkMode} />
      <ShoppingList />
    </div>
  );
}

export default App;
