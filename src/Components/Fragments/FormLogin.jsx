import Button from "../Elements/Button";
import InputForm from "../Elements/Input";

const FormLogin = () => {
    return (
        <form action="">
          <InputForm 
          label="Email" 
          type="email" 
          placeholder="example@gmail.com" 
          name="email"
          />
          <InputForm 
          label="Password" 
          type="password" 
          placeholder="********" 
          name="password "
          />
          <Button className ="bg-blue-600 p-2 flex justify-center w-full">Login</Button>
        </form>
    )
};

export default FormLogin; 