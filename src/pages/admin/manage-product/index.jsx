import SpreadProduct from "../../../components/spread-product"
import { useGetProductsQuery } from "../../../context/api/productsApi"
import "./ManageProduct.scss"
const ManageProduct = () => {
    let { data, isLoading } = useGetProductsQuery()
    return (
        <>
            <section className="manage-product">
                <div className="manage-product__wrapper admin-container">
                    <h1>Manage Product</h1>
                    <SpreadProduct data={data} isAdmin={true} loading={isLoading} />
                </div>
            </section>
        </>
    )
}

export default ManageProduct