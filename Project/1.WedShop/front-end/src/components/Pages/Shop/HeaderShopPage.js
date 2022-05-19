import ListTypeProduct from "../ReuseComponents/ListTypeProduct";
import { useState } from 'react'

export default function HeaderShopPage() {

    /* Xử lý show List Card */
    const [showList, setShowList] = useState(false);
    const [classList, setclassList] = useState("ss2");

    const handleClickShowList = () => {
        setShowList(!showList)
        if (showList === true) {
            setclassList("list-group-item list-group-item-action")
        } else {
            setclassList("ss2")
        }
    }

    return (
        <>
            <div style={{ marginTop: "60px" }}>
                <div className="container" style={{ height: "70px"}}>
                    <div className="row">
                        <div className="col-xl-4" style={{ width: "27%" }}>
                            <ListTypeProduct
                                handleClickShowList={handleClickShowList}
                                ClassLists={classList}
                            />
                        </div>
                        <input className="col"/>
                        <button className="col" style={{ background: "red" }}></button>
                    </div>

                </div>



                <div className="IMG-header-shop">
                    <img style={{ width: "100%", height: "600px" }} src="https://vulcano.vn/uploaded/images/1(30).jpg" alt="..." />
                </div>
            </div>
        </>
    );
}