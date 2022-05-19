import ProductsBlogContext from './ProductsBlogContext';
import { useReducer } from 'react';
import { SEE_MORE_CARD_BLOG } from '../Types';
import ProductsBlogReducer from './ProductsBlogReducer';



export default function ProductsBlogState({ children }) {

    const initStateBlog = {
        cardDataBlog: ['w']
    }



    const [stateProductsBlog, dispatch] = useReducer(ProductsBlogReducer, initStateBlog)

    const handleSeeMoreCardBlog = () => {
        dispatch(
            {
                type: SEE_MORE_CARD_BLOG,
            }
        )
    }



    return (
        <ProductsBlogContext.Provider value={{
            cardDataBlog: stateProductsBlog.cardDataBlog,
            handleSeeCard: handleSeeMoreCardBlog
        }}>
            {children}
        </ProductsBlogContext.Provider>
    )
}
