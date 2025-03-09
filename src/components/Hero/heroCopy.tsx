import HeroBackground from "./heroBackground";
import * as motion from "motion/react-client";

interface HeroCopyProps {
  scrollToMenu: () => void;
}

const HeroCopy = (props: HeroCopyProps) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="pt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <h1 className="title text-7xl color-primary leading-normal">
              Taste the Freshness of Vegan Delights
            </h1>
          </motion.div>
          <p className="text-3xl w-full md:w-3/5 mt-8 text-stone-400 leading-normal">
            From farm to table – Discover the true flavors of plant-based
            cuisine that nourish your body and soul.
          </p>
          <button
            onClick={props.scrollToMenu}
            type="button"
            className="cursor-pointer mt-10 bg-color-light rounded-full shadow-lg text-stone-700 px-8 py-3"
          >
            Explore Our Menu
          </button>
        </div>
      </div>
      <HeroBackground></HeroBackground>
    </>
  );
};

export default HeroCopy;
