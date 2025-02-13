import { useState, useEffect } from "react";

const Favorites = () => {
  const [recipeName, setRecipeName] = useState("");
  const [recipeDetails, setRecipeDetails] = useState("");
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  // Load saved recipes from localStorage when the component mounts
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("favoriteRecipes")) || [];
    setFavoriteRecipes(savedRecipes);
  }, []);

  // Save recipes to localStorage whenever favoriteRecipes changes
  useEffect(() => {
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  }, [favoriteRecipes]);

  // Function to add a new recipe
  const addRecipe = () => {
    if (!recipeName.trim() || !recipeDetails.trim()) {
      alert("Please enter both recipe name and details!");
      return;
    }

    const newRecipe = { id: Date.now(), name: recipeName, details: recipeDetails };
    const updatedRecipes = [...favoriteRecipes, newRecipe];

    setFavoriteRecipes(updatedRecipes);
    setRecipeName(""); // Clear input
    setRecipeDetails(""); // Clear input
  };

  // Function to delete a recipe
  const deleteRecipe = (id) => {
    const updatedRecipes = favoriteRecipes.filter(recipe => recipe.id !== id);
    setFavoriteRecipes(updatedRecipes);
  };

  return (
    <div className="main-content">
      <div className="section">
        <h2 className="heading">Personal Favorite Recipes</h2>
        <div className="recipe-form">
          <input 
            className="text-1"
            type="text" 
            placeholder="Recipe Name" 
            value={recipeName} 
            onChange={(e) => setRecipeName(e.target.value)} 
          />
          
          <textarea 
            className="text-1"
            placeholder="Enter ingredients, steps, and details..."
            value={recipeDetails}
            onChange={(e) => setRecipeDetails(e.target.value)}
          />
          
          <button onClick={addRecipe}>Add Recipe</button>

          <h3 className="heading">Saved Recipes:</h3>
          <ul>
            {favoriteRecipes.map((recipe) => (
              <li key={recipe.id}>
                <strong>{recipe.name}</strong>: {recipe.details}
                <button onClick={() => deleteRecipe(recipe.id)} className="delete-btn"> Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>  
    </div>  
  );
};

export default Favorites;
