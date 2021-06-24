import * as Yup from 'yup';

const formSchema = Yup.object().shape({
    username: Yup
        .string()
        .username("Enter a username.")
        .required("Must include username."),
    password: Yup
        .string()
        .required("Password required")
        .min(6, "Must be at least 6 characters long."),
    phonenumber: Yup
        .string()
        .required("Phone number needed")
        .min(10, "Must include 10 digits.")
})

export default formSchema;