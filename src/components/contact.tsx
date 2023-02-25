import anime from "animejs/lib/anime.es"
import { useState } from "react";
import { UserForm } from "../types/form.type";
import { useForm, SubmitHandler } from "react-hook-form";
import '../styles/contact.css'

const Contact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<UserForm>();
    const [submit, setSubmit] = useState<"Submit" | "Submitted ✔" | "">("Submit")

    const onSubmit: SubmitHandler<UserForm> = (data) => {
        fetch("https://emailsender-h5bl.onrender.com/email", {
            method: "POST",
            body: JSON.stringify(data)
        }).then(() => {
            anime({
                targets: ".submit",
                duration: 1000,
                easing: 'linear',
                height: "100%",
                background: "rgb(22 163 74)",
                begin: function (anim) {
                    anim.completed && setSubmit("")
                },
                complete: function (anim) {
                    anim.completed && setSubmit("Submitted ✔")
                }
            });
        })
    };

    return (
        <div className="relative w-full h-[60vh] flex flex-col justify-center min-h-screen overflow-hidden z-20 ">
            <div className=" bg-[#1d1d1d] form-container relative flex justify-center items-center z-10
             w-[90vw] md:w-2/3 lg:w-1/2 xl:w-1/4 xl:h-[60vh] m-auto rounded-md overflow-hidden ">
                <div className='h-[calc(100%-4px)] w-[calc(100%-4px)] bg-[#141414] p-6 py-10 md:py-16 xl:py-6'>
                    <h1 className="text-3xl font-semibold text-center text-white uppercase">
                        Contact me
                    </h1>
                    <form className="mt-6 text-md" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block font-semibold text-muted text-lg"
                            >
                                Name
                            </label>
                            <input {...register("name", {
                                required: "This field is required", minLength: {
                                    value: 5,
                                    message: "Min length is 5"
                                }
                            })}
                                id="name" type="text" className="peer block w-full px-4 py-2 mt-2 text-muted bg-white
                                 border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none
                                  focus:ring focus:ring-opacity-40"
                            />
                            {errors.name && <p className="text-red-700 font-light">{errors.name.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block font-semibold text-muted text-lg"
                            >
                                Email
                            </label>
                            <input
                                type="email" {...register("email", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Entered value does not match email format"
                                    }
                                })}
                                className="block w-full px-4 py-2 mt-2 text-muted bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.email && <p className="text-red-700 font-light">{errors.email.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="subject"
                                className="block font-semibold text-muted text-lg"
                            >
                                Subject
                            </label>
                            <input {...register("subject", {
                                required: "This field is required", minLength: {
                                    value: 10,
                                    message: "Min length is 10"
                                }
                            })}
                                type="text" id="subject" name="subject"
                                className="block w-full px-4 py-2 mt-2 text-muted bg-white border rounded-md
                                 focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                            {errors.subject && <p className="text-red-700 font-light">{errors.subject.message}</p>}
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="message"
                                className="block font-semibold text-muted text-lg"
                            >
                                Message
                            </label>
                            <textarea {...register("message")}
                                id="message" className="block w-full px-4 py-2 mt-2 text-muted bg-white border
                                 rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring
                                  focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6 h-10 flex content-center">
                            <button type="submit" disabled={submit === "Submitted ✔"} className="submit w-full h-10 tracking-wide text-white transition-colors duration-200 transform bg-[#4d585f] rounded-md hover:bg-[#4d585fd4] focus:outline-none focus:bg-[#4d585fd4]">
                                {submit}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
