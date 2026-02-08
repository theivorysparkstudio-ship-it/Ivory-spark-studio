'use client';

import React from 'react';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        phone: '',
        email: '',
        serviceType: '3D Printing',
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
        <section id="contact" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            Let's Create <br />
                            <span className="text-gradient-gold">Something Amazing</span>
                        </h2>
                        <p className="text-xl text-ivory/70 mb-10 leading-relaxed">
                            Whether you need a custom CAD design, 3D printing, or want to order one of our unique products, we're here to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 p-4 glass rounded-xl">
                                <div className="p-3 bg-gold/10 rounded-full text-gold">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">WhatsApp Us</h4>
                                    <p className="text-ivory/60">Fastest response for quick queries.</p>
                                    <a href="https://wa.me/917374045132" className="text-gold hover:underline mt-1 block">
                                        Chat on WhatsApp &rarr;
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4 p-4 glass rounded-xl">
                                <div className="p-3 bg-gold/10 rounded-full text-gold">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg">Email Us</h4>
                                    <p className="text-ivory/60">Send us your detailed requirements.</p>
                                    <a href="mailto:theivoryspark.studio@gmail.com" className="text-gold hover:underline mt-1 block">
                                        theivoryspark.studio@gmail.com &rarr;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-3xl border border-white/5"
                    >
                        <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-ivory/80 ">Name</label>
                                    <input
                                        type="text"
                                        data-name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors"
                                        placeholder="Ivory Spark Studio"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-ivory/80">Phone</label>
                                    <input
                                        type="tel"
                                        data-name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors"
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
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors"
                                    placeholder="xyz@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-ivory/80">Services</label>
                                <select
                                    data-name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors text-ivory"
                                >
                                    <option className="bg-dark">3D Printing</option>
                                    <option className="bg-dark">CAD Designing</option>
                                    <option className="bg-dark">Product Inquiry</option>
                                    <option className="bg-dark">Other</option>
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
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            {/* File Upload (Added to match Contact Page) */}
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-ivory/80 flex items-center justify-between">
                                    <span>Attach File (Optional)</span>
                                </label>
                                <div className={`relative border-2 border-dashed rounded-xl p-4 text-center transition-colors cursor-pointer bg-white/5 group ${hasFile ? 'border-gold/50 bg-gold/10' : 'border-white/10 hover:border-gold/30'}`}>
                                    <input type="file" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                                    <div className="flex flex-col items-center justify-center text-ivory/60 group-hover:text-gold transition-colors">
                                        <span className="text-sm font-medium">{hasFile ? 'File Selected' : 'Click to upload file'}</span>
                                        {hasFile && <span className="text-xs text-green-400 mt-1">Ready to send notification</span>}
                                    </div>
                                </div>
                            </div>

                            <button type="submit" className="w-full bg-gold text-dark font-bold py-4 rounded-xl hover:bg-gold-dim transition-transform transform active:scale-95 flex items-center justify-center">
                                Send Message <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
