import PropTypes from 'prop-types';
import "./SpreadProduct.scss"
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { wishlist } from '../../context/slice/wishlistSlice';
const SpreadProduct = ({ data, loading, isAdmin }) => {
    let wishlistData = useSelector(state => state.wishlist)
    let dispatch = useDispatch()
    const product = data?.map((product) => (
        <div className="spread-product__card" key={product.id}>
            <div className="spread-product__image-box">
                <img src={product.images} alt="" />
                <button onClick={() => dispatch(wishlist(product))} className='spread-product__wishlist-btn'> {
                    wishlistData.some((el) => el.id === product.id) ?
                        <FaHeart /> :
                        <FaRegHeart />
                }
                </button>
            </div>
            <div className="spread-product__info-box">
                <h3 className='spread-product__title'>{product.title}</h3>
                <p className='spread-product__text'><span>Price:</span>{product.price}</p>
                <p className='spread-product__text'><span>Category:</span>{product.category}</p>
                {
                    isAdmin ? <div className="product__info__btns">
                        <button>Delete</button>
                        <button>Edit</button>
                    </div> : <></>
                }
            </div>
        </div>
    ))
    const getLoading = (
        <>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
            <span className="loader"></span>
        </>
    )
    return (
        <>
            <div className="spread-product__cards">
                {
                    loading ?
                        getLoading
                        :
                        product
                }
            </div>
        </>
    )
}
SpreadProduct.propTypes = {
    data: PropTypes.array,
    loading: PropTypes.bool,
    isAdmin: PropTypes.bool,
};

export default SpreadProduct;