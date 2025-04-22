
import React from "react";
function Child1({ handleClick }) {
    return (
        <div>
            <h3>Child Component 1</h3>
            <button
                onClick={() => { handleClick("Option 1") }}
            >Option 1</button>
        </div>
    )
}

export default Child1 