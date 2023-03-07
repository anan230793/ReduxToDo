import { addToDo } from "../Reducers/toDoSlider";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddToDo = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    content: "Write your to Do",
  });

  const handleChange = (e:any) => {
    setState({ ...state, [e.target.name]: e.target.value });
    return;
  };

  const add = () => {
    if (content === "") {
      setState({ ...state });
      return;
    }
    dispatch(addToDo({ newContent: content }));
    setState({ ...state, content: "" });
  };
  const { content } = state;
  return (
    <div className="form">
      <h2>To Do list</h2>
      <input
        type="text"
        value={content}
        name="content"
        onChange={handleChange}
      ></input>
      <button type="button" className="button" onClick={add}>
        Add
      </button>
    </div>
  );
};

export default AddToDo;
