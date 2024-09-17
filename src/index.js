import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>
        Fast React Pizza Co.
      </h1>
      ;
    </header>
  );
}

function Menu() {

  const numPizzas = pizzaData.length;


  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas>0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaobj={pizza} key={pizza.name} />
          ))}
        </ul>
      ):(<p>We're still working on our menu Please come back later!</p>)}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients= "Tomato, mozarella, mushrooms, and onion"
        photoName= "pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />
      <h3>{props.pizzaobj.name}</h3>
      <p>{props.pizzaobj.ingredients}</p>
      <span>{props.pizzaobj.price}</span>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 0;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? < Order closeHour={closeHour} /> : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

function Order(props){
  return (
    <div className="order">
      <p>We are open until {props.closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
