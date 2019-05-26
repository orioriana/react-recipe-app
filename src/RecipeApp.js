import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 0,
          title: "Roasted Citrus Chicken Burritos",
          instructions: "Spread the tortillas on a counter. Spread each with a strip of warm black beans down the center. Top with the chicken (warmed), crema, avocado, Cabbage Slaw, Mexican cheeses, Chipotle Salsa, and BBQ potato chips. Fold the bottom quarter of each tortilla up and then roll from the side into a cylinder. In a medium hot pan, melt the butter and place the burrito in the pan, folded side down, and toast until golden brown on each side.",
          ingredients: ["4 Flour Tortillas", "1 cup Refried Black Beans", "2 cups shredded Roast Achiote Citrus Chicken", "2 tablespoons Crema", "2 cups Cabbage Slaw", "1 Avocado", "Cheese", "Chipotle Salsa", "1/4 butter", "BBQ Chips"],
          img: "https://cdn.crownmediadev.com/cc/5c/2451b7c04581adc9efa48190efac/home-family-roasted-citrus-chicken-burrito-with-cabbage-slaw.jpg"
        },
        {
          id: 1,
          title: "Green Thai Curry",
          instructions: "Heat oil in a heavy based skillet or pot over medium high heat. Add curry paste and cook for 2 to 3 minutes until it mostly dries out. Don't breath in the fumes!!. Add chicken broth and coconut milk, mix to dissolve paste. Add snow peas, cook 2 minutes until a bit softened, then stir through basil and lime juice. Sauce should have reduced but will still be a be on the thin side, not thick - that's how it's should be. DO NOT keep simmering - sauce will darken.",
          ingredients: ["Coconut milk", "Chicken or vegetable broth", "Chicken", "Asian (Japanese) Eggplant", "Snow peas", "Fish sauce", "Sugar", "Kaffir Lime leaves"],
          img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/thaigreencurry_67788_16x9.jpg"
        },
        { 
          id: 2,
          title: "Avocado Toast",
          instructions: "Toast bread.  Slice avocado and spread on bread.  Add salt, oil, and pepper to taste.",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          img: "https://www.inspiredtaste.net/wp-content/uploads/2018/08/Avocado-Toast-Recipe-1200.jpg"
        }
      ],
      nextRecipeId: 3,
      showForm: false
    }
    
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  
  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = {...recipe, id: this.state.nextRecipeId};
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    });
  }
  
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id);
    this.setState({recipes});
  }
  
  render() {
    const {showForm} = this.state;
    return (
      <div className="App">
        <Navbar onNewRecipe={() => this.setState({showForm: true})} />
        { showForm ?
            <RecipeInput 
              onSave={this.handleSave}
              onClose={() => this.setState({showForm: false})}  
            /> :
            null }
        <RecipeList onDelete={this.onDelete} recipes={this.state.recipes} />
      </div>
    );
  }
}

export default RecipeApp;
