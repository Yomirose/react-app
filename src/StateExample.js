import { useState } from "react";

function StateExample() {
    const [name, setName] = useState("Roseline");
    const [num, setNum] = useState(0);

    function changeName(){
        setName("John");
    }

    function increaseNum(){
        setNum(num + 1);
        
    }

    function decreaseNum(){
        setNum(num - 1)
    }

    return (
        <div>
            Hello, {name}
            <button onClick={changeName}>Click Me</button>

            {num}
            <button onClick={increaseNum}>Increment</button>

            {num}
            <button onClick={decreaseNum}>Decrement</button>
        </div>
    )
}

export default StateExample  