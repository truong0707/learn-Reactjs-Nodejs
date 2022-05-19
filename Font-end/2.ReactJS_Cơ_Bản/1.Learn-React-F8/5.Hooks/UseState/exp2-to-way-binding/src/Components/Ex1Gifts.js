import { useState } from 'react'


const gifts = [
    'Skin Violet tiệc bãi biển',
    'Skin Raz Thái',
    'Skin Wiro  ',
]


export default function Ex1Gifts(){
    const [gift, setGift] = useState()

    function handleChange() {
        // const index = Math.floor(Math.random() * gifts.length)
        const index = Math.floor(Math.random() * gifts.length)

        setGift(gifts[index])
    }
    return(
        <div>
            <h1>{gift || 'Chưa có phần thưởng'}</h1>  {/* (1) */}
            <button onClick={handleChange}>Lấy thưởng</button>
        </div>
    );
}


// (1): Nếu có gift thì hiển thị gift, ko có gift thì hiển thị 'Chưa có phần thưởng'