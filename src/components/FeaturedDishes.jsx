import React, { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Carbonara",
    origin: "Rome, Italy",
    category: "Italian",
    emoji: "🍝",
    tag: "Trending",
    desc: "Creamy pasta with guanciale, eggs, and Pecorino Romano.",
    time: "25 min",
    rating: 4.9,
    calories: 620,
  },

  {
    id: 2,
    name: "Ramen",
    origin: "Japan",
    category: "Asian",
    emoji: "🍜",
    tag: "Popular",
    desc: "Rich broth noodle soup with chashu pork, egg, and nori.",
    time: "45 min",
    rating: 4.8,
    calories: 540,
  },

  {
    id: 3,
    name: "Birria Tacos",
    origin: "Jalisco, Mexico",
    category: "Mexican",
    emoji: "🌮",
    tag: "Hot 🔥",
    desc: "Slow-braised beef in a consommé-soaked corn tortilla.",
    time: "3 hrs",
    rating: 4.9,
    calories: 480,
  },
];

const tagColors = {
  Trending: "#e8622a",
  Popular: "#3b82f6",
  "Hot 🔥": "#ef4444",
};

export default function FeaturedDishes({ activeCategory = "All" }) {
  const [hovered, setHovered] = useState(null);

  const filtered =
    activeCategory === "All"
      ? dishes
      : dishes.filter((d) => d.category === activeCategory);

  return (
    <>
      <style>
        {`
          *{
            margin:0;
            padding:0;
            box-sizing:border-box;
          }

          body{
            background:#0f0f0f;
            font-family:Arial, sans-serif;
            color:white;
          }

          .container{
            width:90%;
            max-width:1200px;
            margin:auto;
          }

          .featured{
            padding:100px 0;
          }

          .featured__header{
            display:flex;
            justify-content:space-between;
            align-items:end;
            gap:20px;
            margin-bottom:50px;
            flex-wrap:wrap;
          }

          .section-label{
            color:#e8622a;
            font-size:14px;
            text-transform:uppercase;
            letter-spacing:2px;
            display:block;
            margin-bottom:12px;
          }

          .section-title{
            font-size:3rem;
            font-weight:800;
          }

          .featured__count{
            color:#bdbdbd;
            font-size:15px;
          }

          .featured__grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
            gap:30px;
          }

          .dish-card{
            background:#171717;
            border:1px solid rgba(255,255,255,0.08);
            border-radius:28px;
            overflow:hidden;
            transition:0.4s;
            position:relative;
          }

          .dish-card:hover{
            transform:translateY(-10px);
            border-color:#e8622a;
            box-shadow:0 20px 40px rgba(0,0,0,0.4);
          }

          .dish-card__img{
            height:230px;
            display:flex;
            justify-content:center;
            align-items:center;
            position:relative;
            background:linear-gradient(135deg,#1e1e1e,#111);
          }

          .dish-card__emoji{
            width:140px;
            height:140px;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:5rem;
            backdrop-filter:blur(10px);
            transition:0.4s;
          }

          .dish-card:hover .dish-card__emoji{
            transform:scale(1.1) rotate(8deg);
          }

          .dish-card__tag{
            position:absolute;
            top:18px;
            right:18px;
            color:white;
            padding:8px 16px;
            border-radius:50px;
            font-size:13px;
            font-weight:600;
          }

          .dish-card__body{
            padding:28px;
          }

          .dish-card__meta{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:18px;
            font-size:14px;
            color:#cfcfcf;
            gap:10px;
            flex-wrap:wrap;
          }

          .dish-card__name{
            font-size:1.8rem;
            margin-bottom:14px;
            font-weight:700;
          }

          .dish-card__desc{
            color:#bdbdbd;
            line-height:1.7;
            margin-bottom:22px;
            font-size:15px;
          }

          .dish-card__info{
            display:flex;
            justify-content:space-between;
            margin-bottom:25px;
            color:#d7d7d7;
            font-size:14px;
          }

          .dish-card__btn{
            width:100%;
            border:none;
            background:#e8622a;
            color:white;
            padding:14px;
            border-radius:14px;
            font-size:15px;
            font-weight:600;
            cursor:pointer;
            transition:0.3s;
          }

          .dish-card__btn:hover{
            background:#ff7b42;
            transform:translateY(-2px);
          }

          .dish-card__btn span{
            margin-left:6px;
            transition:0.3s;
          }

          .dish-card__btn:hover span{
            margin-left:12px;
          }

          .featured__empty{
            text-align:center;
            padding:80px 20px;
            background:#171717;
            border-radius:24px;
            border:1px solid rgba(255,255,255,0.08);
          }

          .featured__empty span{
            font-size:4rem;
            display:block;
            margin-bottom:20px;
          }

          .featured__empty p{
            color:#bdbdbd;
            font-size:18px;
          }

          @media(max-width:768px){

            .section-title{
              font-size:2.3rem;
            }

            .featured__header{
              align-items:flex-start;
            }

            .dish-card__name{
              font-size:1.5rem;
            }

            .dish-card__emoji{
              width:110px;
              height:110px;
              font-size:4rem;
            }

            .dish-card__img{
              height:190px;
            }
          }

          @media(max-width:500px){

            .featured{
              padding:70px 0;
            }

            .section-title{
              font-size:2rem;
            }

            .dish-card__body{
              padding:22px;
            }
          }
        `}
      </style>

      <section className="featured" id="featured">
        <div className="container">

          <div className="featured__header">
            <div>
              <span className="section-label">
                Curated Picks
              </span>

              <h2 className="section-title">
                {activeCategory === "All"
                  ? "Featured Dishes"
                  : activeCategory + " Dishes"}
              </h2>
            </div>

            <p className="featured__count">
              {filtered.length} dishes
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="featured__empty">
              <span>🍽</span>
              <p>No dishes in this category yet.</p>
            </div>
          ) : (
            <div className="featured__grid">
              {filtered.map((dish) => (
                <article
                  key={dish.id}
                  className={`dish-card ${
                    hovered === dish.id ? "dish-card--hovered" : ""
                  }`}
                  onMouseEnter={() => setHovered(dish.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="dish-card__img">

                    <div
                      className="dish-card__emoji"
                      style={{
                        background: `radial-gradient(circle at 40% 40%, ${
                          tagColors[dish.tag] || "#e8622a"
                        }22, transparent)`,
                      }}
                    >
                      {dish.emoji}
                    </div>

                    <span
                      className="dish-card__tag"
                      style={{
                        background:
                          tagColors[dish.tag] || "#e8622a",
                      }}
                    >
                      {dish.tag}
                    </span>
                  </div>

                  <div className="dish-card__body">

                    <div className="dish-card__meta">
                      <span className="dish-card__origin">
                        📍 {dish.origin}
                      </span>

                      <span className="dish-card__rating">
                        ⭐ {dish.rating}
                      </span>
                    </div>

                    <h3 className="dish-card__name">
                      {dish.name}
                    </h3>

                    <p className="dish-card__desc">
                      {dish.desc}
                    </p>

                    <div className="dish-card__info">
                      <span>⏱ {dish.time}</span>
                      <span>🔥 {dish.calories} cal</span>
                    </div>

                    <button className="dish-card__btn">
                      View Details <span>→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}