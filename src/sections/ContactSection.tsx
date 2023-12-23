import React from "react";

const ContactSection = () => {
  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-sm">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Leave a message or call us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          +233 20 502 1111
          <br />
          antoine@nextspacedesign.com
          <br />
          PO Box 2224, Sakumono, Accra, Ghana
        </p>
        <form
          action="#"
          className="space-y-8"
          name="contact"
          data-netlify="true"
        >
          <input
            type="hidden"
            name="subject"
            data-remove-prefix
            value="Form submission from website"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Full name *
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number *
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              name="message"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary focus:border-primary"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
