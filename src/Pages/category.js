import React, { useState, useEffect } from 'react'
import '../component/css/category.css'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Category = () => {
    let [categ, setCats] = useState({ categories: [] });
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'https://www.themealdb.com/api/json/v1/1/categories.php',
            );
            setCats(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="category">
            {
                categ.categories.map((i,idCategory) => (
                    <div className="card shadow-lg p-3 mb-5 bg-body">
                        <img src={(i.strCategoryThumb)} className="card-img-top" alt={(i.strMeal)}></img>
                        <div className="card-body">
                            {
                                (idCategory%2 === 0) ? 
                                <h5 className="card-title" style={{fontStyle:'italic'}}>{(i.strCategory)}</h5>
                            :
                            <h5 className="card-title" style={{fontWeight:'bolder'}}>{(i.strCategory)}</h5>                            
                            }
                            <p className="card-text">{(i.strCategoryDescription.substring(0, 250) + " ...")}</p>
                            <a href="#" className="btn btn-primary"> <Link to={{
                                pathname: `/cat/${i.strCategory}`,
                            }} className=" btn btn-primary">
                                View More
                            </Link></a>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Category;