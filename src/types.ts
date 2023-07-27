import { ChangeEvent } from "react";

export type HeaderTypes = {
  changeMode: () => void;
};

export type TodoItemType = {
  id: string | null | undefined;
  text: string;
  completed: boolean;
  // onClick?:(e:MouseEventHandler,id:string)=>void
  updateTodoListItemCompletionStatus: (id: string) => void;
  deleteItem: (id: string) => void;
};

export type TodoListType = {
  todoList: Array<TodoItemType> | [];
  updateTodoListItemCompletionStatus: (id: string) => void;
  deleteItem: (id: string) => void;
  filter: string;
  filterList:(filter:"all" | "active" | "completed")=>void,
  filteredList:Array<TodoItemType> | [],
  clearCompleted:()=>void
};

export type TodoInputType = {
  onChange: (e: ChangeEvent) => void;
  updateCompletionStatus: () => void;
  onKeyDown: (e: KeyboardEvent) => void;
  text: string;
  completed: boolean;
};
