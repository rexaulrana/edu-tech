import { useState } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import Carts from "../Carts/Carts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [item, setItem] = useState([]);
  const [credit, setCredit] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const handleCart = (card) => {
    // only one card will show
    const isExist = item.find((name) => name.id === card.id);
    let credit = card.course_credit_hours;
    if (isExist) {
      return toast(" You have already added this course");
    } else {
      // course name
      const newItem = [...item, card];
      setItem(newItem);

      // credit
      {
        item.forEach((hours) => (credit = credit + hours.course_credit_hours));
      }
      setCredit(credit);
    }
  };
  return (
    <div>
      <div className="flex justify-between ml-3 mr-3">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Card handleCart={handleCart} key={card.id} card={card}></Card>
          ))}
        </div>
        <div>
          <Carts key={item.id} items={item} credit={credit}></Carts>
        </div>
      </div>
    </div>
  );
};

export default Cards;
