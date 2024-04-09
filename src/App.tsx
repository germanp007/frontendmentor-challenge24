import Form from "./components/form/Form";
import HeroImage from "./components/hero/HeroImage";
import Navbar from "./components/nav/Navbar";
import Section2 from "./components/section2/Section2";
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
          <Section2 />
        </article>
      </main>
    </>
  );
};

export default App;
