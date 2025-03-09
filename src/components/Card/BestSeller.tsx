interface BestSellerProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const BestSeller = (props: BestSellerProps) => {
  return (
    <div className="card me-8 md:me-16">
      <img
        className="rounded-lg h-42 md:h-102 w-full object-cover object-center"
        src={props.image}
      ></img>
      <h2 className="title text-7xl mt-4 text-stone-700 leading-normal">
        {props.name}
      </h2>
      <p className="text-3xl text-stone-700 leading-normal">
        {props.description}
      </p>
    </div>
  );
};

export default BestSeller;
