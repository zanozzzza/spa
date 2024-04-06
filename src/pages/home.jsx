import { useState, useEffect } from "react";
import { getAllCategories } from "../api";
import { Preloader } from "../components/preloader";
import { CategoryList } from "../components/categorylist";
import { Search } from "../components/search";

function Home () {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) => 
            item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(data.categories);
        });
    }, []);
    
    return (
        <>
            <h1>Categories</h1>
            <h5>Type to search category to find recipes by main ingredient:</h5>
            <Search cb={handleSearch} />            
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}

export { Home };