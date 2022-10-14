import { useState } from "react";
import dollar from "./assets/dollar.svg";
import user from "./assets/user-solid.svg";
import "./App.css";

function App() {
  return (
    <main className="container">
      <section className="primary">
        <label htmlFor="">bill</label>
        <article className="input-div">
          <img src={dollar} width="10" className="dollar-icon" />
          <input type="text" placeholder="0.0" />
        </article>

        <label htmlFor="">Select tip %</label>
        <article className="buttons">
          <button>5%</button>
          <button>10%</button>
          <button>15%</button>
          <button>20%</button>
          <button>25%</button>
          <button>30%</button>
        </article>

        <label htmlFor="">Number of people</label>
        <article className="input-div">
          <img src={user} width="12" alt="" />
          <input type="text" placeholder="0" />
        </article>
      </section>

      <section className="secondary">
        <article>
          <div>
            <p className="title"> Tip amount</p>
            <small>/ person</small>
          </div>
          <div>
            <p className="price">$ 40</p>
          </div>
        </article>

        <article>
          <div>
            <p className="title">Total</p>
            <small>/ person</small>
          </div>
          <div>
            <p className="price">$ 40</p>
          </div>
        </article>
        <button>Reset</button>
      </section>
    </main>
  );
}

export default App;
