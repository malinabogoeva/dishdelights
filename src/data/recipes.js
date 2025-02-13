import pasta from "../images/pasta.jpg";
import curry from "../images/chicken-curry.jpg";
import tiramisu from "../images/tiramisu.jpg";
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: pasta, 
    ingredients: ["Spaghetti", "Eggs", "Parmesan", "Bacon"],
    instructions: "Boil pasta. Cook bacon. Mix eggs and cheese. Combine all.",
    prepTime: "10 min",
    cookTime: "15 min",
    totalTime: "25 min",
    servings: 2,
    difficulty: "Easy",
  },
  {
    id: 2,
    title: "Chicken Curry",
    image: curry, 
    ingredients: ["Chicken", "Curry Paste", "Coconut Milk", "Onions"],
    instructions: "Sauté onions, add chicken, add paste, add coconut milk.",
    prepTime: "15 min",
    cookTime: "30 min",
    totalTime: "45 min",
    servings: 4,
    difficulty: "Medium",
  },
  {
    id: 3,
    title: "Tiramisu",
    image: tiramisu, 
    ingredients: ["Lady fingers", "Cofee", "whipped cream", "sugar"],
    instructions: "Dip the lady fingers in coffee. Layer with cream and sugar.",
    prepTime: "10 min",
    cookTime: "35 min",
    totalTime: "35 min",
    servings: 6,
    difficulty: "Hard",
  },
];

export default recipes;
