import React from "react";
import { meals } from "./meals";
import { useDispatch } from "react-redux";

const CaloriesBlock = () => {
  const dispatch = useDispatch();

  const submitTable = (e) => {
    const partOfMeal = e.target.id;

    const amountsInputs = document.querySelectorAll(
      `.${partOfMeal}_input_amounts`
    );
    const mealInputs = document.querySelectorAll(`.${partOfMeal}_input_meal`);

    console.log(amountsInputs);
  };

  return (
    <div className="my-6">
      {meals.map((el, index) => {
        return (
          <div key={index}>
            <h2>{el}</h2>

            <form method="post" id={`${el}`} onSubmit={(e) => submitTable(e)}>
              <div>
                <input
                  type="number"
                  placeholder="enter amount"
                  className={`${el}_input_amounts`}
                />
                <input
                  type="text"
                  placeholder="enter meal"
                  className={`${el}_input_meal`}
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default CaloriesBlock;
