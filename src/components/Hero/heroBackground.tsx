const HeroBackground = () => {
  return (
    <div className="absolute top-80 md:top-0 right-0 top-0 w-full md:w-3/6 h-screen -z-1">
      <img
        src="./bg.jpg"
        className="w-full h-screen object-cover object-top"
      ></img>
    </div>
  );
};

export default HeroBackground;
