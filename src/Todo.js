import React, { useEffect, useRef, useState } from "react";

function Todo({ txt, checked, onCheck, onEdit, onDelete }) {
    const inputRef = useRef(null);

    const [isEnabled, setIsEnabled] = useState(false)
    const [text, setText] = useState(txt)
    // const [isChecked, setChecked] = useState(checked)
    // useEffect(()=>{
    //     onCheck(isChecked)
    // }, [isChecked]);

    useEffect(() => {
        if (isEnabled) {
           inputRef.current.focus();
        }
    }, [isEnabled])

    const handleDoubleClick = () => {
        setIsEnabled(true); 
        // console.dir(inputRef.current);
    }


    // console.log(isEnabled,text)
    return (
        <div onDoubleClick={handleDoubleClick}>
            <input type="checkbox" value={checked} onChange={() => {
                onCheck(!checked)
            }} />
            <input type="text" ref={inputRef} value={text} disabled={!isEnabled} onBlur={() => {
                // console.log(1)
                onEdit(text)
                setIsEnabled(false)
            }
            } onChange={({target: {value}})=>{
                setText(value)
            }} onKeyDown={(e)=>{
                if(e.key=='Enter' && e.target.value){
                    onEdit(text)
                    setIsEnabled(false)
                }
            }}/>
            <button onClick={onDelete}>X</button>
        </div>
    );
}

export default Todo;