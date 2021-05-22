import React,{useState} from "react";
// import { Input } from "semantic-ui-react";

const AddTag = (props) => {
  const [tag,settag] = useState("");
  //   <Input
  //     id="addTag"
  //     icon="tags"
  //     iconPosition="left"
  //     label={{ tag: true, content: "Add Tag" }}
  //     labelPosition="right"
  //     placeholder="Enter tags"
  //   />
  return (
  <div className="ui left icon right labeled input">
    <input type="text" placeholder="Enter college name" id="enterTag" value={tag} onChange={e =>settag(e.target.value)}/>
    <i aria-hidden="true" className="tags icon"></i>
    <div className="ui tag label label" id="addTag">
     Add Tag
    </div>
  </div>
  );
};

export default AddTag;
