import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      
      <motion.section 
        className="py-24 bg-muted/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create engaging content that resonates with your audience and drives real results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
