import { formatToIDR } from "../../config/util";

interface MenuBookedProps {
  onClick: () => void;
  id: string;
  name: string;
  image: string;
  isBestSeller: boolean;
  price: number;
  category: string;
}

const MenuBooked = (props: MenuBookedProps) => {
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

      <div className="flex justify-between">
        <p className="text-xl text-stone-700 pt-2">
          {formatToIDR(props.price)}
        </p>
        <button
          onClick={props.onClick}
          type="button"
          className="cursor-pointer text-center text-stone-700 border-1 border-color-secondary rounded-full py-2 px-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#999999"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MenuBooked;
