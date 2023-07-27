import React, { useContext } from "react";
import { ThemeContext } from "../context";
import { TodoItemType } from "../types";
import { useState } from "react";
function TodoItem({
  id,
  text,
  completed,
  updateTodoListItemCompletionStatus,
  deleteItem,
}: TodoItemType): React.ReactNode {
  let mode = useContext(ThemeContext);
  const [closeButtonVisible, setCloseButtonVisible] = useState<boolean>(false);
  return (
    <div
      className="flex w-full p-6 items-center justify-center gap-6 "
      onMouseOver={() => setCloseButtonVisible(true)}
      onMouseLeave={() => setCloseButtonVisible(false)}
    >
      <div
        className={`w-6 h-6 
      rounded-full 
      border-2 
      ${mode === "light" ? "border-gray" : "border-white"} 
      flex-none 
      ${completed ? "bg-purple-400" : mode === "light" ? "bg-white" : "bg-customdark"}
      transition-all hover:border-purple-400`}
        onClick={() => updateTodoListItemCompletionStatus(id)}
      ></div>
      <div className={`flex-1 ${completed && "line-through"}`}>{text}</div>
      {closeButtonVisible && (
        <div className="w-4 h-4 flex-none" onClick={()=>deleteItem(id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path
              fill={`${mode === "light" ? "#979797" : "#5B5E7E"}`}
              fillRule="evenodd"
              d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
