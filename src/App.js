import "./App.css";
import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const catList = new Set(items.map((item) => item.category));

    setCategories([...catList]);
  }, []);

  const filterItems = (category) => {
    console.log(category);
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <>
      <main>
        <section className="menu">
          <div className="title">
            <h2>Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItems={filterItems} categories={categories} />
          <Menu items={menuItems} />
        </section>
      </main>
    </>
  );
}

export default App;
