import React from "react";
import Ckeditor from "../Ckeditor";
import Menu from "./Menu";
const StartWriting = () => {
  return (
    <>
      {/* <Header /> */}
      <Menu />
      <hr />
      {/* <div className="container">
        <h3 className="text-capitalize text-center">
          write your confession 100% anonymously
        </h3>
      </div> */}
      <div className="container">
        <div>
          <form>
            <Ckeditor />
          </form>
        </div>
      </div>
    </>
  );
};
export default StartWriting;
