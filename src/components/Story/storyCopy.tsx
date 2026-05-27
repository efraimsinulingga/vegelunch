import { motion } from "motion/react";

const StoryCopy = () => {
  return (
    <div className="px-4 py-30 md:px-16 md:py-30 bg-color-light flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
      <div className="w-full md:w-4/12 flex justify-center">
        <img
          src="./chef.jpg"
          className="h-full w-full object-cover rounded-lg"
        ></img>
      </div>
      <div className="w-full md:w-8/12 flex flex-col justify-center items-center md:items-start text-center md:text-left px-0 py-8 md:px-16 md:py-6">
        <span className="text-3xl text-stone-600">Our Story</span>
        <motion.h2
          transition={{ duration: 0.5, ease: "linear" }}
          initial={{ opacity: 0.2, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="title text-7xl text-stone-600 leading-thight"
        >
          Eat Fresh, Live Well, Pure Vegan Happiness
        </motion.h2>
        <motion.p
          transition={{ duration: 0.5, ease: "linear" }}
          initial={{ opacity: 0.2, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl text-stone-600 leading-thight md:leading-normal mt-8 md:mt-4"
        >
          At Vegelunch, we believe that food should be a celebration of nature’s
          finest ingredients. Our mission is simple: to provide delicious,
          nutrient-packed vegan meals that are good for you and the planet. From
          fresh vegetables and organic grains to plant-based proteins, every
          dish is crafted with care, love, and sustainability.
        </motion.p>
      </div>
    </div>
  );
};

export default StoryCopy;
