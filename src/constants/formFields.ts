const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const signupFields = [
    {
        labelText: "First Name",
        labelFor: "first-name",
        id: "first-name",
        name: "firstName",
        type: "text",
        autoComplete: "given-name",
        isRequired: true,
        placeholder: "First Name"
    },
    {
        labelText: "Last Name",
        labelFor: "last-name",
        id: "last-name",
        name: "lastName",
        type: "text",
        autoComplete: "family-name",
        isRequired: true,
        placeholder: "Last Name"
    },
    {
        labelText: "Email address",
        labelFor: "email-address",
        id: "email-address",
        name: "email",
        type: "email",
        autoComplete: "email",
        isRequired: true,
        placeholder: "Email address"
    },
    {
        labelText: "Expertise",
        labelFor: "expertise",
        id: "expertise",
        name: "expertise",
        type: "text",
        autoComplete: "expertise",
        isRequired: true,
        placeholder: "Expertise"
    },
    {
        labelText: "Address",
        labelFor: "address",
        id: "address",
        name: "address",
        type: "text",
        autoComplete: "address",
        isRequired: true,
        placeholder: "Address"
    },
    {
        labelText: "Bio",
        labelFor: "bio",
        id: "bio",
        name: "bio",
        type: "text",
        autoComplete: "bio",
        isRequired: true,
        placeholder: "Bio"
    },
    {
        labelText: "Occupation",
        labelFor: "occupation",
        id: "occupation",
        name: "occupation",
        type: "text",
        autoComplete: "occupation",
        isRequired: true,
        placeholder: "Occupation"
    },
    {
        labelText: "Password",
        labelFor: "password",
        id: "password",
        name: "password1",
        type: "password",
        autoComplete: "new-password",
        isRequired: true,
        placeholder: "Password"
    },
    {
        labelText: "Confirm Password",
        labelFor: "confirm-password",
        id: "confirm-password",
        name: "password2",
        type: "password",
        autoComplete: "confirm-password",
        isRequired: true,
        placeholder: "Confirm Password"
    }
];


export {loginFields,signupFields}