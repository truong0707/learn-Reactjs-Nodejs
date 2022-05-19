import { useEffect, useState } from 'react'

// Resize : Tìm hiểu cữa sổ trình duyệt có chiều nagng là bao nhiêu




export default function Resize() {
    const [widthSize, setWidthSize ] = useState(window.innerWidth) // window.innerWidth : Chiều nagng của màn hình


    const handleRezie = () => {
        setWidthSize(window.innerWidth)

        // clearup function
        return () => {
            window.removeEventListener('resize', handleRezie)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleRezie)
        
    }, [])

    return (
        <>
            <h1>{widthSize}</h1>
        </>

    );
}













