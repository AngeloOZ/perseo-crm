import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router, useForm, usePage } from "@inertiajs/react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

export default function Dashboard({ auth }) {
    // useForm({});
    const { props } = usePage();
    console.log(props);

    const submitForm = (values) => {
        console.log(values);

        router.post(route("test.insert"), values);

        // const toast = Swal.mixin({
        //     toast: true,
        //     position: "top",
        //     showConfirmButton: false,
        //     timer: 3000,
        // });
        // toast.fire({
        //     icon: "success",
        //     title: "Form submitted successfully",
        //     padding: "10px 20px",
        // });
    };

    const SubmittedForm = Yup.object().shape({
        fullName: Yup.string().required("Please fill the Name"),
    });

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="panel">
                            <Formik
                                initialValues={{
                                    fullName: "",
                                }}
                                validationSchema={SubmittedForm}
                                onSubmit={submitForm}
                            >
                                {({
                                    errors,
                                    submitCount,
                                    touched,
                                    setErrors,
                                }) => (
                                    <Form className="space-y-5">
                                        {Object.keys(props.errors).length > 0 &&
                                            setErrors(props.errors)}
                                        <div
                                            className={
                                                submitCount
                                                    ? errors.fullName
                                                        ? "has-error"
                                                        : "has-success"
                                                    : ""
                                            }
                                        >
                                            <label htmlFor="fullName">
                                                Full Name{" "}
                                            </label>
                                            <Field
                                                name="fullName"
                                                type="text"
                                                id="fullName"
                                                placeholder="Enter Full Name"
                                                className="form-input"
                                            />

                                            {submitCount ? (
                                                errors.fullName ? (
                                                    <div className="text-danger mt-1">
                                                        {errors.fullName}
                                                    </div>
                                                ) : (
                                                    <div className="text-success mt-1">
                                                        Looks Good!
                                                    </div>
                                                )
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary !mt-6"
                                        >
                                            Submit Form
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
