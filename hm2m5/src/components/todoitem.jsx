import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { BiSave } from "react-icons/bi";

const Todoitem = ({
  id,
  todoTitle,
  todoDescription,
  completed,
  isEditing,
  TaskText,
  onDeleteTask,
  onTaskCompleted,
  onToggleEdit,
  onSaveChange,
  onUpdateTaskText,
}) => {  
  const iconComponent = completed ? (
    <RxCross1
      title="Delete"
      className="delete-icon"
      onClick={() => onTaskCompleted(id)}
    />
  ) : (
    <BsCheckLg
      title="Completed"
      className="check-icon"
      onClick={() => onTaskCompleted(id)}
    />
  );

  return (
    <div className="todo-list-item">
      <div>
        {isEditing ? (
          <div>
            <input
              className="edit-input"
              type="text"
              defaultValue={TaskText}
              onChange={(e) => onUpdateTaskText(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <h3>{todoTitle}</h3>
            <p>{todoDescription}</p>
          </div>
        )}
      </div>

      <div>
        {isEditing ? (
          <BiSave
            title="Save-icon"
            className="save-icon"
            onClick={() => onSaveChange(id)}
          />
        ) : (
          <div>
            <AiOutlineDelete
              title="Delete?"
              className="icon"
              onClick={() => onDeleteTask(id)}
            />
            {iconComponent}
            <FaRegEdit
              title="Edit"
              className="icon-Edit"
              onClick={() => onToggleEdit(id, todoTitle)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Todoitem;
