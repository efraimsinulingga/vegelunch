import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestSeller from "../Card/BestSeller";
import MenuItem from "../../types/MenuItem";

interface BestSellingContainerProps {
  dataMenus: MenuItem[];
  scrollToMenu: () => void;
}

const BestSellingContainer = (props: BestSellingContainerProps) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.6,
    slidesToScroll: 1,
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-24 px-4 md:px-0">
        <div className="flex justify-between pb-8">
          <h5 className="text-xl text-stone-700">Our Best-Selling Dishes</h5>
          <div className="text-end">
            <button
              onClick={props.scrollToMenu}
              type="button"
              className="cursor-pointer text-xl px-2 color-secondary text-end"
            >
              See All Menu
            </button>
          </div>
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {props.dataMenus.map((item) => {
              return (
                <BestSeller
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  image={item.image}
                ></BestSeller>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default BestSellingContainer;
