import { RecipeDetail } from "../../types/RecipeDetail";
import Wrapper from "./wrapper";

interface RecipeDetailContainerProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  data: RecipeDetail | undefined;
}

const RecipeDetailContainer = (props: RecipeDetailContainerProps) => {
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
            {props.data?.name}
          </h1>
          <p className="text-sm text-stone-600">
            {props.data?.area} &bull; {props.data?.category}
          </p>
          <p className="text-xl text-stone-600 mt-4">
            {props.data?.instruction}
          </p>
        </div>
      </div>
    </>
  );
};

export default RecipeDetailContainer;
