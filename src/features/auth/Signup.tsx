import React, { useState, ChangeEvent } from "react";
import { useAppDispatch } from "../../app/hooks";
import { UserSignupInfo, signupUser } from "./AuthSlice";
import Header from "../../components/Header";
import Input from "../../components/Input"; 
import { signupFields } from "../../constants/formFields"; 
import { Field } from "../../types/types"; 
import SubmitComponent from "../../components/SubmitComponent";

const fields: Field[] = signupFields;

const SignUp: React.FC = () => {
    const dispatch = useAppDispatch();
    const [signupState, setSignupState] = useState<{ [key: string]: string }>(
        Object.fromEntries(fields.map((field) => [field.id, ""]))
    );

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignupState({ ...signupState, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(signupUser(signupState as unknown as UserSignupInfo));
    };

    return (
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md shadow-md p-3 w-full space-y-8">
            <Header
                heading="Sign Up for an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/login"
            />

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="-space-y-px">
                    {fields.map((field) => (
                        <Input
                            key={field.id}
                            handleChange={handleChange}
                            value={signupState[field.id]}
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
                <SubmitComponent handleSubmit={handleSubmit} text="Sign Up" />
            </form>
        </div>
        </div>
    );
};

export default SignUp;
