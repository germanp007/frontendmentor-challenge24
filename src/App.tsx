import Form from "./components/form/Form";
import HeroImage from "./components/hero/HeroImage";
import Navbar from "./components/nav/Navbar";
import imageTwo from "../public/images/illustration-2.svg";
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pb-7">
        <HeroImage />
        <article className="mb-[90px]">
          <h1 className="font-Header text-center text-2xl text-VeryDarkBlue w-[318px] m-auto  font-semibold mb-[32px] mt-[64px]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="font-Body text-[0.95rem] leading-6 tracking-[0.015rem] text-VeryDarkBlue w-[318px] m-auto text-center mb-[48px]">
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
          <section className="bg-LightGrayishBlue w-full min-h-[300px] py-1">
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
              <p className="font-Body text-VeryDarkBlue text-left w-[318px] m-auto">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs. <br />{" "}
                <br /> Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required!
              </p>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default App;
