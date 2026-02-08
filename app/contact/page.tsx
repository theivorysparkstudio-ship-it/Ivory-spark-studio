'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Upload, Phone, CheckCircle, Clock, Globe } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        serviceType: 'Custom 3D Printing',
        message: ''
    });
    const [hasFile, setHasFile] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.dataset.name as string]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setHasFile(true);
        } else {
            setHasFile(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const phoneNumber = '917374045132';

        let message = `*New Contact Inquiry*

*Name*: ${formData.name}
*Phone*: ${formData.phone}
*Email*: ${formData.email}
*Service*: ${formData.serviceType}

*Message*:
${formData.message}`;

        if (hasFile) {
            message += `\n\n*Note*: I also have a file attachment to send. I will share it in this chat.`;
        }

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="min-h-screen bg-black pt-32 pb-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column: Info & "Why Choose Us" */}
                    <div className="space-y-12 order-2 lg:order-1">
                        {/* Contact Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-bold mb-6 text-white">Get in <span className="text-gradient-gold">touch</span></h2>
                            <p className="text-ivory/60 mb-8 max-w-lg">
                                Whether you need a custom CAD design, 3D printing, or want to order one of our unique products, we're here to help.
                            </p>

                            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-start gap-4 hover:border-gold/30 transition-colors">
                                    <div className="p-3 bg-gold/10 rounded-lg text-gold">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Visit Us</h4>
                                        <p className="text-xs text-ivory/60 mt-1">Greater Noida<br />Uttarpradesh, India</p>
                                    </div>
                                </div>
                                <div className="p-5 bg-white/5 border border-white/5 rounded-2xl flex items-start gap-4 hover:border-gold/30 transition-colors">
                                    <div className="p-3 bg-gold/10 rounded-lg text-gold">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Email Us</h4>
                                        <p className="text-xs text-ivory/60 mt-1">theivoryspark.studio@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/917374045132"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-transform transform hover:scale-[1.02] shadow-lg shadow-[#25D366]/20"
                            >
                                <MessageSquare size={24} />
                                Chat on WhatsApp
                            </a>
                        </motion.div>

                        {/* Why Choose The Ivory Spark Studio */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Decorative Background */}
                            <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full pointer-events-none" />

                            <h3 className="text-2xl font-bold mb-6 text-white relative z-10">Why Choose <span className="text-gold"> The Ivory Spark Studio?</span></h3>

                            <div className="space-y-4 relative z-10">
                                {[
                                    { icon: Clock, title: "Rapid Execution", desc: "Fast and efficient completion of a task." },
                                    { icon: CheckCircle, title: "Precision Quality", desc: "As Industrial-grade tolerance." },
                                    { icon: Globe, title: "PAN India Shipping", desc: "We ship our custom creations all over India." },
                                    { icon: Phone, title: "Expert Support", desc: "Easily access to support team." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 min-w-[24px] text-gold">
                                            <item.icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-lg">{item.title}</h4>
                                            <p className="text-ivory/60 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl order-1 lg:order-2 h-fit"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Send Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-ivory/80">Name</label>
                                    <input
                                        type="text"
                                        data-name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors text-white"
                                        placeholder="Your Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-ivory/80">Phone</label>
                                    <input
                                        type="tel"
                                        data-name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors text-white"
                                        placeholder="+91 XXX XXX XXXX"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-ivory/80">Email</label>
                                <input
                                    type="email"
                                    data-name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors text-white"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-ivory/80">Services</label>
                                <select
                                    data-name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors text-ivory"
                                >
                                    <option className="bg-dark">3D Printing</option>
                                    <option className="bg-dark">CAD Designing</option>
                                    <option className="bg-dark">Product Inquiry</option>
                                    <option className="bg-dark">Other </option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-ivory/80">Message</label>
                                <textarea
                                    data-name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors text-white resize-none"
                                    placeholder="Tell us about your project requirements..."
                                ></textarea>
                            </div>

                            {/* File Upload */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-ivory/80 flex items-center justify-between">
                                    <span>Attach File (Optional)</span>
                                    <span className="text-xs text-ivory/40">Max 10MB</span>
                                </label>
                                <div className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-colors cursor-pointer bg-black/20 group ${hasFile ? 'border-gold/50 bg-gold/10' : 'border-white/10 hover:border-gold/30'}`}>
                                    <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                    <div className="flex flex-col items-center justify-center text-ivory/60 group-hover:text-gold transition-colors">
                                        <Upload className="w-6 h-6 mb-2" />
                                        <span className="text-sm font-medium">{hasFile ? 'File Selected' : 'Upload File'}</span>
                                        {hasFile && <span className="text-xs text-green-400 mt-1">Ready to send notification</span>}
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-gold text-dark font-bold py-4 rounded-xl hover:bg-white hover:text-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-gold/20 flex items-center justify-center text-lg">
                                Send Message <Send size={20} className="ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
