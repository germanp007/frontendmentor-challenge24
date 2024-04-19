import { FC, FormEvent, useState } from "react";

type Props = {
  placeholder: string;
  title: string;
};

const Form: FC<Props> = ({ placeholder, title }) => {
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
    <div
      className={`${
        placeholder === "email@example.com" ? "w-[50%] items-start" : ""
      }"`}
    >
      <form
        className={`flex flex-col ${
          placeholder === "email@example.com" ? "items-start" : "items-center"
        } lg:${
          placeholder === "email@example.com" ? "" : "flex-row"
        } lg:justify-center lg:gap-4`}
        onSubmit={(e) => {
          e.preventDefault();
          handleEmail(email);
        }}
      >
        <input
          type="email"
          name="email"
          value={email}
          placeholder={placeholder}
          className={`border border-VeryDarkBlue h-11 rounded-sm px-5 mb-4 focus:outline-none lg:m-0 lg:${
            placeholder === "email@example.com" ? "w-full" : "w-[318px]"
          }`}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-BrightBlue text-white w-[318px] h-11 rounded-sm lg:w-[200px]"
        >
          {title}
        </button>
      </form>
    </div>
  );
};

export default Form;
