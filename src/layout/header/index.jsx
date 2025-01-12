import { useState } from "react"
import "./Header.scss"
import { Link } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa"

const Header = () => {
    const [scroll, setScroll] = useState(0)
    window.addEventListener("scroll", () => {
        setScroll(scrollY)
    })
    return (
        <>
            <header className={`header ${scroll > 50 ? "header__active" : ""}`}>
                <div className='container'>
                    <nav className='header__navbar'>
                        <Link to={"/"} className='header__site-logo'>
                            <h1>All Products</h1>
                        </Link>
                        <div>
                            <Link  className='header__admin-link' to={"/wishlist"}><FaRegHeart /></Link>
                            <Link to={"/admin/manage-product"} className='header__admin-link'>Admin</Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header