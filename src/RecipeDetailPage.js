// RecipeDetailPage.js
// recipesプロパティとレシピのIDを使用して、詳細情報を表示
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const RecipeDetailPage = ({ recipes }) => {
  const { recipeId } = useParams();
  const recipe = recipes.find(recipe => recipe.id === parseInt(recipeId));

  if (!recipe) {
    return <div>登録されたレシピはありません</div>;
  }

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.details}</p>
      <Link to="/">リストに戻る</Link>
    </div>
  );
};

export default RecipeDetailPage;
