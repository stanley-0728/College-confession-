import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export class Ckeditor extends Component {
  render() {
    return (
      <>
        <div className="App">
          <div className="container" id="write_anonymous">
            <h3 className="text-center text-capitalize">
              write your confession 100% anonymously
            </h3>
          </div>
          <div className="mt-1"></div>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            onReady={(editor) => {}}
            onChange={(event, editor) => {
              const data = editor.getData();
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />
          {/* <div className="d-flex justify-content-center" id="publish_tag">
            <div class="d-flex  mt-1" id="publish">
              <button
                className="btn btn-outline-success"
                id="search"
                type="submit"
              >
                Publish
              </button>

              <div class="d-flex justify-content-end" id="publish">
                <button
                  className="btn btn-outline-success"
                  id="search"
                  type="submit"
                >
                  Publish
                </button>
              </div>
            </div>
          </div> */}
          <div class="d-flex justify-content-end mt-1" id="publish">
            <button
              className="btn btn-outline-success"
              id="search"
              type="submit"
            >
              Publish
            </button>
          </div>
        </div>
      </>
    );
  }
}

// const Ckeditor = () => {
//   return (
//     <div className="App">
//       <h2 className="text-center text-capitalize">
//         Write your confession 100% anonymously
//       </h2>
//       <div>
//         <CKEditor
//           id="ckeditor_style"
//           editor={ClassicEditor}
//           data="<p>Start writing. . . </p>"
//           onReady={(editor) => {}}
//           onChange={(event, editor) => {
//             const data = editor.getData();
//           }}
//           onBlur={(event, editor) => {}}
//           onFocus={(event, editor) => {}}
//         />
//       </div>
//     </div>
//   );
// };

export default Ckeditor;
