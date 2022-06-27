import React, { useState } from "react";

function TodoInput({addTodo}){
    const [value, setValue] = useState("")
    return(
        <div>
            <button>^</button>
            <input type="text" value={value} onChange={({target: {value}})=>{setValue(value)}} placeholder="your todo" onKeyDown={({key})=>{
                if(key == "Enter" && value){
                    addTodo(value);
                    setValue("")
                }
            }}/>
        </div>
    );

}

export default TodoInput;