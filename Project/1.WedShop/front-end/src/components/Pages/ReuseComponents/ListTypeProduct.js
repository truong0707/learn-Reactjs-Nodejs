import React from 'react';
import { FaCaretDown } from "react-icons/fa";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Link } from 'react-router-dom'


export default function ListTypeProduct(props) {



    return (
        <>
            <div className="list-group">
                <div style={{ background: "#7FAD39", lineHeight: "25px", height: "45px", color: "#fff" }} className="list-group-item list-group-item-action " aria-current="true">
                    <div style={{ display: "flex" }}>
                        <b>DANH MỤC </b>
                        <p style={{ fontSize: "16px", cursor: "pointer" }} onClick={props.handleClickShowList}> <FaCaretDown /></p>

                    </div>

                </div>
                <Link /* className="item__bar" */ to="/shop/women's-clothing" className={props.ClassLists}><b>WOMEN'S CLOTHING</b></Link>
                <Link /* className="item__bar" */ to="/shop/men's-clothing" className={props.ClassLists}><b>MEN'S CLOTHING</b></Link>
                <button type="button" className={props.ClassLists}><b>WATCHES</b></button>
                <button type="button" className={props.ClassLists}><b>BAGS & SHOP</b></button>
                <button type="button" className={props.ClassLists}><b>SHOES</b></button>
                <button type="button" className={props.ClassLists}><b>JEWELLERY</b></button>
                <button type="button" className={props.ClassLists}><b>ACCESSORIES</b></button>
                <button type="button" className={props.ClassLists}><b>TOYS, KID & BABY</b></button>
                <button type="button" className={props.ClassLists}><b>SPORT & OUTDOORS</b></button>
                <button type="button" className={props.ClassLists}><b>HEALTH & BEAUTY</b></button>
            </div>

        </>
    )
}
