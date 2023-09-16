import React from "react";

const Carts = ({ items, credit, totalCredit, amount }) => {
  //   console.log(items);
  return (
    <div className="bg-slate-200 p-3 rounded-md mt-2">
      <div className="text-lg font-medium text-blue-600">
        Credit Hour Remaining {totalCredit} hrs
      </div>
      <hr />
      <div>
        <h5 className="text-lg font-medium">Course Name</h5>
        <h5>
          {items.map((item, idx) => (
            <p key={idx}>
              {idx + 1}. {item.course_name}
            </p>
          ))}
        </h5>
      </div>
      <hr />
      <h4>Total Credit Hour:{credit} Hr</h4>
      <hr />
      <h5>Total Price: {amount} USD</h5>
    </div>
  );
};

export default Carts;
