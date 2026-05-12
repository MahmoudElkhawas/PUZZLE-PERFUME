'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <motion.section
        className="pt-28 pb-16 px-6 bg-muted/30"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            variants={fadeUp}
            className="text-5xl font-light mb-4"
          >
            Contact Us
          </motion.h1>

          <motion.p variants={fadeUp} className="text-muted-foreground">
            We’d love to hear from you.
          </motion.p>
        </div>
      </motion.section>

      <section className="py-16 px-6">
        <motion.div
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
        >
          {[Mail, Phone, MapPin].map((Icon, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="p-6 border rounded-xl hover:shadow-xl transition"
            >
              <Icon className="text-accent mb-3" />
              <h3 className="font-semibold mb-2">
                {['Email', 'Phone', 'Location'][i]}
              </h3>
              <p className="text-muted-foreground text-sm">
                {i === 0 && 'hello@email.com'}
                {i === 1 && '+1 234 567 890'}
                {i === 2 && 'New York, USA'}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.input
              variants={fadeUp}
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />

            <motion.input
              variants={fadeUp}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border rounded-lg"
            />

            <motion.select
              variants={fadeUp}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Subject</option>
              <option value="product">Product</option>
              <option value="help">Help</option>
            </motion.select>

            <motion.textarea
              variants={fadeUp}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full p-3 border rounded-lg"
            />

            <motion.button
              variants={fadeUp}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              disabled={loading}
              className="w-full py-3 bg-accent text-white rounded-lg flex items-center justify-center gap-2"
            >
              <Send size={16} />
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>

            {success && (
              <p className="text-green-500 text-sm">
                ✅ Message sent successfully!
              </p>
            )}
          </motion.form>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-light">
              Why contact us?
            </motion.h2>

            <motion.p variants={fadeUp} className="text-muted-foreground">
              We help you find your perfect fragrance.
            </motion.p>

            <motion.ul variants={stagger}>
              {[
                'Expert advice',
                'Fast response',
                'Premium support',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex gap-2"
                >
                  ✓ {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
