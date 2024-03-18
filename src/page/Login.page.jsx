import React, { useEffect, useState } from "react";
import { ButtonComponents, ContainerComponents, ErrorComponents, FormComponents, LoadingComponents } from "../components";
import { useNavigate} from "react-router-dom";
import { Login, Register } from "../service/auth.service";
import useApi from "../hook/useApi";
import PreventComponents from "../components/Prevent.components";

const LoginPage = () => {
  const nav = useNavigate();
  const {handleApi, loading, data, error} = useApi(Login);
  const [formData, setFormData] = useState({email: "", password: ""})
  const handleInput = (e) => {
    // console.log(e.target.value, e.target.name);
    //passing as key and value
    setFormData(pre => ({...pre, [e.target.name]: e.target.value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    handleApi(formData);
  }
  useEffect(() => {
      if(data){
        nav("/home")
      }
  }, [data])
  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem("auth")}>
      <ContainerComponents>
      {loading ? <LoadingComponents /> : 
      <div className="center">
      <div className=" w-2/5 max-md:w-2/3">
        <h1 className=" font-serif text-2xl font-bold mb-10 text-center">
          Login To Your Contact
        </h1>
        {error && <ErrorComponents />}
        <form className=" space-y-7" onSubmit={handleSubmit}>
          <FormComponents
            value={formData.email}
            onChange={handleInput}
            type={"email"}
            name={"email"}
            label={"Enter your email"}
            placeholder={"example@gmail.com"}
          />
          <FormComponents
            value={formData.password}
            onChange={handleInput}
            type={"password"}
            name={"password"}
            label={"Enter your password"}
            placeholder={"password"}
          />
          <ButtonComponents type="submit">Login</ButtonComponents>
          <p className=" text-center text-sm">You have no account?
            <button onClick={() => {
              nav("/register")
            }} className=" text-blue-600 italic ms-2 underline">Register Here</button>
          </p>
        </form>
      </div>
    </div>
      }
      
    </ContainerComponents>
    </PreventComponents>
  );
};

export default LoginPage;
