import React, { useContext } from "react";
import { ThemeContext } from "../context";
import { TodoInputType } from "../types";

function TodoInput({
  updateCompletionStatus,
  completed,
  text,
  onChange,
  onKeyDown,
}: TodoInputType): React.ReactNode {
  const mode = useContext(ThemeContext);
  return (
    <div
      className={`w-full mb-6 py-5 px-6 ${
        mode === "light" ? "bg-white" : "bg-customdark"
      } w-custom 
      max-sm:max-w-sm
    ${mode === "light" ? "shadow-custom" : "shadow-customdark"} 
    rounded-md flex items-center gap-6 transition-all ${
      mode === "light" ? "border-white" : "border-customdark"
    } hover:border-blue-500 border-2 overflow-hidden my-2 `}
    >
      <div
        className={`w-6 h-6 rounded-full border-2 border-gray flex-none ${
            completed ? "bg-purple-400" :mode === "light" ? "bg-white" : "bg-customdark"
        } `}
        onClick={updateCompletionStatus}
      ></div>
      <div className="flex-1">
        <input
          className={`${mode === "light" ? "text-black" : "text-white"} ${
            completed && text && "line-through"
          } w-full focus:outline-none font-sans text-md placeholder-shown:text-gray-500 caret-blue-600 bg-inherit`}
          type="text"
          placeholder="Type something here"
          value={text}
          onKeyDown={(e) => onKeyDown(e)}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
}

export default TodoInput;
