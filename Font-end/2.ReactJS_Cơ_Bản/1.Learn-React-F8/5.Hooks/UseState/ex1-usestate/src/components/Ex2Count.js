import { useState } from "react";



// Set state với callback 

export default function Ex2Count (){
    const [counter, setCounter] = useState(2)


    const handleIncrese = () => {
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
        setCounter(prevState => prevState + 1)
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrese}>Increase</button>

        </div>
    );
}