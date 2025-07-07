"use client";

const ContactSection = () => {
  return (
    <section className="kontak mt-32 px-4 sm:px-10" id="kontak">
      <h1 className="text-4xl font-bold text-center mb-2">Contact</h1>
      <p className="text-base text-center text-zinc-400 mb-10">
        Feel free to reach out to me
      </p>

      <form
        action="https://formsubmit.co/hajra.sardi466@gmail.com"
        method="POST"
        className="bg-zinc-800 rounded-xl p-6 sm:p-10 max-w-2xl mx-auto w-full shadow-md"
        autoComplete="off"
      >
        <div className="grid grid-cols-1 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="nama" className="font-semibold block mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="nama"
              id="nama"
              placeholder="Enter your name"
              className="w-full border border-zinc-600 bg-zinc-900 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="font-semibold block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full border border-zinc-600 bg-zinc-900 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="pesan" className="font-semibold block mb-2">
              Message
            </label>
            <textarea
              name="pesan"
              id="pesan"
              rows={6}
              placeholder="Type your message..."
              className="w-full border border-zinc-600 bg-zinc-900 text-white p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-violet-600"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-violet-700 hover:bg-violet-600 text-white font-semibold py-3 rounded-md transition duration-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;
