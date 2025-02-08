import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About SocialPro
          </h1>
          <p className="text-xl text-muted-foreground">
            We're a team of creative minds and strategic thinkers passionate about social media excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Our team at work"
              className="rounded-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2020, SocialPro has helped countless brands find their voice and build meaningful connections with their audience through social media.
            </p>
            <p className="text-lg text-muted-foreground">
              We believe in the power of authentic storytelling and data-driven strategies to create impactful social media presence that drives real business results.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-4xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Active Clients</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-4xl font-bold text-primary mb-2">1M+</h3>
              <p className="text-muted-foreground">Audience Reached</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-4xl font-bold text-primary mb-2">200%</h3>
              <p className="text-muted-foreground">Average Growth</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
