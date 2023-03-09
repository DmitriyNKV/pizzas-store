import React, { useState, useEffect } from "react";

import axios from "axios";
import Sort from "../components/Sort";
import Categories from "../components/Categories";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import Skeleton from "../components/pizzaBlock/Skeleton";

import { SearchContext } from "../App";
import { useSelector, useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filterSlice);

  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  const [numberPage, setNumberPage] = useState(1);
  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  useEffect(() => {
    setLoading(true);

    axios
      .get(
        `https://63c577a0f80fabd877e94971.mockapi.io/pizzas?page=${numberPage}&${
          categoryId > 0 ? `category=${categoryId}` : ""
        }&sortBy=${sort.sort}&order=desc`
      )
      .then(
        (res) => {
          setPizzas(res.data);
          setLoading(false);
        },
        [categoryId, sort.sort, searchValue]
      );

    window.scroll(0, 0);
  }, [categoryId, sort, searchValue, numberPage]);

  const skeleton = [...new Array(6)].map((id) => <Skeleton key={id} />);
  const pizzasItems = pizzas
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      <PizzaBlock
        key={obj.id}
        id={obj.id}
        title={obj.title}
        price={obj.price}
        image={obj.imageUrl}
        sizes={obj.sizes}
        types={obj.types}
      />
    ));
  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={onClickCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{loading ? skeleton : pizzasItems}</div>
    </div>
  );
};

export default Home;
