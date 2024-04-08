import Form from "./components/form/Form";
import HeroImage from "./components/hero/HeroImage";
import Navbar from "./components/nav/Navbar";
import imageTwo from "../public/images/illustration-2.svg";
import arrow from "../public/images/icon-arrow.svg";
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <HeroImage />
        <article className="mb-[90px]">
          <h1 className="font-Header text-center text-2xl text-VeryDarkBlue w-[318px] m-auto  font-semibold mb-[32px] mt-[64px]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className=" text-[0.95rem] leading-6 tracking-[0.015rem] text-VeryDarkBlue w-[318px] m-auto text-center mb-[48px]">
            {" "}
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <Form />
        </article>
        <article>
          <div
            className="w-full h-[114px] bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url(/public/images/bg-curve-mobile.svg)",
            }}
          ></div>
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
              <p className="  text-VeryDarkBlue text-left w-[318px] m-auto">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs. <br />{" "}
                <br /> Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
              <div className="w-[174px] m-auto border-b-[1px] border-ModerateCyan">
                <a href="#" className="flex justify-between items-center gap-2">
                  <p className="text-ModerateCyan">See How Fylo works</p>

                  <img src={arrow} alt="arrow" />
                </a>
              </div>
              {/* <hr className="border-ModerateCyan border-1 w-[170px] m-auto" /> */}
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default App;
