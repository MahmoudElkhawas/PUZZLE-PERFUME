'use client';

import Image from 'next/image';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <motion.section
        className="pt-32 pb-12 px-4 md:px-8"
        initial="hidden"
        animate="show"
        variants={stagger}
      >
        <div className="max-width-container">
          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-6xl font-light text-primary mb-4"
          >
            About Luxe Perfumes
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Crafting luxury fragrances with passion and precision
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        className="py-24 px-4 md:px-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-width-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <motion.div variants={fadeUp} className="space-y-6">
              <h2 className="text-4xl font-light text-primary">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Luxe Perfumes was founded on the belief that fragrance is more than just a scent—it&apos;s an experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every fragrance is crafted by master perfumers combining tradition and innovation.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="relative h-96 rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src="/hero-perfume.jpg"
                alt="About Luxe Perfumes"
                fill
                className="object-cover"
              />
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Values */}
      <motion.section
        className="py-24 px-4 md:px-8 bg-muted/20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="max-width-container">
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-light text-primary mb-12 text-center"
          >
            Our Values
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[ "Premium Quality", "Sustainability", "Innovation" ].map((title, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="text-center space-y-4 p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-5xl font-light text-accent mb-4">✓</div>
                <h3 className="text-xl font-medium text-primary">{title}</h3>
                <p className="text-muted-foreground">
                  High-quality crafted experience with modern standards.
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}