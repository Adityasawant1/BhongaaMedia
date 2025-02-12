import Hero from "@/components/home/hero";
import Services from "@/components/home/services";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562646329-0d0f4d3bf503?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562646329-0d0f4d3bf503?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562646329-0d0f4d3bf503?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1562646329-0d0f4d3bf503?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

export default function Home() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div>
      <Hero />
      
      
      <motion.section 
        className="w-full py-20 bg-muted/30 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create engaging content that resonates with your audience and drives real results.
          </p>
          <Link href="/contact">
            <Button size="lg" className="text-lg">
              Get Started
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Work Section */}
      <motion.section 
        className="w-full py-10 bg-muted/30 flex flex-col items-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Some Creation</h2>
      </motion.section>

      {/* Marquee Section */}
      <div className="w-full overflow-hidden bg-muted/30 py-6 flex justify-center items-center">
        <motion.div 
          className="flex space-x-6 w-max"
          initial={{ x: "100%" }}
          animate={{ x: isPaused ? 0 : "-100%" }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative overflow-visible flex justify-center items-center"
            >
              <motion.img 
                src={src} 
                alt={`Social Media ${index + 1}`} 
                className="h-40 w-60 object-cover rounded-lg shadow-lg"
                whileHover={{ scale: 1.3, zIndex: 10 }} // Enlarges properly without clipping
                transition={{ duration: 0.3 }}
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
