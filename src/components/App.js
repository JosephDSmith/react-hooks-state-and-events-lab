import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

    const [isDark, setIsDark] = useState(false)

  function toggle(){
    setIsDark((isDark) => !isDark)
  }
 
  const appClass = isDark ? "App dark" : "App light"
  const mode = isDark ? "Dark Mode" : "Light Mode"
 
 
 

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggle}>{mode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
