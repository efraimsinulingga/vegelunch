import { formatToIDR } from "../../config/util";

interface MenuProps {
  id: string;
  name: string;
  image: string;
  isBestSeller: boolean;
  price: number;
  category: string;
  onClick: () => void;
}

const Menu = (props: MenuProps) => {
  return (
    <div className="card mb-8">
      <div className="image h-50 relative">
        <img
          className="rounded-lg h-full w-full object-cover object-center"
          src={props.image}
        ></img>
        {props.isBestSeller && (
          <span className="text-sm absolute top-38 left-4 z-16 bg-color-light rounded-full shadow-lg text-stone-700 px-6 py-2">
            Best Seller
          </span>
        )}
      </div>
      <h2 className="title text-3xl text-stone-700 mt-6">{props.name}</h2>
      <p className="text-xl text-stone-700 pt-2">{formatToIDR(props.price)}</p>

      <button
        onClick={props.onClick}
        type="button"
        className="cursor-pointer text-center text-xl text-stone-700 border-1 border-color-secondary rounded-full w-full py-2 mt-6 transition-transform duration-500 ease-in-out transform hover:translate-y-[-8px] hover:text-stone-800"
      >
        BOOK
      </button>
    </div>
  );
};

export default Menu;
