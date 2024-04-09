import Form from "./components/form/Form";
import HeroImage from "./components/hero/HeroImage";
import Navbar from "./components/nav/Navbar";
import Section2 from "./components/section2/Section2";
import phone from "../public/images/icon-phone.svg";
import email from "../public/images/icon-email.svg";
import instagram from "../public/images/instagram .svg";
import facebook from "../public/images/facebook.svg";
import twitter from "../public/images/twitter.svg";
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
        <article className="w-full min-h-[350px] bg-DesaturatedBlue flex flex-col justify-center items-center gap-6 py-[60px]">
          <h2 className="text-white text-[1.1rem] font-semibold tracking-wide">
            Get early access today
          </h2>
          <p className="text-white font-light text-center w-[80%]">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
          <Form />
        </article>
      </main>
      <footer className="w-full bg-VeryDarkBlue min-h-[300px] pt-20 pb-20">
        {/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
        <div className="flex flex-col justify-between w-[318px] h-[130px] m-auto mb-[50px]">
          <svg width="166" height="49" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="a" d="M.014.03h93.96v48.29H.015z" />
            </defs>
            <g fill="#fff" fill-rule="evenodd">
              <path
                d="M0 14.13v.123l27.95 13.13L56 14.209v-.033L27.95 1 0 14.13zm10.077.062L27.95 5.795l17.877 8.397-17.877 8.396-17.874-8.396zM27.95 32.483L0 19.55v4.784l27.95 12.964L56 24.289v-4.784L27.95 32.483zm0 9.703L0 29.25v4.783L27.95 47 56 33.99v-4.784l-28.05 12.98z"
                fill="#fff"
              />
              <g transform="translate(72)">
                <mask id="b" fill="#fff"></mask>
                <path
                  d="M87.56 24.152a8.1 8.1 0 0 0-2.161-5.573 7.259 7.259 0 0 0-2.34-1.673 6.864 6.864 0 0 0-2.85-.601c-1.01 0-1.961.2-2.852.601a7.257 7.257 0 0 0-2.34 1.673 8.102 8.102 0 0 0-2.16 5.574 8.102 8.102 0 0 0 2.16 5.573 7.257 7.257 0 0 0 2.34 1.672 6.864 6.864 0 0 0 2.851.602c1.01 0 1.96-.2 2.852-.602a7.259 7.259 0 0 0 2.339-1.672 8.1 8.1 0 0 0 2.16-5.574zm6.415 0c0 1.932-.357 3.723-1.07 5.373a13.098 13.098 0 0 1-2.94 4.28c-1.247 1.205-2.71 2.156-4.388 2.854-1.678.699-3.468 1.048-5.369 1.048-1.9 0-3.683-.349-5.346-1.048a13.863 13.863 0 0 1-4.366-2.876 13.351 13.351 0 0 1-2.94-4.302c-.713-1.65-1.07-3.426-1.07-5.329 0-1.873.364-3.634 1.092-5.284a13.92 13.92 0 0 1 2.962-4.325 13.671 13.671 0 0 1 4.367-2.898 13.552 13.552 0 0 1 5.301-1.048c1.901 0 3.69.35 5.369 1.048 1.678.698 3.14 1.65 4.388 2.854 1.248 1.204 2.228 2.638 2.94 4.302.713 1.665 1.07 3.449 1.07 5.351zM64.258 36.905a8.6 8.6 0 0 1-1.715.58c-.638.148-1.3.222-1.982.222a9.84 9.84 0 0 1-2.74-.379 6.003 6.003 0 0 1-2.295-1.226c-.653-.565-1.173-1.3-1.56-2.207-.385-.907-.578-2-.578-3.277V.029h6.549v29.474c0 1.07.215 1.806.646 2.207.43.401.943.602 1.537.602.742 0 1.455-.223 2.138-.669v5.262zM50.492 11.22L38.908 41.854c-.861 2.289-1.99 3.939-3.386 4.95-1.396 1.01-3.06 1.515-4.99 1.515-.297 0-.623-.022-.98-.066a7.352 7.352 0 0 1-1.025-.201l-2.138-5.975a8.486 8.486 0 0 0 1.56.557c.534.134 1.039.201 1.514.201 1.01 0 1.93-.23 2.762-.691.832-.46 1.47-1.315 1.916-2.564l.891-2.586-9.935-25.773h6.995l5.925 16.588 5.57-16.588h6.905zM23.538 7.342H6.786v8.294h16.529v5.618H6.785v15.784H.015V1.412h23.524v5.93z"
                  fill="#FFF"
                />
              </g>
            </g>
          </svg>
          <div className="flex gap-4 items-center font-light">
            <img src={phone} alt="phone" className="w-[18px] h-[18px]" />
            <p className="text-white">Phone: +1-543-123-4567</p>
          </div>
          <div className="flex gap-4 items-center  font-light">
            <img src={email} alt="email" className="w-[24px] h-[18px]" />
            <p className="text-white">example@fylo.com</p>
          </div>
        </div>
        <div className="text-white w-[318px] m-auto mb-5 font-light">
          <ul>
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Jobs</a>
            </li>
            <li>
              <a>Press</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <div className="text-white w-[318px] m-auto font-light mb-5">
          <ul>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Terms</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-5 justify-center">
          <div className="border border-white p-2 rounded-full">
            <img
              src={facebook}
              alt="Facebook Logo"
              className="w-[20px] h-[20px]"
            />
          </div>
          <div className="border border-white p-2 rounded-full">
            <img src={twitter} alt="Twitter Logo" width={20} height={20} />
          </div>
          <div className="border border-white p-2 rounded-full">
            <img src={instagram} alt="Instagram Logo" width={20} height={20} />
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
