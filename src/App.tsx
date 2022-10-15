import { useEffect, useRef, useState } from "react";
import dollar from "./assets/dollar.svg";
import user from "./assets/user-solid.svg";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = (e: any) => {
    setTip(e.target.value);

    const btn05: any = document.getElementById("btn05");
    const btn10: any = document.getElementById("btn10");
    const btn15: any = document.getElementById("btn15");
    const btn20: any = document.getElementById("btn20");
    const btn25: any = document.getElementById("btn25");
    const btn30: any = document.getElementById("btn30");

    if (e.target === btn05) {
      if (!btn05.classList.contains("active")) {
        btn05.className = "active";
      }
      btn10.className = "";
      btn15.className = "";
      btn20.className = "";
      btn25.className = "";
      btn30.className = "";
      return;
    }

    if (e.target === btn10) {
      if (!btn10.classList.contains("active")) {
        btn10.className = "active";
      }
      btn05.className = "";
      btn15.className = "";
      btn20.className = "";
      btn25.className = "";
      btn30.className = "";
      return;
    }

    if (e.target === btn15) {
      if (!btn15.classList.contains("active")) {
        btn15.className = "active";
      }
      btn05.className = "";
      btn10.className = "";
      btn20.className = "";
      btn25.className = "";
      btn30.className = "";
      return;
    }

    if (e.target === btn20) {
      if (!btn20.classList.contains("active")) {
        btn20.className = "active";
      }
      btn05.className = "";
      btn10.className = "";
      btn15.className = "";
      btn25.className = "";
      btn30.className = "";
      return;
    }

    if (e.target === btn25) {
      if (!btn25.classList.contains("active")) {
        btn25.className = "active";
      }
      btn05.className = "";
      btn10.className = "";
      btn15.className = "";
      btn20.className = "";
      btn30.className = "";
      return;
    }

    if (e.target === btn30) {
      if (!btn30.classList.contains("active")) {
        btn30.className = "active";
      }
      btn05.className = "";
      btn10.className = "";
      btn15.className = "";
      btn20.className = "";
      btn25.className = "";
      return;
    }
  };

  const handleReset = () => {
    setBill(0);
    setPeople(1);
    setTip(0);
    setTipAmount(0);
    setTotal(0);
    const inputBill: any = document.getElementById("bill");
    const inputPeople: any = document.getElementById("people");
    inputBill.value = "";
    inputPeople.value = "";

    const btn05: any = document.getElementById("btn05");
    const btn10: any = document.getElementById("btn10");
    const btn15: any = document.getElementById("btn15");
    const btn20: any = document.getElementById("btn20");
    const btn25: any = document.getElementById("btn25");
    const btn30: any = document.getElementById("btn30");

    btn05.className = "";
    btn10.className = "";
    btn15.className = "";
    btn20.className = "";
    btn25.className = "";
    btn30.className = "";
  };

  useEffect(() => {
    const nBill: number = Number(bill);
    const nTip: number = Number(tip);
    const nPeople: number = Number(people);

    const result: number = nBill * nTip;
    const sum: number = result + nBill;
    const tipAmountXPerson: number = result / nPeople;
    const totalxPerson: number = sum / nPeople;

    setTipAmount(Number(tipAmountXPerson.toFixed(2)));
    setTotal(Number(totalxPerson.toFixed(2)));
  }, [bill, people, tip]);

  return (
    <main className="container">
      <section className="primary">
        <label htmlFor="">bill</label>
        <article className="input-div">
          <img src={dollar} width="10" className="dollar-icon" />
          <input
            type="text"
            placeholder="0.0"
            autoFocus
            name="bill"
            id="bill"
            onChange={(e: any) => setBill(e.target.value)}
          />
        </article>

        <label htmlFor="">Select tip %</label>
        <article className="buttons">
          <button id="btn05" value="0.05" onClick={handleClick}>
            5%
          </button>
          <button id="btn10" value="0.10" onClick={handleClick}>
            10%
          </button>
          <button id="btn15" value="0.15" onClick={handleClick}>
            15%
          </button>
          <button id="btn20" value="0.20" onClick={handleClick}>
            20%
          </button>
          <button id="btn25" value="0.25" onClick={handleClick}>
            25%
          </button>
          <button id="btn30" value="0.30" onClick={handleClick}>
            30%
          </button>
        </article>

        <label htmlFor="">Number of people</label>
        <article className="input-div">
          <img src={user} width="12" />
          <input
            type="text"
            placeholder="0"
            name="people"
            id="people"
            onChange={(e: any) => setPeople(e.target.value)}
          />
        </article>
      </section>

      <section className="secondary">
        <article>
          <div>
            <p className="title"> Tip amount</p>
            <small>/ person</small>
          </div>
          <div>
            <p className="price">$ {tipAmount}</p>
          </div>
        </article>

        <article>
          <div>
            <p className="title">Total</p>
            <small>/ person</small>
          </div>
          <div>
            <p className="price">$ {total}</p>
          </div>
        </article>
        <button onClick={handleReset}>RESET</button>
      </section>
    </main>
  );
}

export default App;
