import { FormEvent, useState } from "react";

const Form = () => {
  const [email, setEmail] = useState<string>("");

  const handleEmail = (e: FormEvent<HTMLFormElement> | string) => {
    if (typeof e === "string") {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = regex.test(e);
      if (isValidEmail) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <div>
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          handleEmail(email);
        }}
      >
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email..."
          className="w-[318px] border border-VeryDarkBlue h-11 rounded-sm px-5 mb-4 focus:outline-none"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-BrightBlue text-white w-[318px] h-11 rounded-sm"
        >
          Get Started
        </button>
      </form>
    </div>
  );
};

export default Form;
