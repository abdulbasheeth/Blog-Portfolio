import React from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#F8F6F2] py-16 mt-10  px-4" id="contact">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[#437061] text-sm tracking-widest">CONTACT</p>
        <h1 className="mt-5 text-3xl sm:text-4xl font-serif font-bold">
          Let's Work Together
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Have a project in mind? I'd love to hear about it. Drop me a message
          and let's create something amazing.
        </p>
      </div>

      {/* Contact Content */}
      <div className="mt-12 max-w-7xl mx-auto grid gap-12 md:grid-cols-2">

        {/* Contact Info */}
        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-start gap-4">
            <Mail className="text-[#437061] w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold font-serif">Email</p>
              <p className="text-gray-600">basheethabdul.a@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <MapPin className="text-[#437061] w-6 h-6 mt-1" />
            <div>
              <p className="font-semibold font-serif">Location</p>
              <p className="text-gray-600">United Arab Emirates</p>
            </div>
          </div>

          {/* Availability */}
          <p className="mt-6 text-gray-600 border-t pt-4">
            I'm currently available for freelance work and full-time
            opportunities. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-5">
          <div className="flex flex-col">
            <label className="font-semibold font-serif">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="border rounded p-2 mt-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold font-serif">Email</label>
            <input
              type="email"
              placeholder="Your@email.com"
              className="border rounded p-2 mt-2"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold font-serif">Message</label>
            <textarea
              placeholder="Tell me about your project..."
              className="border rounded p-2 mt-2 h-36 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#437061] text-white font-semibold px-6 py-3 rounded hover:bg-[#365b52] transition"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
