import  {useState} from "react";

export default function Todo() {
    let [todos,setTodos]=useState(["sample Task"]);
    let [newTodo,setTodo]=useState("");

    function addNewTask(){
        setTodos([...todos,newTodo]);
        setTodo("");
    }

    function updateTodo(event){
        setTodo(event.target.value);
    }

    return (
        <div>
            <input placeholder="Add a task"  value={newTodo} onChange={updateTodo}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br/><br/><br/><br/>
            <h4>Todo List</h4>
            <ul>
                {todos.map((todo)=>{
                    // eslint-disable-next-line react/jsx-key
                    return <li>{todo}</li>
                })}
            </ul>
        </div>
    )
}