import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import img1 from "../../../public/Images/Founder.jpg";
import Image from "next/image"; 
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
    <div className="min-h-screen flex items-center justify-center py-20">
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
          className="relative overflow-hidden rounded-lg shadow-lg w-[390px] mx-auto h-[600px]" // Adjust width
        >
          <img
            src={img1} // Corrected path
            alt="Our team at work"
            className="w-full h-full object-cover rounded-lg"
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
            Creative Media has become an essential part of our lives, connecting us through diverse forms of communication.In today's digital era, creative media companies play a vital role in crafting engaging and impactful content across various platforms. At Bhongaa Media Pvt. Ltd., we are dedicated to delivering top-notch digital and visual content solutions that empower our clients to achieve success.

The journey of Bhongaa Media began with a strong bond formed in childhood and strengthened during college. Friends Shubham, Pranav, Tushar, and Shashank were inseparable, sharing a passion for creativity that led to endless discussions, debates, and collaborative projects. Inspired by their shared vision, they founded "Bhongaa Media"—a name that reflects their commitment to innovation and excellence in the media and content creation industry.

Bhongaa Media was established as a hub of creativity, offering a comprehensive suite of services, including video production, graphic design, content creation, and digital marketing. Our mission is to bring our clients' ideas to life with expert-driven creative solutions.

As the company grew, the team encountered various challenges—tight deadlines, evolving digital trends, and high client expectations. However, their shared determination and the support of a skilled, dedicated team helped them navigate these obstacles, reinforcing their vision of delivering exceptional media and branding experiences.
            </p>
          </motion.div>
        </div>

        <motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center text-center"
>
  <motion.div variants={item} whileHover={{ y: -5, transition: { duration: 0.2 } }}>
    <Card className="transform transition-all duration-300 hover:shadow-lg flex justify-center items-center">
      <CardContent className="pt-6 text-center">
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
    <Card className="transform transition-all duration-300 hover:shadow-lg flex justify-center items-center">
      <CardContent className="pt-6 text-center">
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
    <Card className="transform transition-all duration-300 hover:shadow-lg flex justify-center items-center">
      <CardContent className="pt-6 text-center">
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