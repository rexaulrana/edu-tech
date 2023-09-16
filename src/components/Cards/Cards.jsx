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
  const [totalCredit, setTotalCredit] = useState(20);
  const [amount, setAmount] = useState(0);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  const handleCart = (card) => {
    // only one card will show
    const isExist = item.find((name) => name.id === card.id);
    let credit = card.course_credit_hours;
    let totalAmount = card.course_price;
    if (isExist) {
      return toast(" You have already added this course");
    } else {
      // course name
      const newItem = [...item, card];

      // credit
      {
        item.forEach((hours) => (credit = credit + hours.course_credit_hours));
      }

      let totalCredit = 20;
      const currentCredit = totalCredit - credit;
      if (currentCredit < 0) {
        return toast("You have not enough Credit");
      }
      setTotalCredit(currentCredit);
      {
        item.forEach(
          (price) => (totalAmount = totalAmount + price.course_price)
        );
      }
      setItem(newItem);
      setCredit(credit);
      setAmount(totalAmount);
    }
  };
  return (
    <div>
      <div className="flex justify-between item-center gap-5 ">
        <div className="grid  gap-3 md:grid-cols-1 lg:grid-cols-3">
          {cards.map((card) => (
            <Card handleCart={handleCart} key={card.id} card={card}></Card>
          ))}
        </div>
        <div>
          <Carts
            key={item.id}
            items={item}
            credit={credit}
            totalCredit={totalCredit}
            amount={amount}
          ></Carts>
        </div>
      </div>
    </div>
  );
};

export default Cards;
