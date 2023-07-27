
export type HeaderTypes = {
  changeMode: () => void;
};

export type TodoItemType = {
  id: string;
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
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  updateCompletionStatus: () => void;
  onKeyDown: (e:React.KeyboardEvent<HTMLInputElement>) => void;
  text: string;
  completed: boolean;
};
