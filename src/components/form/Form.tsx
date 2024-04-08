const Form = () => {
  return (
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
  );
};

export default Form;
