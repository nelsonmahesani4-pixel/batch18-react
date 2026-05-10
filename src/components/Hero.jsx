import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
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
            background:#0d0d0d;
            color:white;
            font-family:Arial, sans-serif;
          }

          a{
            text-decoration:none;
          }

          .container{
            width:90%;
            max-width:1200px;
            margin:auto;
          }

          .hero{
            min-height:100vh;
            position:relative;
            overflow:hidden;
            display:flex;
            align-items:center;
            padding:120px 0 80px;
          }

          .hero__bg{
            position:absolute;
            inset:0;
            z-index:-1;
          }

          .hero__orb{
            position:absolute;
            border-radius:50%;
            filter:blur(90px);
            opacity:0.4;
          }

          .hero__orb--1{
            width:300px;
            height:300px;
            background:#ff7b54;
            top:10%;
            left:5%;
          }

          .hero__orb--2{
            width:350px;
            height:350px;
            background:#ffb347;
            bottom:10%;
            right:10%;
          }

          .hero__orb--3{
            width:250px;
            height:250px;
            background:#ff4d6d;
            top:40%;
            right:30%;
          }

          .hero__grid{
            position:absolute;
            inset:0;
            background-image:
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size:40px 40px;
          }

          .hero__inner{
            display:grid;
            grid-template-columns:1fr 1fr;
            align-items:center;
            gap:60px;
          }

          .section-label{
            display:inline-block;
            color:#ff7b54;
            font-size:14px;
            margin-bottom:20px;
            letter-spacing:1px;
          }

          .hero__title{
            font-size:5rem;
            line-height:1.1;
            margin-bottom:25px;
            font-weight:800;
          }

          .hero__title em{
            color:#ff7b54;
            font-style:italic;
          }

          .hero__title-accent{
            color:#ffb347;
          }

          .hero__desc{
            color:#cfcfcf;
            line-height:1.8;
            font-size:1.1rem;
            max-width:550px;
            margin-bottom:35px;
          }

          .hero__actions{
            display:flex;
            gap:18px;
            flex-wrap:wrap;
            margin-bottom:45px;
          }

          .btn-primary,
          .btn-outline{
            padding:14px 28px;
            border-radius:50px;
            font-weight:600;
            transition:0.3s;
            display:inline-flex;
            align-items:center;
            gap:10px;
          }

          .btn-primary{
            background:#ff7b54;
            color:white;
          }

          .btn-primary:hover{
            transform:translateY(-4px);
          }

          .btn-outline{
            border:1px solid rgba(255,255,255,0.2);
            color:white;
            background:transparent;
          }

          .btn-outline:hover{
            background:white;
            color:black;
          }

          .hero__stats{
            display:flex;
            gap:30px;
            flex-wrap:wrap;
          }

          .hero__stat{
            display:flex;
            flex-direction:column;
          }

          .hero__stat strong{
            font-size:1.8rem;
            color:#ffb347;
          }

          .hero__stat span{
            color:#cfcfcf;
            font-size:14px;
          }

          .hero__visual{
            position:relative;
            display:flex;
            justify-content:center;
            align-items:center;
          }

          .hero__plate{
            width:420px;
            height:420px;
            border-radius:50%;
            position:relative;
            display:flex;
            justify-content:center;
            align-items:center;
          }

          .hero__ring{
            position:absolute;
            border-radius:50%;
            border:1px solid rgba(255,255,255,0.12);
          }

          .hero__ring--1{
            width:100%;
            height:100%;
            animation:spin 20s linear infinite;
          }

          .hero__ring--2{
            width:75%;
            height:75%;
            animation:spinReverse 15s linear infinite;
          }

          .hero__emoji-center{
            width:130px;
            height:130px;
            background:#1b1b1b;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:4rem;
            box-shadow:0 0 40px rgba(0,0,0,0.4);
            z-index:2;
          }

          .hero__orb-item{
            position:absolute;
            top:50%;
            left:50%;
            font-size:2rem;
            transform:
              rotate(calc(360deg / var(--total) * var(--i)))
              translate(170px)
              rotate(calc(-360deg / var(--total) * var(--i)));
            animation:float 3s ease-in-out infinite;
          }

          .hero__badge{
            position:absolute;
            background:rgba(255,255,255,0.08);
            backdrop-filter:blur(10px);
            border:1px solid rgba(255,255,255,0.1);
            padding:12px 18px;
            border-radius:16px;
            font-size:14px;
          }

          .hero__badge span{
            margin-right:6px;
          }

          .hero__badge--1{
            top:15%;
            left:0;
          }

          .hero__badge--2{
            bottom:18%;
            right:0;
          }

          .hero__badge--3{
            top:50%;
            right:-20px;
          }

          .hero__scroll-hint{
            position:absolute;
            bottom:20px;
            left:50%;
            transform:translateX(-50%);
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:10px;
            color:#bdbdbd;
            font-size:14px;
          }

          .hero__scroll-arrow{
            width:2px;
            height:35px;
            background:white;
            position:relative;
            animation:bounce 1.5s infinite;
          }

          .hero__scroll-arrow::after{
            content:"";
            position:absolute;
            bottom:0;
            left:50%;
            transform:translateX(-50%) rotate(45deg);
            width:10px;
            height:10px;
            border-right:2px solid white;
            border-bottom:2px solid white;
          }

          @keyframes spin{
            from{
              transform:rotate(0deg);
            }
            to{
              transform:rotate(360deg);
            }
          }

          @keyframes spinReverse{
            from{
              transform:rotate(360deg);
            }
            to{
              transform:rotate(0deg);
            }
          }

          @keyframes float{
            0%,100%{
              transform:
                rotate(calc(360deg / var(--total) * var(--i)))
                translate(170px)
                rotate(calc(-360deg / var(--total) * var(--i)))
                translateY(0);
            }

            50%{
              transform:
                rotate(calc(360deg / var(--total) * var(--i)))
                translate(170px)
                rotate(calc(-360deg / var(--total) * var(--i)))
                translateY(-10px);
            }
          }

          @keyframes bounce{
            0%,100%{
              transform:translateY(0);
            }
            50%{
              transform:translateY(10px);
            }
          }

          @media(max-width:900px){

            .hero__inner{
              grid-template-columns:1fr;
              text-align:center;
            }

            .hero__content{
              order:2;
            }

            .hero__visual{
              order:1;
            }

            .hero__title{
              font-size:3.5rem;
            }

            .hero__desc{
              margin:auto auto 35px;
            }

            .hero__actions{
              justify-content:center;
            }

            .hero__stats{
              justify-content:center;
            }

            .hero__plate{
              width:320px;
              height:320px;
            }

            .hero__orb-item{
              transform:
                rotate(calc(360deg / var(--total) * var(--i)))
                translate(130px)
                rotate(calc(-360deg / var(--total) * var(--i)));
            }
          }

          @media(max-width:600px){

            .hero__title{
              font-size:2.7rem;
            }

            .hero__plate{
              width:260px;
              height:260px;
            }

            .hero__emoji-center{
              width:100px;
              height:100px;
              font-size:3rem;
            }

            .hero__orb-item{
              font-size:1.5rem;
              transform:
                rotate(calc(360deg / var(--total) * var(--i)))
                translate(105px)
                rotate(calc(-360deg / var(--total) * var(--i)));
            }

            .hero__badge{
              display:none;
            }
          }
        `}
      </style>

      <section className="hero" id="home">
        <div className="hero__bg">
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
          <div className="hero__orb hero__orb--3" />
          <div className="hero__grid" />
        </div>

        <div className="container hero__inner">
          <div className="hero__content">
            <span className="section-label">
              🌍 World Cuisine Explorer
            </span>

            

            <h1 className="hero__title">
              Discover the
              <br />
              <em>Art of</em> Food
              <br />
              <span className="hero__title-accent">
                Names
              </span>
            </h1>

            <p className="hero__desc">
              Explore thousands of dishes from every corner of the globe —
              their origins, ingredients, and the stories behind every name
              that makes mouths water.
            </p>

            <div className="hero__actions">
              <a href="#featured" className="btn-primary hero__btn">
                <span>🍴</span> Explore Dishes
              </a>

              <Link to ="/Product ">
              <a href="/Product" className="btn-outline hero__btn">
                Browse Menu
              </a>
              </Link>
            </div>

            <div className="hero__stats">
              {[
                { num: "2,400+", label: "Dish Names" },
                { num: "85+", label: "Cuisines" },
                { num: "120+", label: "Countries" },
              ].map((s) => (
                <div key={s.label} className="hero__stat">
                  <strong>{s.num}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__plate">
              <div className="hero__ring hero__ring--1" />
              <div className="hero__ring hero__ring--2" />

              <div className="hero__emoji-center">
                🍜
              </div>

              <div className="hero__orbiting">
                {["🍕", "🌮", "🍣", "🥘", "🍛", "🥗", "🍔", "🥩"].map(
                  (e, i) => (
                    <span
                      key={i}
                      className="hero__orb-item"
                      style={{ "--i": i, "--total": 8 }}
                    >
                      {e}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="hero__badge hero__badge--1">
              <span>⭐</span> 4.9 Rating
            </div>

            <div className="hero__badge hero__badge--2">
              <span>🔥</span> Trending: Birria
            </div>

            <div className="hero__badge hero__badge--3">
              <span>🌿</span> New: Vegan Picks
            </div>
          </div>
        </div>

        <div className="hero__scroll-hint">
          <span>Scroll to explore</span>
          <div className="hero__scroll-arrow" />
        </div>
      </section>
    </>
  );
}