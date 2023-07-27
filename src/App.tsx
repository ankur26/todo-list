import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ImageContainer from "./components/ImageContainer";
import TodoInput from "./components/TodoInput";
import { ThemeContext } from "./context";
import useLocalStorage from "use-local-storage";
import { TodoItemType } from "./types";
import TodoList from "./components/TodoList";

function App() {
  const defaultDark: boolean = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const [mode, setMode] = useLocalStorage<"dark" | "light">(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const [filterLevel,setFilterLevel] = useState<"all" | "active" | "completed">("all")
  const [todoItem, setTodoItem] = useState<TodoItemType>({
    completed: false,
    text: "",
  } as TodoItemType);
  const [todoList, setTodoList] = useState<Array<TodoItemType>>([]);
  const [filteredList,setFilteredList] = useState<Array<TodoItemType> | []>([]);
  
  useEffect(()=>{
    if (todoList){
      if(filterLevel === "all"){
        setFilteredList(todoList)
      }else if(filterLevel === "active"){
        setFilteredList(todoList.filter(item=>!item.completed));
      }else if(filterLevel === "completed"){
        setFilteredList(todoList.filter(item=>item.completed));
      }
    }else{
      setFilteredList([])
    }
  },[todoList,filterLevel])

  function clearCompleted(){
    let newList = todoList.filter(item=>!item.completed);
    setTodoList(newList);
  }
  function deleteItem(id:string):void {
    let newList = todoList.filter((listItem) => listItem.id !== id);
    setTodoList(newList);
  }
  function updateTodoListItemCompletionStatus(id: string): void {
    console.log("calling the update function ");
    // console.log(e)
    console.log(id);
    let newList = todoList.map((listItem) => {
      if (listItem.id === id) {
        listItem.completed = !listItem.completed;
      }
      return listItem;
    });
    console.log(newList);
    setTodoList(newList);
  }

  function updateCompletionStatus(): void {
    console.log("Mark item as completed");
    let newItem: TodoItemType = { ...todoItem, completed: !todoItem.completed };
    setTodoItem(newItem);
  }
  function createTodoItem(): void {
    console.log("Todo item will be created");
    let newItem = { ...todoItem, id: uuidv4() } as TodoItemType;
    setTodoList(todoList.concat(newItem));
    setTodoItem({
      completed: false,
      text: "",
    } as TodoItemType);
  }
  function onChange(e:React.ChangeEvent<HTMLInputElement>): void {
    let newItem: TodoItemType = { ...todoItem, text: e.target.value };
    setTodoItem(newItem);
  }
  function onKeyDown(e:React.KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") {
      createTodoItem();
    }
  }
  function changeMode(): void {
    setMode(mode === "light" ? "dark" : "light");
  }
  function filterList(filter:"all" | "active" | "completed"):void {
    setFilterLevel(filter);
  }

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`font-sans flex flex-col items-center relative`}>
        <ImageContainer />
        <Header changeMode={changeMode} />
        <TodoInput
          onKeyDown={onKeyDown}
          text={todoItem.text}
          completed={todoItem.completed}
          onChange={onChange}
          updateCompletionStatus={updateCompletionStatus}
        />
        <TodoList
          todoList={todoList}
          updateTodoListItemCompletionStatus={
            updateTodoListItemCompletionStatus
          }
          deleteItem={deleteItem}
          filter={filterLevel}
          filterList={filterList}
          filteredList={filteredList}
          clearCompleted={clearCompleted}
        />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
