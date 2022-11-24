import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../Api/productsapi';
import { AuthContext } from '../../Contexts/AuthProvider';

const AddProducts = () => {
    const { user } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const date = format(new Date(), 'yyyy-MM-dd')
        // console.log('date is', date);
        const form = event.target
        const productName = form.Modelname.value
        const price = form.price.value
        const purchaseYear = form.year.value
        const condition = form.condition.value

        const mobile = form.number.value
        const location = form.location.value
        const category = form.category.value
        const image = form.image.value
        const description = form.description.value

        const productData = {
            productName,
            price,
            purchaseYear,
            condition,
            mobile,
            location,
            category,
            image,
            description,
            date,
            sellerName: user?.displayName,
            email: user?.email
        }
        console.log(productData);
        setLoading(true)
        addProduct(productData).then(data => {
            console.log(data);
            setLoading(false)
            toast.success('Product Added!')
            navigate('/dashboard')
        })

    }

    return (
        <div className=' lg:ml-40 mt-10 '>
            <h3 className="text-3xl text-center">Add Products For sell</h3>

            <form onSubmit={handleSubmit}>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Full Model Name</span>
                            </label>
                            <input required name='Modelname' type="text" placeholder="Enter Product name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input required type="text" name='price' placeholder="Product Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Mobile Image URL</span>
                            </label>
                            <input required type="text" name='image' placeholder="Image url" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of Purchase</span>
                            </label>
                            <input required type="text" name='year' placeholder="Year of your purchase" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Contact Number</span>
                            </label>
                            <input required type="text" name='number' placeholder="Contact number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <select required name="location" className="select select-bordered w-full">
                                <option value='Rajshahi' seleted>Rajshahi</option>
                                <option value='Dhaka'>Dhaka</option>
                                <option value='Khulna'>Khulna</option>
                                <option value='Chittagong'>Chittagong</option>
                                <option value='Sylhet'>Sylhet</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Condition</span>
                            </label>
                            <select required name="condition" className="select select-bordered w-full">
                                <option value='Excellent' seleted>Excellent</option>
                                <option value='Good'>Good</option>
                                <option value='Fair'>Fair</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <select required name="category" className="select select-bordered w-full">
                                <option value='1' seleted>I Phone</option>
                                <option value='2'>One Plus</option>
                                <option value='3'>Xiaomi</option>
                                <option value='4'>Samsung</option>
                                <option value='5'>Oppo</option>
                                <option value='6'>Realme</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <textarea
                                id='description'
                                className='block rounded-md focus:green-300 w-full h-20 px-4 py-3 text-gray-800 bg-green-50 border border-green-300 focus:outline-green-500 '
                                name='description'
                            ></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default AddProducts;