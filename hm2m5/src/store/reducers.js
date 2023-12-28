const initialState = {
  newTodoTitle: "",
  newDescription: "",
  allTodos: [],
  viewMode: "todo",
  editTask: { id: null, text: "" },
  taskText: "",
};

export const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        allTodos: [
          ...state.allTodos,
          {
            title: state.newTodoTitle,
            description: state.newDescription,
            id: new Date().getMilliseconds(),
          },
        ],
        newTodoTitle: "",
        newDescription: "",
      };
    case "DELETE_TASK":
      return {
        ...state,
        allTodos: state.allTodos.filter((item) => item.id !== action.payload),
      };
    case "CLEAR_ALL_TASKS":
      return {
        ...state,
        allTodos: [],
      };
    case "SWITCH_TO_TODO":
      return {
        ...state,
        viewMode: "todo",
      };
    case "SWITCH_TO_COMPLETED":
      return {
        ...state,
        viewMode: "completed",
      };
    case "TASK_COMPLETED":
      return {
        ...state,
        allTodos: state.allTodos.map((task) =>
          task.id === action.payload
            ? { ...task, completed: !task.completed }
            : task
        ),
      };
    case "TOGGLE_EDIT":
      return {
        ...state,
        allTodos: state.allTodos.map((task) =>
          task.id === action.payload
            ? { ...task, isEditing: !task.isEditing }
            : task
        ),
        editTask:
          state.editTask.id === action.payload
            ? { id: null, text: "" }
            : { id: action.payload, text: state.taskText },
        taskText: state.taskText,
      };
    case "SAVE_CHANGE":
      return {
        ...state,
        allTodos: state.allTodos.map((task) =>
          task.id === action.payload
            ? { ...task, title: state.taskText, isEditing: false }
            : task
        ),
        taskText: "",
        editTask: { id: null, text: "" },
      };
    case "UPDATE_NEW_TODO_TITLE":
      return {
        ...state,
        newTodoTitle: action.payload,
      };
    case "UPDATE_NEW_DESCRIPTION":
      return {
        ...state,
        newDescription: action.payload,
      };
    case "UPDATE_TASK_TEXT":
      return {
        ...state,
        taskText: action.payload,
      };
    default:
      return state;
  }
};
