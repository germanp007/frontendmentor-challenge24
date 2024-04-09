import imageTwo from "../../../public/images/illustration-2.svg";
import arrow from "../../../public/images/icon-arrow.svg";

const Section = () => {
  return (
    <section className="bg-LightGrayishBlue w-full min-h-[300px] py-1 pb-5">
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
        <div className="w-[174px] m-auto border-b-[1px] border-ModerateCyan">
          <a href="#" className="flex justify-between items-center gap-2">
            <p className="text-ModerateCyan">See How Fylo works</p>

            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Section;
