import React, { useContext } from "react";
import { ThemeContext } from "../context";
// import { TodoListType } from '../types'
import TodoItem from "./TodoItem";
import { TodoListType } from "../types";

function TodoList({
  todoList,
  updateTodoListItemCompletionStatus,
  deleteItem,
  filter,
  filterList,
  filteredList,
  clearCompleted
}: TodoListType): React.ReactNode {
  let mode = useContext(ThemeContext);
  return (
      <div
        className={`flex flex-col w-custom ${
          mode === "light" ? "bg-white" : "bg-customdark"
        } ${mode === "light" ? "text-black" : "text-white"} w-full ${
          mode === "light" ? "shadow-custom" : "shadow-customdark"
        } rounded-md max-sm:max-w-sm`}
      >
        {filteredList &&
          filteredList.map((todoItem) => {
            return (
              <TodoItem
                key={todoItem.id}
                id={todoItem.id}
                completed={todoItem.completed}
                text={todoItem.text}
                deleteItem={deleteItem}
                updateTodoListItemCompletionStatus={
                  updateTodoListItemCompletionStatus
                }
              />
            );
          })}
                  {todoList.length > 0 && (
          <div
            className={`flex justify-around items-center self-stretch max-sm:w-full sm:w-custom max-sm:px-6 py-4 max-sm:text-xs ${
              mode === "light" ? " text-gray-500" : " text-gray-600"
            }`}
          >
            <div className={`font-normal max-xs:text-xs tracking-tighter `}>
              {`${ filteredList.length} items ${
                filter === "all" || filter === "active" ? "left" : "completed"
              }`}
            </div>
            <div className="flex items-center gap-4 ">
              <div
              onClick={()=>filterList("all")}
                className={`${
                  filter === "all"
                    ? " text-blue-500"
                    : "hover:text-md hover:text-gray-200"
                }`}
              >
                All
              </div>
              <div
              onClick={()=>filterList("active")}
                className={`${
                  filter === "active"
                    ? " text-blue-500"
                    : "hover:text-md hover:text-gray-200"
                }`}
              >
                Active
              </div>
              <div
              onClick={()=>filterList("completed")}
                className={`${
                  filter === "completed"
                    ? " text-blue-500"
                    : "hover:text-md hover:text-gray-200"
                }`}
              >
                Completed
              </div>
            </div>
            <div onClick={clearCompleted} className="hover:text-md hover:text-gray-200 ">
              Clear Completed
            </div>
          </div>
        )}
      </div>
    
  );
}

export default TodoList;
