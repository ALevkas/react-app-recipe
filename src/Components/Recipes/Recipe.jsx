import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../../api';

import { Preloader } from '../Shared/Preloader';

export const Recipe = () => {
    const { goBack } = useHistory();
    const { idMeal } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        getMealById(idMeal).then((data) => setRecipe(data.meals[0]));
    }, [idMeal]);

    return (
        <>
            <button className='btn' onClick={goBack}>
                Go Back
            </button>
            {!recipe ? (
                <Preloader />
            ) : (
                <div className='card card-recipe'>
                    <div className='card-image'>
                        <img src={recipe.strMealThumb} />
                    </div>
                    <div className='card-content'>
                        <span className='card-title'>{recipe.strMeal}</span>
                        <span>{recipe.strCategory}</span>
                        <br />
                        {recipe.strArea ? <span> recipe.strArea </span> : null}
                        <br />
                        <p>{recipe.strInstructions}</p>

                        <table className='centered'>
                            <thead>
                                <tr>
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.keys(recipe).map((key) => {
                                    if (
                                        key.includes('Ingredient') &&
                                        recipe[key]
                                    ) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>
                                                    {
                                                        recipe[
                                                            `strMeasure${key.slice(
                                                                13
                                                            )}`
                                                        ]
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    }
                                    return null;
                                })}
                            </tbody>
                        </table>

                        {recipe.strYoutube ? (
                            <div className='row'>
                                <h5>Video Recipe</h5>
                                <iframe
                                    title={idMeal}
                                    src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                        -11
                                    )}`}
                                    allowFullScreen
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            )}
        </>
    );
};
