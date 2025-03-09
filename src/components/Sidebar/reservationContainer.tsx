import { ChangeEvent, useState } from "react";
import Wrapper from "./wrapper";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "../../types/MenuItem";
import MenuBooked from "../Card/MenuBooked";
import { removeMenu } from "../../store/actions/menuActions";

interface ReservationContainerProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

interface FormReservation {
  name: string;
  phone: string;
}

const ReservationContainer = (props: ReservationContainerProps) => {
  const [successMessage, setSuccessMessage] = useState("");

  const [form, setForm] = useState<FormReservation>({
    name: "",
    phone: "",
  });

  const [errorForm, setErrorForm] = useState<FormReservation>({
    name: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrorForm({ name: "", phone: "" });
    setSuccessMessage("");
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (form.name === "") {
      setErrorForm((prev) => ({
        ...prev,
        name: "Your name should be filled!",
      }));
      return;
    }
    if (form.phone === "") {
      setErrorForm((prev) => ({
        ...prev,
        phone: "Your phone should be filled!",
      }));
      return;
    }
    setSuccessMessage(
      "Your order will be served soon! Thanks for your orders!"
    );
  };

  const dispatch = useDispatch();

  const menuItem = useSelector(
    (state: { menuReservation: MenuItem[] }) => state.menuReservation
  );

  const handleRemoveMenu = (itemMenu: MenuItem) => {
    const isBooked = menuItem.findIndex((item) => item.id == itemMenu.id);

    if (isBooked !== -1) {
      dispatch(removeMenu(itemMenu));
    }
  };

  return (
    <>
      <Wrapper
        toggleSidebar={() => props.toggleSidebar()}
        isOpen={props.isOpen}
      ></Wrapper>
      <div
        id="sidebar"
        className={`overflow-y-scroll origin-right w-96 h-full fixed top-0 right-0 bg-white shadow z-30 bg-body transition-all ease-out duration-300 ${
          !props.isOpen ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="p-8">
          <div
            className="flex justify-end cursor-pointer"
            onClick={props.toggleSidebar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32px"
              viewBox="0 -960 960 960"
              width="32px"
              fill="#999999"
            >
              <path d="m336-307.69 144-144 144 144L652.31-336l-144-144 144-144L624-652.31l-144 144-144-144L307.69-624l144 144-144 144L336-307.69ZM480.13-120q-74.67 0-140.41-28.34-65.73-28.34-114.36-76.92-48.63-48.58-76.99-114.26Q120-405.19 120-479.87q0-74.67 28.34-140.41 28.34-65.73 76.92-114.36 48.58-48.63 114.26-76.99Q405.19-840 479.87-840q74.67 0 140.41 28.34 65.73 28.34 114.36 76.92 48.63 48.58 76.99 114.26Q840-554.81 840-480.13q0 74.67-28.34 140.41-28.34 65.73-76.92 114.36-48.58 48.63-114.26 76.99Q554.81-120 480.13-120Zm-.13-40q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>

          <h1 className="title text-7xl color-primary leading-normal">
            Reservation
          </h1>
          <hr></hr>
          {menuItem.map((item) => {
            return (
              <MenuBooked
                onClick={() => handleRemoveMenu(item)}
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                isBestSeller={item.isBestSeller}
                price={item.price}
                category={item.category}
              ></MenuBooked>
            );
          })}
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="mt-8 py-2 px-4 bg-gray-50 border rounded-full border-stone-300 w-full"
            onChange={handleChange}
            value={form.name}
          ></input>
          {errorForm.name !== "" && (
            <p className="ms-4 text-small text-stone-400">{errorForm.name}</p>
          )}
          <input
            name="phone"
            type="text"
            placeholder="Your phone"
            className="mt-4 py-2 px-4 bg-gray-50 border rounded-full border-stone-300 w-full"
            onChange={handleChange}
            value={form.phone}
          ></input>
          {errorForm.phone !== "" && (
            <p className="ms-4 text-small text-stone-400">{errorForm.phone}</p>
          )}
          <button
            onClick={handleSubmit}
            type="button"
            className="mt-4 cursor-pointer text-white bg-color-secondary rounded-full shadow-xl text-stone-700 p-2 w-full"
          >
            BOOKING
          </button>
          {successMessage !== "" && (
            <p className="p-2 text-stone-700 text-center">{successMessage}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ReservationContainer;
