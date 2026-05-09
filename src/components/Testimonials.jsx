import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Aisha Patel",
    role: "Food Blogger",
    avatar: "👩🏽‍🍳",
    quote:
      "SavourNest is my go-to for discovering authentic dish names with their true origins. The depth of content is remarkable.",
    rating: 5,
    location: "Mumbai, India",
  },

  {
    name: "Marco Bianchi",
    role: "Culinary Student",
    avatar: "👨🏻‍🍳",
    quote:
      "As a culinary student, having a reference with 2,400+ dish names at my fingertips is absolutely invaluable.",
    rating: 5,
    location: "Rome, Italy",
  },

  {
    name: "Sarah Kim",
    role: "Home Cook",
    avatar: "👩🏻",
    quote:
      "I've expanded my cooking repertoire so much thanks to this site. The cuisine categories make discovery effortless.",
    rating: 5,
    location: "Seoul, Korea",
  },

  {
    name: "James Okafor",
    role: "Restaurant Owner",
    avatar: "👨🏿‍💼",
    quote:
      "An essential resource. The accuracy of origins and the breadth of world cuisines covered is truly impressive.",
    rating: 5,
    location: "Lagos, Nigeria",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setActive((p) => (p + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(t);
  }, []);

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
            max-width:1100px;
            margin:auto;
          }

          .testimonials{
            padding:100px 0;
            position:relative;
            overflow:hidden;
          }

          .testimonials__header{
            text-align:center;
            margin-bottom:60px;
          }

          .section-label{
            display:inline-block;
            color:#ff7b54;
            text-transform:uppercase;
            letter-spacing:2px;
            font-size:14px;
            margin-bottom:14px;
          }

          .section-title{
            font-size:3rem;
            font-weight:800;
          }

          .testimonials__content{
            position:relative;
          }

          .testimonials__main{
            position:relative;
            min-height:320px;
          }

          .testimonial-card{
            position:absolute;
            inset:0;
            background:#171717;
            border:1px solid rgba(255,255,255,0.08);
            border-radius:28px;
            padding:45px;
            opacity:0;
            transform:translateY(30px) scale(0.96);
            transition:0.5s ease;
            pointer-events:none;
          }

          .testimonial-card--active{
            opacity:1;
            transform:translateY(0) scale(1);
            pointer-events:auto;
          }

          .testimonial-card:hover{
            border-color:#ff7b54;
            box-shadow:0 15px 40px rgba(0,0,0,0.4);
          }

          .testimonial-card__quote{
            font-size:1.25rem;
            line-height:1.9;
            color:#f3f3f3;
            margin-bottom:30px;
            position:relative;
          }

          .testimonial-card__mark{
            font-size:5rem;
            color:#ff7b54;
            line-height:1;
            display:block;
            margin-bottom:10px;
          }

          .testimonial-card__stars{
            color:#ffb347;
            font-size:1.3rem;
            margin-bottom:30px;
            letter-spacing:4px;
          }

          .testimonial-card__author{
            display:flex;
            align-items:center;
            gap:18px;
          }

          .testimonial-card__avatar{
            width:70px;
            height:70px;
            border-radius:50%;
            background:#242424;
            display:flex;
            align-items:center;
            justify-content:center;
            font-size:2rem;
            border:1px solid rgba(255,255,255,0.08);
          }

          .testimonial-card__author strong{
            display:block;
            font-size:1.1rem;
            margin-bottom:6px;
          }

          .testimonial-card__author span{
            color:#bdbdbd;
            font-size:14px;
          }

          .testimonials__dots{
            display:flex;
            justify-content:center;
            gap:12px;
            margin-top:40px;
          }

          .testimonials__dot{
            width:14px;
            height:14px;
            border-radius:50%;
            border:none;
            background:#3a3a3a;
            cursor:pointer;
            transition:0.3s;
          }

          .testimonials__dot--active{
            background:#ff7b54;
            transform:scale(1.2);
          }

          .testimonials__thumbs{
            display:flex;
            justify-content:center;
            gap:16px;
            margin-top:35px;
            flex-wrap:wrap;
          }

          .testimonials__thumb{
            width:60px;
            height:60px;
            border-radius:50%;
            border:none;
            background:#1d1d1d;
            cursor:pointer;
            transition:0.3s;
            font-size:1.8rem;
            display:flex;
            align-items:center;
            justify-content:center;
            border:2px solid transparent;
          }

          .testimonials__thumb:hover{
            transform:translateY(-5px);
          }

          .testimonials__thumb--active{
            border-color:#ff7b54;
            background:#252525;
            transform:scale(1.1);
          }

          @media(max-width:768px){

            .testimonials{
              padding:80px 0;
            }

            .section-title{
              font-size:2.2rem;
            }

            .testimonial-card{
              padding:30px;
            }

            .testimonial-card__quote{
              font-size:1.05rem;
              line-height:1.7;
            }

            .testimonial-card__avatar{
              width:60px;
              height:60px;
              font-size:1.7rem;
            }

            .testimonials__main{
              min-height:380px;
            }
          }

          @media(max-width:500px){

            .section-title{
              font-size:1.9rem;
            }

            .testimonial-card{
              padding:24px;
              border-radius:22px;
            }

            .testimonial-card__quote{
              font-size:1rem;
            }

            .testimonial-card__mark{
              font-size:4rem;
            }

            .testimonials__main{
              min-height:430px;
            }
          }
        `}
      </style>

      <section className="testimonials" id="reviews">
        <div className="container">

          <div className="testimonials__header">
            <span className="section-label">
              What People Say
            </span>

            <h2 className="section-title">
              Loved by Food Lovers
            </h2>
          </div>

          <div className="testimonials__content">

            <div className="testimonials__main">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`testimonial-card ${
                    i === active
                      ? "testimonial-card--active"
                      : ""
                  }`}
                >
                  <div className="testimonial-card__quote">
                    <span className="testimonial-card__mark">
                      "
                    </span>

                    {t.quote}
                  </div>

                  <div className="testimonial-card__stars">
                    {"★".repeat(t.rating)}
                  </div>

                  <div className="testimonial-card__author">

                    <span className="testimonial-card__avatar">
                      {t.avatar}
                    </span>

                    <div>
                      <strong>{t.name}</strong>

                      <span>
                        {t.role} · {t.location}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${
                    i === active
                      ? "testimonials__dot--active"
                      : ""
                  }`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            <div className="testimonials__thumbs">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  className={`testimonials__thumb ${
                    i === active
                      ? "testimonials__thumb--active"
                      : ""
                  }`}
                  onClick={() => setActive(i)}
                >
                  <span>{t.avatar}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}