const FooterMeta = () => {
  return (
    <div className="footer flex justify-center gap-4 py-16 text-stone-600 text-center">
      <span className="text-xl">[ADDRESS]</span>
      <span className="text-xl hidden md:block">&bull;</span>
      <span className="text-xl">[PHONE_NUMBER]</span>
      <span className="text-xl hidden md:block">&bull;</span>
      <span className="text-xl">[EMAIL_ADDRESS]</span>
    </div>
  );
};

export default FooterMeta;
