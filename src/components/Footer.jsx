import React from "react";

const footerLinks = {
  Explore: [
    "All Dishes",
    "By Cuisine",
    "By Country",
    "By Ingredient",
    "Trending Now",
  ],

  Cuisines: [
    "Italian",
    "Asian",
    "Mexican",
    "Indian",
    "French",
    "Seafood",
  ],

  Company: [
    "About Us",
    "Blog",
    "Careers",
    "Press Kit",
    "Contact",
  ],

  Legal: [
    "Privacy Policy",
    "Terms of Use",
    "Cookie Policy",
    "Accessibility",
  ],
};

const socials = [
  { label: "Instagram", icon: "📸" },
  { label: "YouTube", icon: "▶️" },
  { label: "Twitter", icon: "🐦" },
  { label: "Pinterest", icon: "📌" },
];

export default function Footer() {
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
            color:white;
            font-family:Arial, sans-serif;
          }

          a{
            text-decoration:none;
          }

          ul{
            list-style:none;
          }

          .container{
            width:90%;
            max-width:1200px;
            margin:auto;
          }

          .footer{
            background:#111;
            padding:90px 0 30px;
            border-top:1px solid rgba(255,255,255,0.08);
            position:relative;
            overflow:hidden;
          }

          .footer::before{
            content:"";
            position:absolute;
            top:-150px;
            right:-150px;
            width:350px;
            height:350px;
            background:radial-gradient(circle, rgba(255,123,84,0.12), transparent 70%);
            pointer-events:none;
          }

          .footer__top{
            display:grid;
            grid-template-columns:2fr 1fr 1fr 1fr 1fr;
            gap:50px;
            margin-bottom:70px;
          }

          .footer__brand{
            max-width:320px;
          }

          .footer__logo{
            display:flex;
            align-items:center;
            gap:12px;
            font-size:2rem;
            font-weight:800;
            color:white;
            margin-bottom:22px;
          }

          .footer__logo span:first-child{
            font-size:2.2rem;
          }

          .footer__logo em{
            color:#ff7b54;
            font-style:italic;
          }

          .footer__tagline{
            color:#bdbdbd;
            line-height:1.8;
            margin-bottom:28px;
            font-size:15px;
          }

          .footer__socials{
            display:flex;
            gap:14px;
            flex-wrap:wrap;
          }

          .footer__social{
            width:50px;
            height:50px;
            border-radius:50%;
            background:#1c1c1c;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:1.3rem;
            transition:0.3s;
            border:1px solid rgba(255,255,255,0.06);
          }

          .footer__social:hover{
            transform:translateY(-5px) scale(1.05);
            background:#ff7b54;
          }

          .footer__col-title{
            font-size:1.1rem;
            margin-bottom:24px;
            color:white;
            font-weight:700;
          }

          .footer__col-list{
            display:flex;
            flex-direction:column;
            gap:14px;
          }

          .footer__link{
            color:#bdbdbd;
            font-size:15px;
            transition:0.3s;
            position:relative;
          }

          .footer__link:hover{
            color:#ff7b54;
            padding-left:6px;
          }

          .footer__bottom{
            border-top:1px solid rgba(255,255,255,0.08);
            padding-top:28px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:20px;
            flex-wrap:wrap;
          }

          .footer__copy,
          .footer__made{
            color:#8f8f8f;
            font-size:14px;
          }

          .footer__made{
            text-align:right;
          }

          @media(max-width:992px){

            .footer__top{
              grid-template-columns:1fr 1fr;
              gap:40px;
            }

            .footer__brand{
              grid-column:1 / -1;
              max-width:100%;
            }
          }

          @media(max-width:600px){

            .footer{
              padding:70px 0 25px;
            }

            .footer__top{
              grid-template-columns:1fr;
              gap:35px;
              margin-bottom:50px;
            }

            .footer__logo{
              font-size:1.8rem;
            }

            .footer__bottom{
              flex-direction:column;
              text-align:center;
            }

            .footer__made{
              text-align:center;
            }

            .footer__social{
              width:45px;
              height:45px;
            }
          }
        `}
      </style>

      <footer className="footer">
        <div className="container">

          <div className="footer__top">

            {/* Brand */}
            <div className="footer__brand">

              <a href="#home" className="footer__logo">
                <span>🍽</span>

                <span>
                  Savour<em>Nest</em>
                </span>
              </a>

              <p className="footer__tagline">
                The world's most complete database of food
                names, origins, and culinary stories.
              </p>

              <div className="footer__socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    className="footer__social"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(
              ([title, links]) => (
                <div key={title} className="footer__col">

                  <h4 className="footer__col-title">
                    {title}
                  </h4>

                  <ul className="footer__col-list">
                    {links.map((l) => (
                      <li key={l}>
                        <a href="#" className="footer__link">
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>

                </div>
              )
            )}
          </div>

          <div className="footer__bottom">

            <p className="footer__copy">
              © {new Date().getFullYear()} SavourNest.
              All rights reserved.
            </p>

            <p className="footer__made">
              Made with ❤️ for food lovers worldwide 🌍
            </p>

          </div>
        </div>
      </footer>
    </>
  );
}