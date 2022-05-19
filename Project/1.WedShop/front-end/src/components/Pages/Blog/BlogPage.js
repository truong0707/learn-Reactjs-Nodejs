import { useState, useEffect } from 'react';
import axios from 'axios';
import './BlogPage.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

//
import { useContext } from 'react';
import ProductsBlogContext from '../../../store/productsBlog/ProductsBlogContext';

export default function BlogPage() {

    const { cardDataBlog } = useContext(ProductsBlogContext);

    console.log(cardDataBlog)

    const [card, setCard] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3000/cardProductsBlog`).then(datas => setCard(datas.data))
    }, [])


    return (
        // <Router>

        //     <Routes>

        //     </Routes>
        // </Router>
        <div className='all_page_blog'>
            <div className='header_page_blog'>
                <img style={{ width: '100%', height: '290px' }} src='http://www.maisonjsc.com/media/images/172682/maison-blog-20170830.gif' />
            </div>

            <div className='container body_page_blog'>
                <div className='row'>
                    <div className='col-lg col-md-4'>
                        <form><input className='input-search-blog' placeholder='Search...' /></form>

                        <div className='list_categories_blog'>
                            <h4 style={{ color: '#7fad39' }}><b>Categories</b></h4>
                            <p>All</p>
                            <p>Beauty(20)</p>
                            <p>Food(5)</p>
                            <p>Life Style(9)</p>
                            <p>Travel(10)</p>
                        </div>

                        <div>
                            <h4 className='recent_news_blog'>
                                <b style={{ color: '#7fad39' }}>Recent News</b>
                                {/* <div class="card mb-3" style={{ maxWidth: '70%', height: '75px', fontSize: '15px', marginTop: '20px', borderRadius: '0' }}>
                                    <div class="row g-0">
                                        <div class="col-4">
                                            <img style={{ height: '90%', width: '78%' }} src="https://scontent.fdad3-4.fna.fbcdn.net/v/t39.30808-6/248369484_1218543181991435_3868190749928450779_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=szt29d3FzuAAX_Bu-96&_nc_ht=scontent.fdad3-4.fna&oh=00_AT9kq0rf4AFUqhwIYbRspulIJYYfoNAaPq_1Nwp1yg77aQ&oe=6222596F" class="img-fluid rounded-start" alt="..." />
                                        </div>

                                        <div class="col-md-8">
                                            <div style={{ marginLeft: '0px' }}>
                                                <p class="card-title"><b>6 ways to prepare breakfast for 30</b></p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </h4>
                        </div>

                        <div className=''>
                            <b>Search By</b>
                        </div>
                    </div>


                    <div className='col-xl-8'>
                        <div className='row'>
                            {card.map((data, index) => (
                                <div key={index} className="card" style={{ width: "21rem", marginLeft: '30px', marginBottom: '16px' }}>
                                    <img style={{ width: '100%' }} src="https://thietkehaithanh.com/wp-content/uploads/2019/07/thietkehaithanh-to-roi-2-1067x800.jpg" className="card-img-Bottom" alt="..." />
                                    <div className="card-body">
                                        <p className="card-text">{data.titleCard}</p>
                                        <p className="card-text">{data.descriptionCard}</p>
                                        <button><a href='/blog/cc'>Read more</a></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}