import HeaderHomePage from "./HeaderHomePage";
import BodyHomePage from "./BodyHomePage";



import { useEffect, useState } from 'react'


export default function HomePage() {
    const [backAbove, setbacAbove] = useState(false)
    const [scroll, setScroll] = useState(window.scrollY)

    useEffect(() => {
        const handleClick = () => {
            if (window.scrollY >= 900) {
                setbacAbove(true)
            } else {
                setbacAbove(false)
            }
        }

        window.addEventListener('scroll', handleClick)

        /* Cleaup funtion */
        return () => {
            window.removeEventListener('scroll', handleClick)
        }
    }, [])


    const handleClick = () => {
        // console.log(window.pageXOffset)


    }


    return (
        <div style={{ marginTop: '40px' }} className="container-fluid all-home-page">
            <p style={{ height: "30px" }}></p>
            <HeaderHomePage />
            <BodyHomePage />


            {backAbove && (
                <button onClick={handleClick}
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                        border: "none",
                        background: "#7fad39"
                    }}
                >
                    Trở lên
                </button>
            )}
            
        </div>
    );
}