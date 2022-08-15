import React from "react";

function Header({ onDarkModeClick, childDark }) {

    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {childDark ? "Light" : "Dark"} Mode
        </button>
      </header>
    )
}

export default Header;