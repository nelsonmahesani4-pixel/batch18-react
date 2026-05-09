import React from "react";
 

const categories = [
  { label: "All",       icon: "🌍" },
  { label: "Italian",   icon: "🍝" },
  { label: "Asian",     icon: "🍜" },
  { label: "Mexican",   icon: "🌮" },
  { label: "American",  icon: "🍔" },
  { label: "Indian",    icon: "🍛" },
  { label: "French",    icon: "🥐" },
  { label: "Seafood",   icon: "🦞" },
  { label: "Vegan",     icon: "🥗" },
  { label: "Desserts",  icon: "🍮" },
];

export default function Categories({ activeCategory, setActiveCategory }) {
  return (
    <section className="categories" id="categories">
      <div className="container">
        <div className="categories__header">
          <span className="section-label">Browse by Type</span>
          <h2 className="section-title">World Cuisines</h2>
        </div>

        <div className="categories__scroll">
          <div className="categories__list">
            {categories.map((cat) => (
              <button
                key={cat.label}
                className={`categories__item ${activeCategory === cat.label ? "categories__item--active" : ""}`}
                onClick={() => setActiveCategory(cat.label)}
              >
                <span className="categories__icon">{cat.icon}</span>
                <span className="categories__label">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
