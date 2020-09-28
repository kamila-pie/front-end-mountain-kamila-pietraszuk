import React, {useState} from "react";
import {Formik} from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Imię musi zawierać min. 2 znaki")
        .max(15, "Imię może zawierać max. 25 znaków")
        .required("Podane imię jest nieprawidłowe!")
        .matches(/^[a-zA-Z]*$/, "Podaj tylko swoje imię"),
    email: Yup.string()
        .email("Podany email jest nieprawidołowy!")
        .max(45, "Max. 45 znaków")
        .required("Musisz podać swój e-mail."),
});

const ModalAuth = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    return (
        <div className={'modalWrapper'}>
            <div className={'modalContent'}>
                <h1>Are you a Mountain Knight?</h1>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) {
                            errors.email = 'Invalid email address';
                        }
                        return errors;
                    }}

                    onSubmit={(values, {setSubmitting, resetForm}) => {
                        setSubmitting(true);

                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            axios.post(`https://fer-api.coderslab.pl/v1/portfolio/contact`, values, {
                                headers: {
                                    "Content-Type": "application/json",
                                },
                            })
                                .then(setIsSuccess(true))
                                .then(
                                    setTimeout(() => {
                                        setIsSuccess(false);
                                    }, 5000)
                                )
                                .catch(error => {
                                    console.log(error);
                                });
                            resetForm();
                            setSubmitting(false);
                        }, 500);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder={"Email"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <input
                                type="password"
                                name="password"
                                placeholder={"Password"}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                            />
                            {errors.password && touched.password && errors.password}
                            <button className={'btn'} type="submit" disabled={isSubmitting}>
                                LOG IN
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ModalAuth;