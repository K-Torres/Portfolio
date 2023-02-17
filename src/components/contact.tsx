import '../styles/contact.css'

const Contact = () => {
    return (
        <div className=" relative w-full h-[60vh] flex flex-col justify-center min-h-screen overflow-hidden z-50 ">
            <div className=" bg-[#1d1d1d] form-container relative flex justify-center items-center z-50 w-1/4 h-[60vh] m-auto rounded-md overflow-hidden">
                <div className='h-[calc(100%-4px)] w-[calc(100%-4px)] bg-[#141414] p-6'>
                    <h1 className="text-3xl font-semibold text-center text-white uppercase">
                        Get in touch
                    </h1>
                    <form className="mt-6">
                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-muted"
                            >
                                Name
                            </label>
                            <input id="name"
                                type="text" name="name"
                                className="block w-full px-4 py-2 mt-2 text-muted bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-muted"
                            >
                                Email
                            </label>
                            <input
                                type="email" id="email" name="email"
                                className="block w-full px-4 py-2 mt-2 text-muted bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="subject"
                                className="block text-sm font-semibold text-muted"
                            >
                                Subject
                            </label>
                            <input
                                type="text" id="subject" name="subject"
                                className="block w-full px-4 py-2 mt-2 text-muted bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mb-2">
                            <label
                                htmlFor="detail"
                                className="block text-sm font-semibold text-muted"
                            >
                                More detail
                            </label>
                            <textarea
                                id="detail" name="detail"
                                className="block w-full px-4 py-2 mt-2 text-muted bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#4d585f] rounded-md hover:bg-[#4d585fd4] focus:outline-none focus:bg-[#4d585fd4]">
                                Send message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
