import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");

    setTimeout(() => setStatus("idle"), 4000);
  };

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

          .container{
            width:90%;
            max-width:1200px;
            margin:auto;
          }

          .newsletter{
            padding:100px 0;
          }

          .newsletter__box{
            position:relative;
            overflow:hidden;
            background:linear-gradient(135deg,#1b1b1b,#111);
            border:1px solid rgba(255,255,255,0.08);
            border-radius:35px;
            padding:80px 40px;
            text-align:center;
          }

          .newsletter__box::before{
            content:"";
            position:absolute;
            inset:0;
            background:
              radial-gradient(circle at top left, rgba(255,123,84,0.12), transparent 40%),
              radial-gradient(circle at bottom right, rgba(255,179,71,0.12), transparent 40%);
            pointer-events:none;
          }

          .newsletter__content{
            position:relative;
            z-index:2;
            max-width:700px;
            margin:auto;
          }

          .section-label{
            display:inline-block;
            color:#ff7b54;
            font-size:14px;
            text-transform:uppercase;
            letter-spacing:2px;
            margin-bottom:18px;
          }

          .newsletter__title{
            font-size:4rem;
            line-height:1.1;
            margin-bottom:24px;
            font-weight:800;
          }

          .newsletter__title em{
            color:#ff7b54;
            font-style:italic;
          }

          .newsletter__desc{
            color:#cfcfcf;
            font-size:1.1rem;
            line-height:1.8;
            max-width:600px;
            margin:auto auto 40px;
          }

          .newsletter__form{
            max-width:560px;
            margin:auto;
          }

          .newsletter__input-wrap{
            display:flex;
            align-items:center;
            background:#1f1f1f;
            border:1px solid rgba(255,255,255,0.08);
            border-radius:18px;
            padding:0 18px;
            margin-bottom:16px;
            transition:0.3s;
          }

          .newsletter__input-wrap:focus-within{
            border-color:#ff7b54;
            box-shadow:0 0 0 4px rgba(255,123,84,0.15);
          }

          .newsletter__input-wrap--error{
            border-color:#ef4444;
          }

          .newsletter__input-icon{
            font-size:1.1rem;
            margin-right:12px;
          }

          .newsletter__input{
            flex:1;
            background:transparent;
            border:none;
            outline:none;
            color:white;
            padding:18px 0;
            font-size:1rem;
          }

          .newsletter__input::placeholder{
            color:#8f8f8f;
          }

          .newsletter__error{
            color:#ef4444;
            text-align:left;
            margin-bottom:16px;
            font-size:14px;
          }

          .btn-primary{
            width:100%;
            border:none;
            background:#ff7b54;
            color:white;
            padding:18px;
            border-radius:18px;
            font-size:1rem;
            font-weight:700;
            cursor:pointer;
            transition:0.3s;
          }

          .btn-primary:hover{
            transform:translateY(-3px);
            background:#ff8b66;
          }

          .newsletter__success{
            background:rgba(34,197,94,0.12);
            border:1px solid rgba(34,197,94,0.3);
            border-radius:20px;
            padding:28px;
            display:flex;
            flex-direction:column;
            align-items:center;
            gap:12px;
            max-width:500px;
            margin:0 auto 20px;
          }

          .newsletter__success span{
            font-size:2.5rem;
          }

          .newsletter__success p{
            color:#d7ffd7;
            font-size:1rem;
          }

          .newsletter__fine{
            color:#8f8f8f;
            font-size:14px;
            margin-top:24px;
          }

          .newsletter__deco{
            position:absolute;
            font-size:7rem;
            opacity:0.08;
            pointer-events:none;
            animation:float 6s ease-in-out infinite;
          }

          .newsletter__deco--l{
            top:20px;
            left:20px;
          }

          .newsletter__deco--r{
            bottom:20px;
            right:20px;
            animation-delay:2s;
          }

          @keyframes float{
            0%,100%{
              transform:translateY(0px) rotate(0deg);
            }

            50%{
              transform:translateY(-15px) rotate(6deg);
            }
          }

          @media(max-width:768px){

            .newsletter{
              padding:80px 0;
            }

            .newsletter__box{
              padding:60px 24px;
              border-radius:28px;
            }

            .newsletter__title{
              font-size:2.8rem;
            }

            .newsletter__desc{
              font-size:1rem;
            }

            .newsletter__deco{
              font-size:5rem;
            }
          }

          @media(max-width:500px){

            .newsletter__title{
              font-size:2.2rem;
            }

            .newsletter__input{
              font-size:0.95rem;
            }

            .btn-primary{
              padding:16px;
            }

            .newsletter__deco{
              display:none;
            }
          }
        `}
      </style>

      <section className="newsletter" id="contact">
        <div className="container">

          <div className="newsletter__box">

            <div className="newsletter__deco newsletter__deco--l">
              🍕
            </div>

            <div className="newsletter__deco newsletter__deco--r">
              🍜
            </div>

            <div className="newsletter__content">

              <span
                className="section-label"
                style={{ textAlign: "center" }}
              >
                Stay Updated
              </span>

              <h2 className="newsletter__title">
                Weekly Dish
                <br />
                <em>Discoveries</em>
              </h2>

              <p className="newsletter__desc">
                Get 5 new iconic food names with origins,
                history, and recipes delivered to your inbox
                every Monday.
              </p>

              {status === "success" ? (

                <div className="newsletter__success">
                  <span>✅</span>

                  <p>
                    You're in! Watch your inbox next Monday.
                  </p>
                </div>

              ) : (

                <form
                  className="newsletter__form"
                  onSubmit={handleSubmit}
                  noValidate
                >

                  <div
                    className={`newsletter__input-wrap ${
                      status === "error"
                        ? "newsletter__input-wrap--error"
                        : ""
                    }`}
                  >

                    <span className="newsletter__input-icon">
                      ✉️
                    </span>

                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setStatus("idle");
                      }}
                      className="newsletter__input"
                    />
                  </div>

                  {status === "error" && (
                    <p className="newsletter__error">
                      Please enter a valid email.
                    </p>
                  )}

                  <button
                    type="submit"
                    className="btn-primary newsletter__btn"
                  >
                    Subscribe Free 🚀
                  </button>

                </form>
              )}

              <p className="newsletter__fine">
                No spam. Unsubscribe anytime.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}