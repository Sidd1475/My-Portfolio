"use client"

import React from 'react'
import { FaPaperPlane , FaEnvelope , FaPhoneAlt , FaMapMarkerAlt } from 'react-icons/fa'

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-start gap-4">
    <div className="text-white bg-gradient-to-br from-blue-500 to-purple-500 p-3 rounded-md text-lg">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold">{label}</h4>
      <p className="text-gray-700">{value}</p>
    </div>
  </div>
);
const Contact = () => {
  return (
    <section id='contact'>
        <div className='justify-cente text-white relative z-10  p-10 '>
           <h2 className='text-4xl font-bold text-center'>
        Let&apos;s Work Together
       </h2>
       <p className='m-8 text-2xl text-gray-200 max-w-xl mx-auto'>
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s create something amazing together.
       </p>
       <div className=" max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:gap-15 items-start ">
       {/* Left: Form */}
        <div className='bg-[#1a1a2e] p-8 rounded-xl shadow-2xl'>
          <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
          <form className="space-y-6" action="https://formsubmit.co/siddharth140705@gmail.com" method="POST">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Your Name</label>
              <input type="text" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Name" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Email Address</label>
              <input type="email" className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="Your Email Id" />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-300">Message</label>
              <textarea className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400" rows="4" placeholder="Tell me about your project..."></textarea>
            </div>

            <button type="submit" className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md hover:opacity-90 transition-all">
              <FaPaperPlane className="text-white" />
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info */}
        <div className=" p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">I&apos;m always open to discussing new opportunities, creative projects, or potential collaborations. Reach out via any channel below:</p>

          <div className="space-y-6">
            <ContactInfo icon={<FaEnvelope />} label="Email" value="siddharth140705@gmail.com" />
            <ContactInfo icon={<FaMapMarkerAlt />} label="Location" value="New Delhi , India" />
          </div>

          <div className="mt-10 p-4 bg-purple-50 rounded-md text-gray-700">
            <h4 className="font-semibold mb-2">Available for Freelance</h4>
            <p>I&apos;m currently open to freelance work & collaborations. Let’s bring your ideas to life!</p>
          </div>
        </div>
       
        </div>
        </div>
        
    </section>
  )
}

export default Contact
