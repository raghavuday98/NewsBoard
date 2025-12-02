import React from "react";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
  };

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <div className="max-w-3xl mx-auto p-6">
        
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="mb-6 text-slate-600">
          We'd love to hear from you. Send us a message using the form below.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              required
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              required
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              placeholder="How can we help?"
              required
              className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 h-32 outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Button */}
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
