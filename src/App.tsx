import Form from "./components/form/Form";
import HeroImage from "./components/hero/HeroImage";
import Navbar from "./components/nav/Navbar";
import Section2 from "./components/section2/Section2";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="lg:flex ">
          <HeroImage />
          <article className="mb-[90px] md:order-1 flex-1">
            <h1 className="font-Header text-center text-2xl text-VeryDarkBlue w-[318px] m-auto  font-semibold mb-[32px] mt-[64px] lg:w-[520px] lg:text-start lg:leading-[54px] lg:text-[2.5rem]">
              All your files in one secure location, accessible anywhere.
            </h1>
            <p className=" text-[0.95rem] leading-6 tracking-[0.015rem] text-VeryDarkBlue w-[318px] m-auto text-center mb-[48px] md:text-[17.6px] md:text-start md:w-[520px]">
              {" "}
              Fylo stores your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends,
              family, and co-workers.
            </p>
            <Form placeholder="Enter your email..." title="Get Started" />
          </article>
        </div>

        <article>
          <div
            className="w-full h-[114px] bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url(/public/images/bg-curve-mobile.svg)",
            }}
          ></div>
          <Section2 />
        </article>
        <article className="w-full min-h-[350px] bg-DesaturatedBlue flex flex-col justify-center items-center gap-6 py-[60px] md:flex-row">
          <div className="flex flex-col justify-start lg:w-[50%]">
            <h2 className="text-white text-[1.1rem] font-semibold tracking-wide md:text-[2rem]">
              Get early access today
            </h2>
            <p className="text-white font-light text-center w-[80%] lg:text-left">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>

          <Form placeholder="email@example.com" title="Get Started For Free" />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default App;
