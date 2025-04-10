import React from 'react';

function Header({ onDarkModeClick, isDarkMode }) {
  return (
    <header>
      <h1>Grocery List</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
