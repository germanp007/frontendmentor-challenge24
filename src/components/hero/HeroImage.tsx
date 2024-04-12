import heroImage from "../../../public/images/illustration-1.svg";
const HeroImage = () => {
  return (
    <article className="flex justify-center md:order-2 flex-1">
      <img
        src={heroImage}
        alt="Hero"
        className="w-[90%] h-auto max-w-[505px] md:h-[400px]"
      />
    </article>
  );
};

export default HeroImage;
