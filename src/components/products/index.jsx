import { useGetProductsQuery } from "../../context/api/productsApi"
import SpreadProduct from "../spread-product"
import "./Products.scss"
const Products = () => {
  let { data, isLoading } = useGetProductsQuery()
  return (
    <>
      <section className="product">
        <div className="container">
          <SpreadProduct data={data} isAdmin={false} loading={isLoading} />
        </div>
      </section>
    </>
  )
}

export default Products