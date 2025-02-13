import { useState } from "react";
import recipes from "../data/recipes";
import { Link } from "react-router-dom";

function Recipes() {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all"); // New state for filtering difficulty

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(search.toLowerCase());
    const matchesDifficulty = difficulty === "all" || recipe.difficulty.toLowerCase() === difficulty.toLowerCase();
    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="app-container">
      <h1 className="heading">DishDelight Recipes</h1>

      {/* Search Bar */}
      <input
        className="search"
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Difficulty Filter Dropdown */}
      <select className="filter" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="all">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} className="image" />
              <h2 className="text">{recipe.title}</h2>
              <p className="text">Difficulty: {recipe.difficulty}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
