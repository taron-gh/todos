import React, { useState } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import Filter from "./Filter";

// TODO In case of fitering, checkboxes have a bug   .    HAYK
function TodoContainer(){
    const [todos, setTodos] = useState([])
    const [todosId, setTodosId] = useState(0)
    const [filterMode, setFilterMode] = useState("all")
    const addTodo = (txt) => {
        setTodos([...todos, {id: todosId, checked: false, value: txt}])
        setTodosId(todosId + 1)
    }
    console.log(todos);


    return (
        <div>
            <TodoInput addTodo={addTodo}/>
            <div>
                {
                    todos.map((item) =>{
                        if(filterMode == "all"){
                            return (
                                <Todo key={item.id} txt={item.value} checked={item.checked}
                                onCheck={(bool)=>{
                                    item.checked = bool
                                    setTodos([...todos])
                                }}
                                onEdit={(text)=>{
                                    item.value = text;
                                    console.log(todos);
                                    setTodos([...todos])
                                }}
                                onDelete={(text) => {
                                    todos.splice(todos.indexOf(item), 1)
                                    console.log(todos);
                                    setTodos([...todos])
                                }}
                                />
                            )
                        }else if(filterMode == "active"){
                            return (item.checked == false ? <Todo key={item.id} txt={item.value} checked={item.checked}
                                onCheck={(bool)=>{
                                    item.checked = bool
                                    setTodos([...todos])
                                }}
                                onEdit={(text)=>{
                                    item.value = text;
                                    console.log(todos);
                                    setTodos([...todos])
                                }}
                                onDelete={(text) => {
                                    todos.splice(todos.indexOf(item), 1)
                                    console.log(todos);
                                    setTodos([...todos])
                                }}
                                /> : null
                            )
                        }else if(filterMode == "complete"){
                            return (item.checked == true ? <Todo key={item.id} txt={item.value} checked={item.checked}
                                onCheck={(bool)=>{
                                    item.checked = bool
                                    setTodos([...todos])
                                }}
                                onEdit={(text)=>{
                                    item.value = text;
                                    console.log(todos);
                                    setTodos([...todos])
                                }}
                                onDelete={(text) => {
                                    todos.splice(todos.indexOf(item), 1)
                                    console.log(todos);
                                    setTodos([...todos])
                                }}
                                /> : null
                            )
                        }
                        
                    })
                    
                }
            </div>
            <Filter setFilter={(mode)=>{
                setFilterMode(mode)
            }}/>
        </div>
    );
}


export default TodoContainer;