const StoryCopy = () => {
  return (
    <div className="px-0 py-30 md:px-16 md:py-30 bg-color-light">
      <div className="w-full md:w-4/12 float-left">
        <img
          src="./chef.jpg"
          className="h-full w-full object-cover rounded-lg"
        ></img>
      </div>
      <div className="w-full md:w-8/12 float-left px-0 py-8 md:px-16 md:py-6">
        <span className="text-3xl text-stone-600">Our Story</span>
        <h2 className="title text-7xl text-stone-600 leading-normal">
          Eat Fresh, Live Well, Pure Vegan Happiness
        </h2>
        <p className="text-3xl text-stone-600 leading-normal">
          At Vegelunch, we believe that food should be a celebration of nature’s
          finest ingredients. Our mission is simple: to provide delicious,
          nutrient-packed vegan meals that are good for you and the planet. From
          fresh vegetables and organic grains to plant-based proteins, every
          dish is crafted with care, love, and sustainability.
        </p>
      </div>
      <div className="clear-both"></div>
    </div>
  );
};

export default StoryCopy;
