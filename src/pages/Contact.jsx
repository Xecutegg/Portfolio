import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'soumagoswami2002@gmail.com',
      href: 'mailto:soumagoswami2002@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'West Bengal, India',
      href: '#',
    },
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const webhookURL = import.meta.env.VITE_DISCORD_WEBHOOK_URL;

      const payload = {
        content: `📩 **New Contact Form Submission** 📩\n\n🔹 **Name:** ${data.name}\n🔹 **Email:** ${data.email}\n🔹 **Phone:** ${data.phone}\n🔹 **Subject:** ${data.subject}\n🔹 **Message:**\n${data.message}`
      };

      const response = await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="min-h-screen bg-zinc-900 pt-24 pb-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-7xl mt-[-59px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="text-lime-500">Together</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Let's collaborate! I bring expertise in web development, esports management, and design.
            Contact me to create something amazing together!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Get in <span className="text-lime-500">Touch</span>
              </h2>
              <p className="text-zinc-400 mb-8">
                Ready to start your project? Have a question? I'd love to hear from you.
                Send me a message and I'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-4 bg-zinc-900 rounded-lg border border-zinc-700 hover:border-lime-500 transition-colors duration-200"
                >
                  <div className="p-3 bg-lime-500 text-black rounded-full">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{info.title}</h3>
                    {info.href === '#' ? (
                      <p className="text-zinc-400">{info.value}</p>
                    ) : (
                      <a
                        href={info.href}
                        className="text-zinc-400 hover:text-lime-500 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="bg-lime-500/5 p-6 rounded-xl border border-lime-500/20"
            >
              <h3 className="text-lg font-semibold text-white mb-3">Why Choose Me?</h3>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-lime-500 mr-2 flex-shrink-0" />
                  Fast response time (usually within 24 hours)
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-lime-500 mr-2 flex-shrink-0" />
                  High-quality work with attention to detail
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-lime-500 mr-2 flex-shrink-0" />
                  Ongoing support and maintenance
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-lime-500 mr-2 flex-shrink-0" />
                  Competitive pricing and flexible packages
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Contact <span className="text-lime-500">Me!</span>
              </h2>

              {/* Form Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    {...register('name', { required: 'Name is required' })}
                    className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-200 text-white placeholder:text-zinc-500 ${errors.name ? 'border-lime-500' : 'border-zinc-700'
                      }`}
                  />
                  {errors.name && (
                    <p className="text-lime-500 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-200 text-white placeholder:text-zinc-500 ${errors.email ? 'border-lime-500' : 'border-zinc-700'
                      }`}
                  />
                  {errors.email && (
                    <p className="text-lime-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register('phone', { required: 'Phone number is required' })}
                    className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-200 text-white placeholder:text-zinc-500 ${errors.phone ? 'border-lime-500' : 'border-zinc-700'
                      }`}
                  />
                  {errors.phone && (
                    <p className="text-lime-500 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Email Subject"
                    {...register('subject', { required: 'Subject is required' })}
                    className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-200 text-white placeholder:text-zinc-500 ${errors.subject ? 'border-lime-500' : 'border-zinc-700'
                      }`}
                  />
                  {errors.subject && (
                    <p className="text-lime-500 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div>
                <textarea
                  rows={6}
                  placeholder="Your Message"
                  {...register('message', { required: 'Message is required' })}
                  className={`w-full px-4 py-3 bg-zinc-900 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all duration-200 resize-none text-white placeholder:text-zinc-500 ${errors.message ? 'border-lime-500' : 'border-zinc-700'
                    }`}
                />
                {errors.message && (
                  <p className="text-lime-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${isSubmitting
                    ? 'bg-zinc-700 cursor-not-allowed text-zinc-400'
                    : 'bg-lime-500 hover:bg-lime-600 text-black'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-zinc-400 border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-2 border ${submitStatus === 'success'
                      ? 'bg-lime-500/10 border-lime-500/20 text-lime-500'
                      : 'bg-lime-500/10 border-lime-500/20 text-lime-500'
                    }`}
                >
                  {submitStatus === 'success' ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Message sent successfully! I'll get back to you soon.</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={20} />
                      <span>Failed to send message. Please try again.</span>
                    </>
                  )}
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;