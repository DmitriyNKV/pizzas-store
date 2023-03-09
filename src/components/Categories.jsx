import React from "react";
function Categories(props) {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((categotyName, i) => (
          <li
            key={i}
            onClick={() => props.onClickCategory(i)}
            className={props.value === i ? "active" : ""}
          >
            {categotyName}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;
