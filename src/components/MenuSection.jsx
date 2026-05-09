import React, { useState } from "react";

const menuTabs = ["Starters", "Mains", "Desserts", "Drinks"];

const menuItems = {
  Starters: [
    { name: "Bruschetta al Pomodoro", origin: "Italy", emoji: "🍅", price: "$8", cal: 180 },
    { name: "Gyoza Dumplings", origin: "Japan", emoji: "🥟", price: "$10", cal: 220 },
    { name: "Elotes (Street Corn)", origin: "Mexico", emoji: "🌽", price: "$7", cal: 260 },
    { name: "Saag Paneer Pakora", origin: "India", emoji: "🧀", price: "$9", cal: 310 },
    { name: "Pissaladière", origin: "France", emoji: "🧅", price: "$11", cal: 290 },
    { name: "Ceviche Clásico", origin: "Peru", emoji: "🍋", price: "$13", cal: 195 },
  ],

  Mains: [
    { name: "Osso Buco alla Milanese", origin: "Italy", emoji: "🥩", price: "$32", cal: 680 },
    { name: "Pad See Ew", origin: "Thailand", emoji: "🍜", price: "$18", cal: 560 },
    { name: "Enchiladas Verdes", origin: "Mexico", emoji: "🫔", price: "$16", cal: 490 },
    { name: "Tandoori Murgh", origin: "India", emoji: "🍗", price: "$22", cal: 420 },
    { name: "Duck à l'Orange", origin: "France", emoji: "🦆", price: "$36", cal: 720 },
    { name: "Jerk Chicken & Rice", origin: "Jamaica", emoji: "🍚", price: "$20", cal: 640 },
  ],

  Desserts: [
    { name: "Tiramisu Classico", origin: "Italy", emoji: "☕", price: "$9", cal: 380 },
    { name: "Mochi Ice Cream", origin: "Japan", emoji: "🍡", price: "$7", cal: 210 },
    { name: "Tres Leches Cake", origin: "Mexico", emoji: "🍰", price: "$8", cal: 420 },
    { name: "Gulab Jamun", origin: "India", emoji: "🍮", price: "$6", cal: 360 },
    { name: "Tarte Tatin", origin: "France", emoji: "🍏", price: "$10", cal: 310 },
    { name: "Baklava", origin: "Turkey", emoji: "🍯", price: "$8", cal: 440 },
  ],

  Drinks: [
    { name: "Aperol Spritz", origin: "Italy", emoji: "🍊", price: "$12", cal: 150 },
    { name: "Matcha Latte", origin: "Japan", emoji: "🍵", price: "$7", cal: 120 },
    { name: "Horchata de Arroz", origin: "Mexico", emoji: "🥛", price: "$5", cal: 200 },
    { name: "Mango Lassi", origin: "India", emoji: "🥭", price: "$6", cal: 180 },
    { name: "Réalise Citron Pressé", origin: "France", emoji: "🍋", price: "$5", cal: 90 },
    { name: "Tamarind Agua Fresca", origin: "Mexico", emoji: "🌊", price: "$4", cal: 110 },
  ],
};

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("Starters");

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

          .menu-section{
            padding:100px 0;
          }

          .menu-section__header{
            text-align:center;
            margin-bottom:50px;
          }

          .section-label{
            color:#ff7b54;
            font-size:14px;
            letter-spacing:2px;
            text-transform:uppercase;
          }

          .section-title{
            font-size:3rem;
            margin:15px 0;
          }

          .menu-section__sub{
            color:#bdbdbd;
            max-width:600px;
            margin:auto;
            line-height:1.6;
          }

          .menu-section__tabs{
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            gap:15px;
            margin-bottom:50px;
          }

          .menu-section__tab{
            padding:12px 24px;
            border:none;
            border-radius:50px;
            background:#1c1c1c;
            color:#bdbdbd;
            cursor:pointer;
            transition:0.3s;
            font-size:15px;
            font-weight:600;
          }

          .menu-section__tab:hover{
            background:#ff7b54;
            color:white;
          }

          .menu-section__tab--active{
            background:#ff7b54;
            color:white;
          }

          .menu-section__grid{
            display:grid;
            grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
            gap:25px;
          }

          .menu-item{
            background:#161616;
            border:1px solid rgba(255,255,255,0.08);
            border-radius:20px;
            padding:22px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            transition:0.3s;
            animation:fadeUp 0.5s ease forwards;
            opacity:0;
          }

          .menu-item:hover{
            transform:translateY(-5px);
            border-color:#ff7b54;
            box-shadow:0 10px 25px rgba(0,0,0,0.3);
          }

          .menu-item__left{
            display:flex;
            align-items:center;
            gap:15px;
          }

          .menu-item__emoji{
            font-size:2rem;
          }

          .menu-item__name{
            font-size:1.1rem;
            margin-bottom:6px;
          }

          .menu-item__origin{
            color:#bdbdbd;
            font-size:14px;
          }

          .menu-item__right{
            display:flex;
            flex-direction:column;
            align-items:flex-end;
            gap:8px;
          }

          .menu-item__cal{
            color:#ffb347;
            font-size:14px;
          }

          .menu-item__price{
            font-size:1.1rem;
            font-weight:bold;
            color:#ff7b54;
          }

          @keyframes fadeUp{
            from{
              opacity:0;
              transform:translateY(20px);
            }
            to{
              opacity:1;
              transform:translateY(0);
            }
          }

          @media(max-width:768px){

            .section-title{
              font-size:2.2rem;
            }

            .menu-item{
              flex-direction:column;
              align-items:flex-start;
              gap:20px;
            }

            .menu-item__right{
              align-items:flex-start;
            }
          }
        `}
      </style>

      <section className="menu-section" id="menu">
        <div className="container">

          <div className="menu-section__header">
            <span className="section-label">The Menu</span>

            <h2 className="section-title">
              Taste Every Culture
            </h2>

            <p className="menu-section__sub">
              A curated collection of iconic dish names from around the world.
            </p>
          </div>

          <div className="menu-section__tabs">
            {menuTabs.map((tab) => (
              <button
                key={tab}
                className={`menu-section__tab ${
                  activeTab === tab ? "menu-section__tab--active" : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="menu-section__grid">
            {menuItems[activeTab].map((item, i) => (
              <div
                key={item.name}
                className="menu-item"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="menu-item__left">
                  <span className="menu-item__emoji">
                    {item.emoji}
                  </span>

                  <div>
                    <h4 className="menu-item__name">
                      {item.name}
                    </h4>

                    <span className="menu-item__origin">
                      📍 {item.origin}
                    </span>
                  </div>
                </div>

                <div className="menu-item__right">
                  <span className="menu-item__cal">
                    🔥 {item.cal}
                  </span>

                  <span className="menu-item__price">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}