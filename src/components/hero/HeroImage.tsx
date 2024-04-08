import heroImage from "../../../public/images/illustration-1.svg";
const HeroImage = () => {
  return (
    <article className="flex justify-center">
      <img src={heroImage} alt="Hero" className="w-[90%] h-[250px]" />
    </article>
  );
};

export default HeroImage;
