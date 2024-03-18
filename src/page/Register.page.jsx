import React, { useEffect, useState } from "react";
import {
  ContainerComponents,
  ButtonComponents,
  FormComponents,
  LoadingComponents,
  ErrorComponents,
} from "../components";
import { useNavigate } from "react-router-dom";
import { Register } from "../service/auth.service";
import useApi from "../hook/useApi";
import PreventComponents from "../components/Prevent.components";


const RegisterPage = () => {
  const nav = useNavigate();
  const { handleApi, loading, data, error } = useApi(Register);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const handleInput = (e) => {
    setFormData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    handleApi(formData);
  };
  useEffect(() => {
    if(data){
      nav("/");
    }
  },[data])
  // console.log(loading, data, error);
  return (
    <PreventComponents fail={"/home"} check={localStorage.getItem('auth')}>
      <ContainerComponents>
      {loading ? (
        <LoadingComponents />
      ) : (
        <div className="center">
          <div className=" w-2/5 max-md:w-2/3">
            <h1 className=" font-serif text-3xl font-bold mb-10 text-center">
              Register Your Contact
            </h1>
            {error && <ErrorComponents>{error}</ErrorComponents>}
            <form className=" space-y-7" onSubmit={handleSubmit}>
              <FormComponents
                value={formData.name}
                onChange={handleInput}
                type={"name"}
                name={"name"}
                label={"Name"}
                placeholder={"Enter your name"}
              />
              <FormComponents
                value={formData.email}
                onChange={handleInput}
                type={"email"}
                name={"email"}
                label={"Email"}
                placeholder={"example@gmail.com"}
              />
              <FormComponents
                value={formData.password}
                onChange={handleInput}
                type={"password"}
                name={"password"}
                label={"Password"}
                placeholder={"Enter your password"}
              />
              <FormComponents
                value={formData.password_confirmation}
                onChange={handleInput}
                type={"password"}
                name={"password_confirmation"}
                label={`Confirm password`}
                placeholder={"It should be 8 char at least"}
              />

              <ButtonComponents type="submit">Register</ButtonComponents>
              <p className=" text-center text-sm">
                You already have an account?
                <button
                  onClick={() => {
                    nav("/");
                  }}
                  className=" text-blue-600 italic ms-2 underline"
                >
                  Login Here
                </button>
              </p>
            </form>
          </div>
        </div>
      )}
    </ContainerComponents>
    </PreventComponents>
  );
};

export default RegisterPage;
