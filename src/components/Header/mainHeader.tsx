interface MainHeaderProps {
  toggleSidebar: () => void;
  scrollToAbout: () => void;
  scrollToMenu: () => void;
  scrollToContact: () => void;
}

const MainHeader = (props: MainHeaderProps) => {
  return (
    <div className="w-full pt-8 pb-10">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <img src="./logo.png" className="w-full md:w-[540px]" alt="Logo" />

          <div className="text-end flex justify-end gap-4 pt-6 pb-6 text-xl">
            <button
              className="cursor-pointer text-stone-700 hidden md:block"
              onClick={props.scrollToAbout}
            >
              About
            </button>
            <button
              className="cursor-pointer text-stone-700 hidden md:block"
              onClick={props.scrollToMenu}
            >
              Menu
            </button>
            <button
              className="cursor-pointer text-stone-700 hidden md:block"
              onClick={props.scrollToContact}
            >
              Contact
            </button>
            <button
              onClick={props.toggleSidebar}
              type="button"
              className="hidden md:block cursor-pointer text-white bg-color-secondary rounded-full shadow-xl text-stone-700 px-8"
            >
              Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
