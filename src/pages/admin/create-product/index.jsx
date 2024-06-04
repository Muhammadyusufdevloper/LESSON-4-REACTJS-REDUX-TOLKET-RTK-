import { useState } from 'react';
import "./CreateProduct.scss";

const initialState = {
    title: '',
    price: '',
    category: '',
    images: '',
};

const CreateProduct = () => {
    const [formData, setFormData] = useState(initialState);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <div className="crate-product">
                <div className="admin-container">
                    <h1>Create product</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input required type="text" id="title" name="title" value={formData.title} onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="price">price</label>
                            <input required type="number" id="price" name="price" value={formData.price} onChange={(e) => setFormData((p) => ({ ...p, price: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="category">Category</label>
                            <input required type="text" id="category" name="category" value={formData.category} onChange={(e) => setFormData((p) => ({ ...p, category: e.target.value }))} />
                        </div>
                        <div>
                            <label htmlFor="images">Images</label>
                            <input required type="text" id="images" name="images" value={formData.images} onChange={(e) => setFormData((p) => ({ ...p, images: e.target.value }))} />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CreateProduct;
