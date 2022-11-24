import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    // console.log(category);
    const id = category.categoryNumber
    return (
        <div className="card w-80 h-80 bg-base-100 shadow-xl ml-5 pt-7 ">
            <figure className="px-10 pt-3 ">
                <img src={category.categoryImage} alt="phones" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category.categoryName}</h2>
                <div className="card-actions">
                    <Link to={`category/${id}`} ><button className="btn btn-primary">See All Phones</button></Link>

                </div>
            </div>
        </div>
    );
};

export default CategoryCard;