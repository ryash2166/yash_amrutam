import React from "react";
import MainTitle from "../components/MainTitle";
import AllFilter from "../components/AllFilter";
import AddedFilter from "../components/AddedFilter";
import Card from "../components/common/Card";
import CardGrid from "../components/CardList";

const Home = () => {
  return (
    <div className="">
      <MainTitle />
      <AllFilter />
      <AddedFilter />
      <CardGrid />
    </div>
  );
};

export default Home;
