/* import componnets */
import CardProduct from '../ReuseComponents/CardProduct';
import BoxTitle from '../ReuseComponents/BoxTitle';
import CardContext from '../../../store/cardProducts/CardContext';
import SliderProduct from './reuseComponentsHome/SliderProduct';

import { useState, useEffect, useContext } from 'react';

// icon
import { FaAngleDoubleDown } from "react-icons/fa";




export default function BodyHomePage() {
    // const [cards, setCards] = useState([]);
    const [limit, setLimit] = useState(4);

    const { cards } = useContext(CardContext);

    const handleShowMoreCard = () => {
        if (limit > 4) {
            alert("Hết hàng rồi ba :((")
        } else {
            setLimit(pre => pre + 4)
        }

    }

    // useEffect(() => {
    //     let isUnmount = false;

    //     // Get data
    //     axios.get(` http://localhost:8080/api/v1/card-products`)
    //         .then(datas => {
    //             if (!isUnmount) {
    //                 setCards(datas.data.productCards);
    //             }
    //         })
    //     return () => {
    //         isUnmount = true;
    //     }
    // }, [])

    return (
        <>
            <div className="container-fluid body-home-page">
                <div style={{ marginTop: "60px" }}>
                    <BoxTitle
                        nameBox="LATEST PRODUCTS"
                        line="________________"
                        contentBox1="Lorem ipsum dolor sit amet, consectetur"
                        contentBox2="adipiscin lorem solo tempor incididunt ut labore et"
                        styleCard={{ textAlign: "center" }}
                    />
                </div>



                {/*  Card Product Body Home  */}
                <div className="row list-products-body-home">
                    {cards.slice(0, limit).map((card) => (
                        <CardProduct
                            key={card._id}
                            idCard={card.id}
                            imageCard=""
                            nameCard={card.nameCard}
                            descriptionCard={card.descriptionCard}
                        />
                    ))}
                </div>

                

                {/*  Button load card Body home */}
                <div className='box-btn-card-body-home'>
                    <button style={{background: "#fff", border: "none", width:"20%"}} className='button-loat-cards-body-home' onClick={handleShowMoreCard}>
                    <FaAngleDoubleDown style={{fontSize:"20px", color:"rgb(155, 153, 152)"}}></FaAngleDoubleDown >
                    </button>
                </div>


                <div style={{ marginTop: "60px" }}>
                    <BoxTitle
                        nameBox="LATEST PRODUCTS"
                        line="________________"
                        contentBox1="Lorem ipsum dolor sit amet, consectetur"
                        contentBox2="adipiscin lorem solo tempor incididunt ut labore et"
                        styleCard={{ textAlign: "center" }}
                    />

                </div>


                <div className='container-fluid wrap__slider__product'>
                    <SliderProduct />
                </div>





                {/* // */}
                {/* <div className='box-item-service'>
                    <div className='item-service'>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et" />
                    </div>

                    <div className='item-service'>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et" />
                    </div>

                    <div className='item-service'>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et" />
                    </div>

                    <div className='item-service'>
                        <BoxTitle
                            nameBox="LATEST PRODUCTS"
                            line="________________"
                            contentBox1="Lorem ipsum dolor sit amet, consectetur"
                            contentBox2="adipiscin lorem solo tempor incididunt ut labore et" />
                    </div>
                </div> */}




            </div>
        </>
    );
}




















// export default class BodyHomePage extends React.Component {


//     state = {
//         cardProducts: [],
//     };

//     componentDidMount() {
//         axios.get(`http://localhost:3000/cardProductsHome`)
//             .then(res => {
//                 console.log(res)
//                 this.setState({ cardProducts: res.data })
//             })
//     }

//     render() {
//         return (
//             <>
//                 <div className="container-fluid body-home-page">
//                     <div style={{ textAlign: "center" }}>
//                         <h1 style={{ fontSize: "20px" }}>LATEST PRODUCTS</h1>
//                         <p>__________________</p>
//                         <p style={{ fontSize: "13px" }}>Lorem ipsum dolor sit amet, consectetur <br />adipiscin
//                             lorem solo tempor incididunt ut labore et</p>
//                     </div>

//                     <div className="row list-products-body-home">
//                         {this.state.cardProducts.map((card) => (
//                             <div key={card.id} className="col card-products-body-home">
//                                 <div className="card-product-body-home" style={{ marginLeft: "12px",  width: "90%", marginTop: "40px", borderEndStartRadius: "18px" }}>
//                                     <img style={{ borderStartEndRadius: "18px", height: "260px"}} src="https://i.pinimg.com/736x/13/8d/16/138d16015b60e73d8dcaf1551361ab9d.jpg"/* {card.imgProduct} */ className="card-img-top" alt="..." />
//                                     <div className="card-body">
//                                         <h5 className="card-title">{card.nameProduct}</h5>
//                                         <p className="card-text">{card.description}</p>
//                                         <a href="#" className="btn btn-primary">Buy</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>


//                     <div style={{ textAlign: "center", marginTop: "100px", fontSize: "15px" }}>
//                         <h1 style={{ fontSize: "20px" }}>TOP CATEGORIES</h1>
//                         <p>__________________</p>
//                         <p style={{ fontSize: "13px" }}>Lorem ipsum dolor sit amet, consectetur <br />adipiscin
//                             lorem solo tempor incididunt ut labore et</p>
//                     </div>

//                 </div>
//             </>
//         );
//     }
// }