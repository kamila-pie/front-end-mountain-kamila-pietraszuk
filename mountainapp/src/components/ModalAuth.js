import React, {useState} from "react";
import {Formik} from "formik";
import axios from "axios";
import * as Yup from 'yup';
import Error from "./Error";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const ModalAuth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log('To działa ;)');
        const url = `https://recruitment-api.pyt1.stg.jmr.pl/login`;
        const body = JSON.stringify({
            email: email,
            password: password,
        });
        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        axios.post(url, body, options)
            .then(json => {
                console.log(json)
                const reponse = JSON.parse(json);
                console.log(reponse)
                console.log(reponse.message);
                console.log(reponse.status);
                console.log(email);
            })
            .catch(error => console.log(error));
    };

    return (
        <div className={'modalWrapper'}>
            <div className={'modalContent'}>
                <h1>Are you a Mountain Knight?</h1>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={SignupSchema}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleBlur,
                          isSubmitting
                    }) => (
                        <form onSubmit={(e) => onSubmit(e)}>
                            <input
                                required
                                type="email"
                                name="email"
                                placeholder={"Email"}
                                onChange={(e) => onEmailChange(e)}
                                onBlur={handleBlur}
                                className={touched.email && errors.email ? "formInput has-error" : null}
                            />
                            <Error touched={touched.email} message={errors.email}/>
                            <input
                                required
                                type="password"
                                name="password"
                                placeholder={"Password"}
                                onChange={(e) => onPasswordChange(e)}
                                onBlur={handleBlur}
                                className={touched.password && errors.password ? "formInput has-error" : null}
                            />
                            <Error touched={touched.password} message={errors.password}/>
                            <button className={'btn'} type="submit" disabled={isSubmitting}>LOG IN</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default ModalAuth;