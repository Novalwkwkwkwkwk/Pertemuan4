// Button Component
const Button = (props) => {
    const { children = "???", classname = "bg-blue-600 p-2 flex justify-center w-full" } = props;
  
    return (
      <button
        className={`p-5 px-10 font-semibold rounded-md ${classname} text-white`}
        type="submit"
      >
        {children}
      </button>
    );
  };

  export default Button;