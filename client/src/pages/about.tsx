import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="py-20">
      <div className="container px-4 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Bhongaa Media
          </h1>
          <p className="text-xl text-muted-foreground">
            We're a team of creative minds and strategic thinkers passionate about social media excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Our team at work"
              className="w-full transform transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-primary/10 pointer-events-none" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2020, Bhongaa Media has helped countless brands find their voice and build meaningful connections with their audience through social media.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the power of authentic storytelling and data-driven strategies to create impactful social media presence that drives real business results.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="transform transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <motion.h3
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl font-bold text-primary mb-2"
                >
                  50+
                </motion.h3>
                <p className="text-muted-foreground">Active Clients</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="transform transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <motion.h3
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-4xl font-bold text-primary mb-2"
                >
                  1M+
                </motion.h3>
                <p className="text-muted-foreground">Audience Reached</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
            <Card className="transform transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <motion.h3
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-4xl font-bold text-primary mb-2"
                >
                  200%
                </motion.h3>
                <p className="text-muted-foreground">Average Growth</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}