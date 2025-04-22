import React,{useState} from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
function Parent() {
    let [text, setText] = useState("")
    
    function handleClick(buttonText) {
       
        setText(buttonText)
    }
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <Child1
                handleClick={handleClick}
                
            />
            <Child2
            handleClick={handleClick}
            />

            <p>Selected Option: {text}</p>
        </div>
    )
}
export default Parent