import HeroImage from "./components/hero/HeroImage";
import Navbar from "./components/nav/Navbar";
const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="pb-7">
        <HeroImage />
        <article>
          <h1 className="font-Header text-center text-2xl text-VeryDarkBlue w-[318px] m-auto  font-semibold mb-[32px] mt-[64px]">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="font-Body text-[0.95rem] leading-6 tracking-[0.015rem] text-VeryDarkBlue w-[318px] m-auto text-center mb-[48px]">
            {" "}
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div>
            <form className="flex flex-col items-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                className="w-[318px] border border-VeryDarkBlue h-11 rounded-sm px-5 mb-4 focus:outline-none"
              />
              <button className="bg-BrightBlue text-white w-[318px] h-11 rounded-sm">
                Get Started
              </button>
            </form>
          </div>
        </article>
      </main>
    </>
  );
};

export default App;
