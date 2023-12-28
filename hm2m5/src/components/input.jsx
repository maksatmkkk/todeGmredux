import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNewTodoTitle, updateNewDescription } from "../store/actions";

const Input = () => {
  const dispatch = useDispatch();
  const newTodoTitle = useSelector((state) => state.newTodoTitle);
  const newDescription = useSelector((state) => state.newDescription);
  
  const handleTitleChange = (event) => {
    dispatch(updateNewTodoTitle(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    dispatch(updateNewDescription(event.target.value));
  };

  return (
    <div className="todo-input-item">
      <label>Title:</label>
      <input
        type="text"
        placeholder="What's the title of your To Do?"
        value={newTodoTitle}
        onChange={handleTitleChange}
      />
      <label>Description:</label>
      <input
        type="text"
        placeholder="What's the description of your To Do?"
        value={newDescription}
        onChange={handleDescriptionChange}
      />
    </div>
  );
};

export default Input;