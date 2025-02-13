import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetail() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div className="app-container">
    <div >
      <h1 className="heading">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="image" />
      <p className="text"><strong>Prep Time:</strong> {recipe.prepTime}</p>
      <p className="text"><strong>Cook Time:</strong> {recipe.cookTime}</p>
      <p className="text"><strong>Total Time:</strong> {recipe.totalTime}</p>
      <p className="text" ><strong>Servings:</strong> {recipe.servings}</p>
      <p className="text"><strong>Difficulty:</strong> {recipe.difficulty}</p>
      <h3  className="text">Ingredients</h3>
      <ul  className="text">
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h3  className="text">Instructions</h3>
      <p className="text">{recipe.instructions}</p>
    </div>
    </div>
  );
}

export default RecipeDetail;
