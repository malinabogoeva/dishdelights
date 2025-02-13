import { Link } from "react-router-dom";
import image from "../images/cafe.jpg";

function Home() {
  return (
    <div className="app-container">
    
      {/* Welcome Section */}
      <h1 className="heading">Welcome to DishDelight</h1>
      <p className="intro-text">
        Your ultimate destination for discovering, sharing, and creating mouth-watering recipes!
        Whether you are a seasoned chef or a beginner in the kitchen, DishDelight offers a space to explore
        a diverse collection of recipes from around the world.
      </p>
 {/* Featured Image */}
 <img src={image} alt="Delicious Dish" className="home-image" />
      {/* Features Section */}
      <div className="features">
        <h2 className="text">What You Can Do Here:</h2>
        <ul>
          <li> Explore a vast collection of delicious recipes, from quick snacks to gourmet meals.</li>
          <li> Create & Share your own recipes with the DishDelight community.</li>
          <li> Save Your Favorite and access them anytime from your personal collection.</li>
          <li> Connect with fellow food lovers and exchange cooking tips & tricks.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2 className="text">Start Your Culinary Journey Today! </h2>
        <p>Browse our recipe collection, or add your own unique creation to share with the world.</p>

        {/* Linked Buttons */}
        <Link to="/recipes">
          <button className="explore-button">Explore Recipes</button>
        </Link>

        <Link to="/favorites">
          <button className="add-recipe-button">Add Your Own Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
