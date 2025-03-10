import { motion } from "motion/react";

const FooterCopy = () => {
  return (
    <div className="w-full md:w-9/12 mx-auto">
      <motion.h2
        transition={{ duration: 0.5, ease: "linear" }}
        initial={{ opacity: 0.2, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="title text-center text-7xl text-stone-600 leading-thight md:leading-normal"
      >
        Ready to Experience Vegan Perfection?
      </motion.h2>
      <motion.p
        transition={{ duration: 0.5, ease: "linear" }}
        initial={{ opacity: 0.2, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pt-8 text-center text-3xl text-stone-600 leading-thight md:leading-normal"
      >
        Join us for a fresh, sustainable, and delicious vegan meal. Whether
        you’re visiting for the first time or you’re a long-time fan, we can't
        wait to serve you!
      </motion.p>
      <motion.p
        transition={{ duration: 0.5, ease: "linear" }}
        initial={{ opacity: 0.2, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pt-32 text-center text-3xl text-stone-600 leading-thight md:leading-normal"
      >
        or are you New to Vegan Food? Try these recipes at home and experience
        it yourself!
      </motion.p>
    </div>
  );
};

export default FooterCopy;
