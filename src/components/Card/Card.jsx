import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Card = ({ card, handleCart }) => {
  const {
    course_credit_hours,
    course_description,
    course_name,
    course_price,
    image,
  } = card;
  return (
    <div>
      <div className="border w-64 h-96 p-3 rounded-md m-2">
        <img className="rounded-md" src={image} alt="" />
        <h2 className="text-xl font-medium">{course_name}</h2>
        <p className="">{course_description}</p>
        <div>
          <p>Price: {course_price} $</p>
          <p>Credit: {course_credit_hours}Hr</p>
        </div>
        <button
          onClick={() => handleCart(card)}
          className="bg-blue-800 p-2 w-full rounded-xl text-white"
        >
          Select
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Card;
