interface WrapperProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Wrapper = (props: WrapperProps) => {
  return (
    <div
      onClick={props.toggleSidebar}
      className={`fixed top-0 lef-0 w-full h-full bg-white opacity-70 z-20 ${
        !props.isOpen ? "hidden" : "block"
      }`}
    ></div>
  );
};

export default Wrapper;
