import { ValidationError, useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mjvnnavg");
  return (
    <section>
      <div className="border border-red-800">
        <h1 className="2.1rem text-title mb-4 text-4xl font-semibold">
          <span className="icon-email mr-3 text-subtitle text-2xl" />
          Contact us
        </h1>
        <p className="text-subtitle mb-8">
          Contact for more information and get notified when i publish something
          new
        </p>
      </div>
      <div className="border border-red-800">
        <form
          className=" max-[500px]:flex max-[500px]:flex-col max-[500px]:w-[90%]"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center  max-[500px]:flex-col max-[500px]:items-start">
            <label htmlFor="email" className="text-subtitle">
              Email Address:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className=" text-inputText mt-4 max-[500px]:w-full w-64 bg-primary border border-[rgb(63,63,70)]  py-2 px-4 max-[500px]:ml-0 ml-4 rounded focus:border-specialBlue hover:border-specialBlue outline-none duration-200  resize-y "
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mt-6 flex items-center  max-[500px]:flex-col max-[500px]:items-start">
            <label className="text-subtitle" htmlFor="message">
              Your Message:
            </label>
            <textarea
              required
              name="message"
              id="message"
              className=" mt-4 max-[500px]:w-full max-[500px]:ml-0 w-64 bg-primary text-inputText border border-[rgb(63,63,70)]  py-2 px-4 ml-4 rounded focus:border-specialBlue hover:border-specialBlue outline-none duration-200 min-h-36 resize-y "
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            className=" mt-7  px-8 py-3 bg-[rgba(36,37,46,1)] text-lg capitalize  border border-[rgb(63,63,70)]
              rounded hover:opacity-100 duration-300 scale-95 hover:scale-100
              max-[500px]:px-1 max-[500px]:text-base max-[500px]:w-[50%] self-center disabled:bg-[rgba(36,37,46,0.4)] disabled:cursor-not-allowed "
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Submitting" : "Submit"}
          </button>
          {state.succeeded && (
            <p className="text-subtitle mt-4 text-lg">
              Your message has been sent successfully
            </p>
          )}
        </form>
        {/* For the animation */}
        <div className=" max-[700px]: hidden"></div>
      </div>
    </section>
  );
};

export default Contact;
