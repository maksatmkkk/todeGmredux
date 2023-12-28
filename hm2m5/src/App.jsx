import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  clearAllTasks,
  switchToTodo,
  switchToCompleted,
  taskCompleted,
  toggleEdit,
  saveChange,
  updateNewTodoTitle,
  updateNewDescription,
  updateTaskText,
} from "./store/actions";
import Input from "./Components/input";
import Button from "./Components/Button";
import Switcher from "./Components/switcher";
import Todoitem from "./Components/todoitem";
import Clear from "./Components/clear";

function App() {
  const dispatch = useDispatch();
  const newTodoTitle = useSelector((state) => state.newTodoTitle);
  const newDescription = useSelector((state) => state.newDescription);
  const allTodos = useSelector((state) => state.allTodos);
  const viewMode = useSelector((state) => state.viewMode);
  const editTask = useSelector((state) => state.editTask);
  const taskText = useSelector((state) => state.taskText);

  const todoTasks = allTodos.filter((task) => !task.completed);
  const completedTasks = allTodos.filter((task) => task.completed);

  const handleAddNewTask = () => {
    if (newTodoTitle.trim() !== "") {
      dispatch(addTask());
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleClearAllTasks = () => {
    dispatch(clearAllTasks());
  };

  const handleSwitchToTodo = () => {
    dispatch(switchToTodo());
  };

  const handleSwitchToCompleted = () => {
    dispatch(switchToCompleted());
  };

  const handleTaskCompleted = (id) => {
    dispatch(taskCompleted(id));
  };

  const handleToggleEdit = (id, text) => {
    dispatch(toggleEdit(id, text));
  };

  const handleSaveChange = (id) => {
    dispatch(saveChange(id));
  };

  const handleUpdateNewTodoTitle = (value) => {
    dispatch(updateNewTodoTitle(value));
  };

  const handleUpdateNewDescription = (value) => {
    dispatch(updateNewDescription(value));
  };

  const handleUpdateTaskText = (value) => {
    dispatch(updateTaskText(value));
  };

  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <Input
            valueTitle={newTodoTitle}
            valueDescription={newDescription}
            onTitleChange={handleUpdateNewTodoTitle}
            onDescriptionChange={handleUpdateNewDescription}
          />
          <Button onclick={handleAddNewTask} />
        </div>

        <div className="clear-wrapper">
          <Clear clear={handleClearAllTasks} />

          <Switcher
            switchToTodo={handleSwitchToTodo}
            switchToCompleted={handleSwitchToCompleted}
            viewMode={viewMode}
          />
        </div>

        <div className="todo-list">
          {viewMode === "todo" ? (
            todoTasks.map((item) => (
              <Todoitem
                key={item.id}
                todoTitle={item.title}
                todoDescription={item.description}
                onDeleteTask={() => handleDeleteTask(item.id)}
                id={item.id}
                onTaskCompleted={() => handleTaskCompleted(item.id)}
                completed={item.completed}
                onToggleEdit={() => handleToggleEdit(item.id, item.title)}
                TaskText={item.id === editTask.id ? editTask.text : ""}
                onUpdateTaskText={handleUpdateTaskText}
                onSaveChange={() => handleSaveChange(item.id)}
                editTask={item.id === editTask.id}
                isEditing={editTask.id === item.id}
              />
            ))
          ) : (
            completedTasks.map((item) => (
              <Todoitem
                key={item.id}
                todoTitle={item.title}
                todoDescription={item.description}
                onDeleteTask={() => handleDeleteTask(item.id)}
                id={item.id}
                onTaskCompleted={() => handleTaskCompleted(item.id)}
                completed={item.completed}
                onToggleEdit={() => handleToggleEdit(item.id, item.title)}
                TaskText={item.id === editTask.id ? editTask.text : ""}
                onUpdateTaskText={handleUpdateTaskText}
                onSaveChange={() => handleSaveChange(item.id)}
                editTask={item.id === editTask.id}
                isEditing={editTask.id === item.id}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
