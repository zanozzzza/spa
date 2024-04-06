import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFiltredCategory } from "../api";

import { Preloader } from "../components/preloader";
import { MealList } from "../components/meallist";
import { Search } from "../components/search";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const [filteredMeals, setFilteredMeals] = useState([]);
    const handleSearch = (str) => {
        setFilteredMeals(
            meals.filter((item) => 
            item.strMeal.toLowerCase().includes(str.toLowerCase())
            )
        );
    };

    useEffect(() => {
        getFiltredCategory(name).then((data) => {
            setMeals(data.meals);
            setFilteredMeals(data.meals);
        });
    }, [name]);

    return (
        <>
            <h1>Recipes</h1>
            <h5>Type to search recipe or go back and choose another category:</h5>
            <button className="btn #e65100 orange darken-4" onClick={goBack}>
                GoBack
            </button>
            <Search cb={handleSearch} />
            {!meals.length ? (
                <Preloader/>    
            ) : (
                <MealList meals={filteredMeals} />
            )}
        </>
    );
}

export { Category };