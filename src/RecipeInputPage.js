// RecipeInputPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RecipeInputPage = ({ recipes }) => {

    const [selectedRecipes, setSelectedRecipes] = useState([]);

    const handleCheckboxChange = (recipeId) => {
        
        if (selectedRecipes.includes(recipeId)) {
            //選択解除
            setSelectedRecipes(selectedRecipes.filter(id => id !== recipeId));
            console.log(selectedRecipes + "a");
        } else {
            setSelectedRecipes([...selectedRecipes, recipeId]);
            console.log(selectedRecipes + "b");
        }
    };

    return (
        <div>
            <h2>追加されたレシピ一覧</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipe.id}>
                        <input
                            type="checkbox"
                            checked={selectedRecipes.includes(recipe.id)}
                            onChange={() => handleCheckboxChange(recipe.id)}
                        />
                        <Link to={`/recipes/${recipe.id}`}>
                            {recipe.name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* "選択れたレシピ一覧へ" のリンク */}
            <Link to="/SelectedRecipes">
                <div>選択れたレシピ一覧へ</div>
            </Link>
        </div>
    );
};

export default RecipeInputPage;
