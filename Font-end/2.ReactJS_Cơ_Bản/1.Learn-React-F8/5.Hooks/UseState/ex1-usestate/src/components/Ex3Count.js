import { useState } from "react";



// Initial state với callback (giá trị inittial là 1 hàm (nó sẽ dùng cái giá trị của hàm đó return ra để nó làm initial state)) 


const orders = [100, 200, 300];


export default function Ex3Count (){
    // const total = orders.reduce((total, cur) => total + cur)
    // console.log(total)
    
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, cur) => total + cur)
        return total
    })


    const handleIncrese = () => {
        setCounter(prevState => prevState + 1)
    }

    return(
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrese}>Increase</button>

        </div>
    );
}