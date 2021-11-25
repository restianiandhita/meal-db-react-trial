import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import '../component//css/main.css'
import axios from 'axios'

const New = () => {
    const { id } = useParams();
    let [meal, setMeal] = useState({ meals: [] });
    const [query, setQuery] = useState(id);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`,
            );
            setMeal(result.data);
        };
        fetchData();
    }, []);

    return (
        <div className="main">
            <div className="main-page-details">
                {
                    meal.meals.map((i) => (
                        <div className="card-newrecipe shadow-lg p-3 mb-5 bg-body">
                            <img src={(i.strMealThumb)} className="card-img-top" alt={(i.strMeal)}></img>
                            <div className="card-body">
                                <h5 className="card-title">{(i.strMeal)}</h5>
                                <p className="card-text">{(i.strCategory)}</p>
                            </div>
                        </div>
                    ))
                }
                <div className="main main-details card-details shadow-lg p-3 mb-5 bg-body">
                    {
                        meal.meals.map((i) => (
                            <div>
                                <div className="cars-details">
                                    <h4 className="card-details-title">ID {(i.idMeal)} - {(i.strMeal)} - {(i.strCategory)} - {(i.strArea)}</h4>
                                    <h6 className="card-details-title">Ingredients :</h6>
                                    <p className="card-details-text">
                                        {(i.strIngredient1) ? ` - ${(i.strIngredient1)} : ${(i.strMeasure1)}` : ''}<br></br>
                                        {(i.strIngredient2) ? ` - ${(i.strIngredient2)} : ${(i.strMeasure2)}` : ''}<br></br>
                                        {(i.strIngredient3) ? ` - ${(i.strIngredient3)} : ${(i.strMeasure3)}` : ''}<br></br>
                                        {(i.strIngredient4) ? ` - ${(i.strIngredient4)} : ${(i.strMeasure4)}` : ''}<br></br>
                                        {(i.strIngredient5) ? ` - ${(i.strIngredient5)} : ${(i.strMeasure5)}` : ''}<br></br>
                                        {(i.strIngredient6) ? ` - ${(i.strIngredient6)} : ${(i.strMeasure6)}` : ''}<br></br>
                                        {(i.strIngredient7) ? ` - ${(i.strIngredient7)} : ${(i.strMeasure7)}` : ''}<br></br>
                                        {(i.strIngredient8) ? ` - ${(i.strIngredient8)} : ${(i.strMeasure8)}` : ''}<br></br>
                                        {(i.strIngredient9) ? ` - ${(i.strIngredient9)} : ${(i.strMeasure9)}` : ''}<br></br>
                                    </p>
                                    <h6 className="card-details-title">Instructions :</h6>
                                    <p className="card-details-text">{(i.strInstructions)}</p>
                                    <h6 className="card-details-title">Another Reference :</h6>
                                    <a className="card-details-text-a" href={(i.strYoutube)}>Watch Here ~</a>
                                    <br></br><br></br><br></br>
                                    <h6 className="card-details-title">Tags :</h6>
                                    <p className="card-details-text">{(i.strTags)}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default New;