import { useState } from 'react';
;


function Ex1UseRef() {
    const [count, setcount] = useState(60)

    const handleStart = () => {
        setInterval(() => {
            setcount(prev => prev - 1)
        }, 1000)
    }

    const handleStop = () => {

    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    );
}

export default Ex1UseRef;
