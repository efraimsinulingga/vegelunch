import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../../types/MenuItem";
import Menu from "../Card/Menu";
import { addMenu } from "../../store/actions/menuActions";
import { useEffect } from "react";

interface MenuContainerProps {
  dataMenus: MenuItem[];
  category: string;
  handleChangeCategory: (categoryFilter: string) => void;
}

const MenuContainer = (props: MenuContainerProps) => {
  const menuItem = useSelector(
    (state: { menuReservation: MenuItem[] }) => state.menuReservation
  );

  const dispatch = useDispatch();

  const handleAddMenu = (itemMenu: MenuItem) => {
    const isBooked = menuItem.findIndex((item) => item.id == itemMenu.id);

    if (isBooked === -1) {
      dispatch(addMenu(itemMenu));
    }
  };

  useEffect(() => {
    console.log(menuItem);
  }, [menuItem]);

  return (
    <div className="container mx-auto py-24">
      <div className="flex justify-between">
        <h5 className="text-xl text-stone-700">Full Menu</h5>
        <div className="text-end">
          <button
            onClick={() => props.handleChangeCategory("Best")}
            type="button"
            className={`cursor-pointer text-xl px-2 text-stone-700 ${
              props.category === "Best" ? "font-bold" : "font-normal"
            }`}
          >
            Best Seller
          </button>
          <button
            onClick={() => props.handleChangeCategory("food")}
            type="button"
            className={`cursor-pointer text-xl px-2 text-stone-700 ${
              props.category === "food" ? "font-bold" : "font-normal"
            }`}
          >
            Food
          </button>
          <button
            onClick={() => props.handleChangeCategory("snack")}
            type="button"
            className={`cursor-pointer text-xl px-2 text-stone-700 ${
              props.category === "snack" ? "font-bold" : "font-normal"
            }`}
          >
            Snack
          </button>
          <button
            onClick={() => props.handleChangeCategory("drink")}
            type="button"
            className={`cursor-pointer text-xl px-2 text-stone-700 ${
              props.category === "drink" ? "font-bold" : "font-normal"
            }`}
          >
            Drink
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-8 pt-10 pb-8">
        {props.dataMenus.map((item) => {
          return (
            <Menu
              onClick={() => handleAddMenu(item)}
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              isBestSeller={item.isBestSeller}
              price={item.price}
              category={item.category}
            ></Menu>
          );
        })}
      </div>
    </div>
  );
};

export default MenuContainer;
