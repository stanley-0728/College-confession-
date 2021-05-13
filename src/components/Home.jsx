import React from "react";
// import Header from "../Header";
import Slide from "../Slide";
import Card from "../Card";
import Menu from "./Menu";
const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Menu />
      </main>

      <br />
      <Slide />
      <hr />
      <div className="container">
        <h5 className="text-capitalize ">Recent Posts</h5>
      </div>
      <Card />
      <br />
      <Card />
      <br />
      <Card />
      <br />
    </>
  );
};
export default Home;
