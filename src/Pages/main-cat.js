import React, { useState, useEffect } from 'react'
import '../component//css/main.css'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import axios from 'axios'

const Main = () => {
    const { catId } = useParams();
    let [meal, setMeal] = useState({ meals: [] });
    const [query, setQuery] = useState(catId)
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${query}`,
            );
            setMeal(result.data);
        };
        fetchData();
    }, []);

    const checkData = meal.meals.length % 4
    meal.meals = meal.meals.slice(0, meal.meals.length - checkData)
    return (
        <div className="main">
            <div className="main-page">
                {
                    meal.meals.map((i) => (
                        <div className="card shadow-lg p-3 mb-5 bg-body">
                            <img src={(i.strMealThumb)} className="card-img-top" alt={(i.strMeal)}></img>
                            <div className="card-body">
                                <h5 className="card-title">{(i.strMeal)}</h5>
                                <p className="card-text">{(i.strCategory)}</p>
                                <Link to={{
                                    pathname: `/detail/${i.idMeal}`,
                                }} className=" btn btn-primary">
                                    View Recipes
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}

export default Main;