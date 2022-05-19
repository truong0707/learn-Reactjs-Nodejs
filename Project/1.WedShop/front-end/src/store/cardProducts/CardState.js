import React, { useState, useEffect } from 'react';
import CardContext from './CardContext';
import axios from 'axios';

export default function CardState({ children }) {
    const [cards, setCards] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/card-products`)
            .then(datas => setCards(datas.data.productCards));
    }, [])




    return (
        <CardContext.Provider value={{
            cards: cards
        }}>
            {children}
        </CardContext.Provider>
    )
}
