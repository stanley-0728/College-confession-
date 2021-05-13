import React from "react";
import Ckeditor from "../Ckeditor";
import Header from "../Header";
const StartWriting = () => {
  return (
    <>
      <Header />
      <br />
      <hr />
      {/* <div className="container">
        <h3 className="text-capitalize text-center">
          write your confession 100% anonymously
        </h3>
      </div> */}
      <div className="container">
        <div>
          <form>
            {/* <div class="form-group">
              <div className="card-body " id="card-style">
                <label for="formGroupExampleInput">
                  <h5>Title</h5>
                </label>
              </div>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Title"
              />
            </div> */}
            {/* <div class="form-group">
              <div className="card-body " id="card-style">
                <label for="exampleFormControlTextarea1">
                  <h5>Confession</h5>
                </label>
              </div>

              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Start writing your confession. . . "
              ></textarea>
            </div> */}

            <Ckeditor />
          </form>
        </div>
      </div>
    </>
  );
};
export default StartWriting;
