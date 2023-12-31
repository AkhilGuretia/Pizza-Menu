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

export default function App() {

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
            <h1>FAST REACT PIZZA CO.</h1>
        </header>
    );
}

function Menu() {
    const pizzas = pizzaData;
    const isValid = pizzas.length > 0;

    return (
        <main className="menu">
            <h2>Our menu</h2>

            {isValid ? (
                <>
                    <p>
                        Authentic Italian cousine. 6 creative dishes to choose from. All
                        from our stone oven, all organic, all delicious :)
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => (
                            <Pizza pizzaObj={pizza} key={pizza.name} />
                        ))}
                    </ul>
                </>
            ) : (
                <p>We're still working on our menu, Please come back later :)</p>
            )}

            {/* <Pizza
          name="Focaccia"
          ingredients="Bread with italian olive oil and rosemary"
          price={6}
          photoName="pizzas/focaccia.jpg"
        />
        <Pizza
          name="Pizza Margherita"
          ingredients="Tomato and mozarella"
          price={10}
          photoName="pizzas/margherita.jpg"
        />
        <Pizza
          name="Pizza Spinaci"
          ingredients="Tomato, mozarella, spinach, and ricotta cheese"
          price={6}
          photoName="pizzas/spinaci.jpg"
        />
        <Pizza
          name="Pizza Funghi"
          ingredients="Tomato, mozarella, mushrooms, and onion"
          price={12}
          photoName="pizzas/funghi.jpg"
        />
        <Pizza
          name="Pizza Salamino"
          ingredients="Tomato, mozarella, and pepperoni"
          price={15}
          photoName="pizzas/salamino.jpg"
        />
        <Pizza
          name="Pizza Prosciutto"
          ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
          price={18}
          photoName="pizzas/prosciutto.jpg"
        /> */}
        </main>
    );
}

function Pizza({ pizzaObj }) {

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    );
}

function Footer() {
    const time = new Date().getHours();
    const openHour = 10;
    const closeHour = 22;
    const isOpen = time >= openHour && time <= closeHour;
    // console.log(time);

    return (
        <footer className="footer">
            {isOpen ? (
                <Order openHour={openHour} closeHour={closeHour} />
            ) : (
                <p>
                    OOPS! we're closed now :/, please come visit us between 12:00 and
                    22:00 :)
                </p>
            )}
        </footer>
    );
}

const Order = ({ openHour, closeHour }) => {
    return (
        <div className="order">
            <p>
                Yay! We're currently open :), we're happy to serve you b/w {openHour}:00
                and {closeHour}:00
            </p>
            <button className="btn">order now</button>
        </div>
    );
};