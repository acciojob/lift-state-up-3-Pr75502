
import React from "react";
function Child2({handleClick}) {
    return (
        <div>
            <h3>Child Component 2</h3>
            <button
            onClick={()=>handleClick("Option 2")}
            >Option 2</button>
        </div>
    )
}

export default Child2