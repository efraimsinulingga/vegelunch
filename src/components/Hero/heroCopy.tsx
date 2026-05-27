import HeroBackground from "./heroBackground";
import * as motion from "motion/react-client";

interface HeroCopyProps {
  scrollToMenu: () => void;
}

const HeroCopy = (props: HeroCopyProps) => {
  return (
    <>
      <div className="container mx-auto px-4 flex-1 flex flex-col justify-center items-center md:items-start">
        <div className="flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <h1 className="title text-7xl color-primary leading-thight">
              Taste the Freshness of Vegan Delights
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="text-3xl w-full md:w-3/5 mt-8 text-stone-400 leading-thight md:leading-normal"
          >
            From farm to table – Discover the true flavors of plant-based
            cuisine that nourish your body and soul.
          </motion.p>
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
