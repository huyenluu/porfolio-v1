import { useField, Formik } from 'formik';
import { useState } from 'react';
import { sendContactForm } from '../../lib/api';
import Spinner from '../../components/spinner';
import useToast from '../../components/toast';

const InputField = (props) => {
    const [field, meta] = useField(props);
    const inputStyles =
        'w-full py-4 px-6 border-b border-white bg-transparent text-base text-white placeholder:uppercase placeholder:opacity-50 focus:border-green focus:outline-none focus:invalid:border-red focus:invalid:text-red';
    return (
        <div className="relative mb-4 group">
            <label htmlFor={props.id || props.name} className="visually-hidden">
                {props.name}
            </label>
            {props.type === 'message' ? (
                <textarea
                    {...props}
                    {...field}
                    className={inputStyles}
                ></textarea>
            ) : (
                <input {...props} {...field} className={inputStyles} />
            )}
            {meta.touched && meta.error ? (
                <>
                    <p className="text-red text-sm text-right w-full absolute">
                        {meta.error}
                    </p>
                    <img
                        src="/icon-invalid.svg"
                        alt=""
                        className="absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2"
                        width="24"
                        height="24"
                    />
                </>
            ) : null}
        </div>
    );
};

// form valiadate function
const validate = (values) => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Sorry, invalid format here';
    }
    if (!values.message) {
        errors.message = 'Required';
    }
    return errors;
};

export default function Contact() {
    const [isLoading, setIsLoading] = useState(false);
    const { showToast, ToastContainer } = useToast();
    return (
        <section id="contact" className="relative bg-grey-dark">
            <div
                className="container py-20 
                lg:flex lg:justify-between"
            >
                <div className="lg:w-[40%]">
                    <h2
                        className="mb-5 text-heading-m w-full text-center font-clamp
                        lg:text-left"
                    >
                        Contact
                    </h2>
                    <p className="text-p font-medium text-center mb-12 lg:text-left">
                        I would love to hear about your project and how I could
                        help. Please fill in the form, and I'll get back to you
                        as soon as possible.
                    </p>
                </div>
                <Formik
                    initialValues={{
                        name: '',
                        message: '',
                        email: '',
                    }}
                    validate={validate}
                    onSubmit={async (
                        values,
                        { setSubmitting, handleReset, touched }
                    ) => {
                        setIsLoading(true);
                        try {
                            await sendContactForm(values);
                            showToast('Message sent!', 'green', 2000);
                        } catch (error) {
                            showToast(error.message, 'red', 2000);
                        }
                        touched = {};
                        setSubmitting(false);
                        setIsLoading(false);
                        handleReset();
                    }}
                >
                    {(props) => (
                        <form onSubmit={props.handleSubmit}>
                            <InputField
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                            />
                            <InputField
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            <InputField
                                type="message"
                                id="message"
                                name="message"
                                placeholder="Message"
                                cols={30}
                                rows={3}
                            />
                            <div className="flex justify-end mt-8">
                                <button
                                    type="submit"
                                    disabled={
                                        !props.values.name ||
                                        !props.values.email ||
                                        !props.values.message ||
                                        isLoading
                                    }
                                    className="text-white py-2 text-heading-s uppercase cursor-pointer
                                    bg-green-gradient bg-[0_100%] bg-repeat-x bg-[length:8px_2px]
                                    transition-colors duration-200 ease-in-out
                                    hover:text-green hover:no-underline
                                    disabled:hover:text-white group
                                    relative"
                                >
                                    <span className="group-disabled:opacity-10">
                                        Send Message
                                    </span>
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {isLoading && <Spinner />}
                                    </span>
                                </button>
                            </div>
                        </form>
                    )}
                </Formik>
            </div>
            <img
                className="absolute left-0 bottom-40 -translate-x-2/3"
                src="/pattern-rings.svg"
                alt=""
                width="530"
                height="129"
            />
            <ToastContainer />
        </section>
    );
}
