import React, { createContext, useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header";
import Cart from "../src/pages/Cart";
import Home from "./pages/Home";
import Empty from "./pages/Empty";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = useState("");
  //const count = useSelector((state) => state.counter.value);
  //const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path="" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Empty />} />
        </Routes>
      </SearchContext.Provider>

      <div className="content"></div>
    </div>
  );
}

export default App;
