import imageTwo from "../../../public/images/illustration-2.svg";
import arrow from "../../../public/images/icon-arrow.svg";
import quoteImage from "../../../public/images/icon-quotes.svg";
import avatar from "../../../public/images/avatar-testimonial.jpg";
const Section2 = () => {
  return (
    <section className="bg-LightGrayishBlue w-full min-h-[300px] py-1 pb-[105px] ">
      <img
        src={imageTwo}
        alt="image of people working together"
        className="w-[90%] h-auto mx-auto mb-[7rem]"
      />
      <div>
        <h2 className="font-Header text-[1.1rem] text-VeryDarkBlue font-semibold text-center mb-8">
          {" "}
          Stay productive, wherever you are
        </h2>
        <p className="  text-VeryDarkBlue text-left w-[318px] mx-auto mb-10 text-[15.2px]">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs. <br /> <br /> Securely
          share files and folders with friends, family and colleagues for live
          collaboration. No email attachments required!
        </p>
        <div className="w-[174px] mx-auto mb-[60px] border-b-[1px] border-ModerateCyan">
          <a href="#" className="flex justify-between items-center gap-2">
            <p className="text-ModerateCyan">See How Fylo works</p>

            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
      <div className="card bg-white w-[90%] h-[217px] m-auto px-2 py-8 rounded-[5px]">
        <figure className="px-4 h-[23px]">
          <img src={quoteImage} alt="quote" />
        </figure>
        <p className="text-[.85rem] w-[90%] m-auto mb-3 leading-6">
          Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine.
        </p>
        <div className="text-VeryDarkBlue flex gap-2 w-[90%] m-auto">
          <img src={avatar} alt="avatar" className="rounded-full h-8 w-8" />
          <div>
            <h2 className="text-[.7rem] font-bold">Kyle Burton</h2>
            <h3 className="text-[.55rem] font-light">Founder & CEO, Huddle</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
