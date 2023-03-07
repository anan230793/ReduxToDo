import React, { useState } from "react";
import { AiFillEdit, AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, editTodo } from "../Reducers/toDoSlider";


const ListToDo = () => {
  const { todoList } = useSelector((state:any) => state.toDo);
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [state, setState] = useState({
    id: "",
    content: "",
  });
  const onEditToggle = (id:any, content:any) => {
    setEditing(true);
    setState({
      ...state,
      id,
      content,
    });
    console.log("print id",id)
    console.log("print content",content)
  };
  const handleChange = (e:any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const { content, id } = state;

  const edit = () => {
    if (content === "") {
      setState({ ...state });
      return;
    }
    dispatch(editTodo({id, content }));
    setEditing(false);
  };
  return (
    <div>
      {isEditing ? (
        <div className="form">
          <h2>Update your List</h2>
          <input
            type="text"
            value={content}
            name="content"
            onChange={handleChange}
          ></input>
          <button type="button" className="button" onClick={edit}>
            Edit
          </button>
        </div>
      ) : (
        <ul className="todos">
          {todoList.map(({id , content}) => {
            return (
              <li className="grid" key={id}>
                <span className="content">{content}</span>
                <span className="todo-action">
                  <AiOutlineCloseCircle
                    className="close"
                    onClick={() => dispatch(deleteToDo({ id }))}
                  />
                  <AiFillEdit
                    className="edit"
                    onClick={() => onEditToggle(id, content)}
                  />
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ListToDo;
