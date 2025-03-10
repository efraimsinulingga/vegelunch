import RecipeType from "../../types/Recipe";
import Recipe from "../Card/Recipe";
import FooterCopy from "./footerCopy";
import FooterMeta from "./footerMeta";

interface FooterContainerProps {
  dataRecipes: RecipeType[];
  handleRecipeDetail: (recipeData: RecipeType) => void;
}

const FooterContainer = (props: FooterContainerProps) => {
  return (
    <div className="bg-color-light mt-60">
      <div className="container mx-auto relative px-4 md:px-0">
        <div className="absolute w-full h-120 -top-60 left-0">
          <img
            src="./bg-restaurant.jpg"
            className="w-full h-full object-cover rounded-lg shadow-xl"
          ></img>
        </div>
        <div className="py-36"></div>
        <FooterCopy></FooterCopy>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-10 pb-8">
          {props.dataRecipes.map((item) => {
            return (
              <Recipe
                onClickRecipe={() => props.handleRecipeDetail(item)}
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
              ></Recipe>
            );
          })}
        </div>
        <div className="py-8"></div>
        <hr></hr>
        <FooterMeta></FooterMeta>
      </div>
    </div>
  );
};

export default FooterContainer;
