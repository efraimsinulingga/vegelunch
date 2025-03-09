interface RecipeProps {
  id: string;
  name: string;
  image: string;
  onClickRecipe: () => void;
}

const Recipe = (props: RecipeProps) => {
  return (
    <div className="card cursor-pointer" onClick={props.onClickRecipe}>
      <img
        className="rounded-lg h-50 w-full object-cover object-center"
        src={props.image}
      ></img>
      <h2 className="title text-3xl mt-4">{props.name}</h2>
    </div>
  );
};

export default Recipe;
