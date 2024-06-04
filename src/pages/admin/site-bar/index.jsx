import { GoArrowLeft } from "react-icons/go"
import { Link, NavLink } from "react-router-dom"
import "./SiteBar.scss"

const SiteBar = () => {
  return (
    <>
      <div className="site-bar">
        <div className="site-bar__wrapper">
          <div className="site-bar__navbar">
            <Link to={"/"} className="site-bar__link"><GoArrowLeft /></Link>
            <h1 className="site-bar__title">Admin Dashboard</h1>
          </div>
          <ul className="site-bar__list">
            <li className="site-bar__item">
              <NavLink to={"create-product"} className={"site-bar__page-link"}>Create product</NavLink>
            </li>
            <li className="site-bar__item">
              <NavLink to={"manage-product"} className={"site-bar__page-link"}>Manage product</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SiteBar