import "./App.css";
import { useState, useEffect, useRef } from "react";
import TopLoader from "./components/Loader/topLoader";
import MainHeader from "./components/Header/mainHeader";
import HeroCopy from "./components/Hero/heroCopy";
import StoryCopy from "./components/Story/storyCopy";
import FooterContainer from "./components/Footer/footerContainer";
import MenuContainer from "./components/FullMenu/menuContainer";
import BestSellingContainer from "./components/BestSelling/bestSellingContainer";
import { getDetailRecipes, getRecipes } from "./services/api";
import Recipe from "./types/Recipe";
import veganMenu from "./assets/data";
import MenuItem from "./types/MenuItem";
import RecipeDetailContainer from "./components/Sidebar/recipeDetailContainer";
import { RecipeDetail } from "./types/RecipeDetail";
import ReservationContainer from "./components/Sidebar/reservationContainer";
import { useSelector } from "react-redux";

function App() {
  const menus: MenuItem[] = veganMenu;

  const [isLoading, setIsLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarRecipeOpen, setSidebarRecipeOpen] = useState(false);

  const [category, setCategory] = useState("Best");
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [menusFilter, setMenusFilter] = useState<MenuItem[]>([]);
  const [menusBestFilter, setMenusBestFilter] = useState<MenuItem[]>([]);

  const [recipesDetail, setRecipesDetail] = useState<RecipeDetail>();

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleRecipeSidebar = () => {
    setSidebarRecipeOpen((prev) => !prev);
  };

  const handleChangeCategory = (categoryFilter: string) => {
    setCategory(categoryFilter);
  };

  const fetchRecipes = async () => {
    try {
      const data = await getRecipes();

      if (data.meals.length === 0) return;

      const limitData = data.meals.slice(0, 8);

      let dataRecipes: Recipe[] = limitData.map((item: any) => ({
        id: item.idMeal,
        name: item.strMeal,
        image: item.strMealThumb,
      }));

      setIsLoading(false);

      setRecipes(dataRecipes);
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching articles:", error);
    }
  };

  const fetchDetailRecipes = async (recipeData: Recipe) => {
    setIsLoading(true);
    try {
      const data = await getDetailRecipes(recipeData.id);

      if (data.meals.length === 0) return;

      setIsLoading(false);

      const dataRecipeDetail = data.meals.map((item: any) => ({
        id: item.idMeal,
        name: item.strMeal,
        category: item.strCategory,
        area: item.strArea,
        instruction: item.strInstructions,
        image: item.strMealThumb,
        sourceUrl: item.strSource,
      }));

      setRecipesDetail(dataRecipeDetail[0]);
      toggleRecipeSidebar();
    } catch (error) {
      setIsLoading(false);
      console.error("Error fetching articles:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, [category]);

  const fetchBest = () => {
    const data = handleFilterData("Best");
    setMenusBestFilter(data);
  };

  const fetchCategory = () => {
    const data = handleFilterData(category);
    setMenusFilter(data);
  };

  const handleFilterData = (filterCategory: string) => {
    const data = [...menus];
    let filteredData: MenuItem[] = [];
    if (filterCategory === "Best") {
      filteredData = data.filter((item) => item.isBestSeller === true);
    } else {
      filteredData = data.filter((item) => item.category === filterCategory);
    }

    return filteredData;
  };

  const menuItem = useSelector(
    (state: { menuReservation: MenuItem[] }) => state.menuReservation
  );

  const aboutRef = useRef<HTMLDivElement>(null);
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const menuRef = useRef<HTMLDivElement>(null);
  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchBest();
    fetchRecipes();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <TopLoader isActive={isLoading}></TopLoader>
      <div className="h-screen">
        <MainHeader
          scrollToAbout={scrollToAbout}
          scrollToMenu={scrollToMenu}
          scrollToContact={scrollToContact}
          toggleSidebar={toggleSidebar}
        ></MainHeader>
        <HeroCopy scrollToMenu={scrollToMenu}></HeroCopy>
      </div>
      <section ref={aboutRef}></section>
      <StoryCopy></StoryCopy>
      <BestSellingContainer
        dataMenus={menusBestFilter}
        scrollToMenu={scrollToMenu}
      ></BestSellingContainer>
      <section ref={menuRef}></section>
      <MenuContainer
        dataMenus={menusFilter}
        category={category}
        handleChangeCategory={handleChangeCategory}
      ></MenuContainer>
      <FooterContainer
        handleRecipeDetail={fetchDetailRecipes}
        dataRecipes={recipes}
      ></FooterContainer>
      <section ref={contactRef}></section>
      <RecipeDetailContainer
        isOpen={sidebarRecipeOpen}
        toggleSidebar={toggleRecipeSidebar}
        data={recipesDetail}
      ></RecipeDetailContainer>
      <ReservationContainer
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
      ></ReservationContainer>

      {menuItem.length > 0 && (
        <button
          onClick={toggleSidebar}
          type="button"
          className="flex justify-center items-center cursor-pointer text-white bg-color-secondary rounded-full shadow-xl text-stone-700 py-2 px-3 fixed right-8 bottom-8"
        >
          <div className="bg-color-primary rounded-full size-6 me-2">
            {menuItem.length}
          </div>
          BOOKING
        </button>
      )}
    </div>
  );
}

export default App;
