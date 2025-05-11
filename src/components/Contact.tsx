'use client';

import { useState } from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-background">
      <div className="container-custom">
        <h2 className="heading-lg mb-10 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="heading-md mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p>Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a href="mailto:minhductranit@gmail.com" className="text-primary hover:underline">
                    minhductranit@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="text-primary text-xl mt-1 mr-4">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p>+84 973 399 776</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.linkedin.com/in/ductrandata/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://github.com/minhduc2672002" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-100 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="mailto:minhductranit@gmail.com"
                  className="bg-blue-100 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  <FaEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h3 className="heading-md mb-6">Send Me a Message</h3>
            
            {submitSuccess ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-md mb-4">
                Thank you for your message! I will get back to you as soon as possible.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                
                {submitError && (
                  <div className="bg-red-100 text-red-700 p-3 rounded-md">
                    {submitError}
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition-colors disabled:bg-blue-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 