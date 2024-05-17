import React, { useState, ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { UserLoginInfo, loginUser, signupUser } from "./AuthSlice";
import Header from "../../components/Header";
import Input from "../../components/Input"; 
import { loginFields } from "../../constants/formFields";
import { Field } from "../../types/types";
import SubmitComponent from "../../components/SubmitComponent";
import FormExtra from "../../components/ExtraFormElements";



const fields: Field[] = loginFields;

const Login: React.FC = () => {
  const dispatch = useAppDispatch()
    const [loginState, setLoginState] = useState<{ [key: string]: string }>(
        Object.fromEntries(fields.map((field) => [field.id, ""]))
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginState({ ...loginState, [e.target.id]: e.target.value });
    };

    const handleSubmit=(e:any)=>{
      e.preventDefault();
      dispatch(loginUser(loginState as unknown as UserLoginInfo))
  }

    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md shadow-md p-3 w-full space-y-8">
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/register"
            />

            <form className="mt-8 space-y-6">
                <div className="-space-y-px">
                    {fields.map((field) => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={loginState[field.id]}
                            labelText={field.labelText}
                            labelFor={field.labelFor}
                            id={field.id}
                            name={field.name}
                            type={field.type}
                            isRequired={field.isRequired}
                            placeholder={field.placeholder}
                        />
                    ))}
                </div>
                <FormExtra/>
        <SubmitComponent handleSubmit={handleSubmit} text="Login"/>
            </form>
        </div>
        </div>
    );
};

export default Login;
